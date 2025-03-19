using CarePair.Core.Models;
using CarePair.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using HungarianAlgorithm;
using CarePair.Core.Service;

namespace CarePair.Service
{
    public class MatchingService : IMatchingService
    {
        private readonly IMatchRepository _matchRepository;

        public MatchingService(IMatchRepository matchRepository)
        {
            _matchRepository = matchRepository;
        }

        // אישור התאמה
        public bool ConfirmMatch(int userId, int matchedUserId, bool isVolunteer)
        {
            // קביעת מי המתנדב ומי המטופל לפי isVolunteer
            int volunteerId = isVolunteer ? userId : matchedUserId;
            int patientId = isVolunteer ? matchedUserId : userId;

            var match = _matchRepository.GetPendingMatch(volunteerId, patientId);
            if (match == null)
            {
                return false;
            }

            _matchRepository.ConfirmMatch(volunteerId, patientId, isVolunteer);

            if (match.VolunteerConfirmed && match.PatientConfirmed)
            {
                _matchRepository.MoveToActiveMatch(volunteerId, patientId);
                _matchRepository.RemovePendingMatch(volunteerId, patientId);
                return true;
            }

            return false;
        }

        // הסרת התאמות שפג תוקפן
        public void RemoveExpiredMatches()
        {
            _matchRepository.RemoveExpiredMatches();
        }

        public int? GetMatchedUserId(int userId)
        {
            var match = _matchRepository.GetPendingMatchByUserId(userId);
            if (match == null)
            {
                return null; // אין שיבוץ ממתין עבור המשתמש הזה
            }

            // מחזיר את ה-ID של המשובץ (אם המשתמש הוא מתנדב, מחזיר את המטופל, ולהיפך)
            return match.VolunteerId == userId ? match.PatientId : match.VolunteerId;
        }

        public int? GetActiveMatchedUserId(int userId)
        {
            var match = _matchRepository.GetActiveMatchByUserId(userId);
            if (match == null)
            {
                return null; // אין שיבוץ פעיל עבור המשתמש הזה
            }

            // מחזיר את ה-ID של המשובץ (אם המשתמש הוא מתנדב, מחזיר את המטופל, ולהיפך)
            return match.VolunteerId == userId ? match.PatientId : match.VolunteerId;
        }


        // איפוס התאמות חודשיות
        public void ResetMonthlyMatches()
        {
            List<ActiveMatch> matches = _matchRepository.GetAllActiveMatches();

            foreach (var match in matches)
            {
                _matchRepository.RemoveActiveMatch(match.VolunteerId, match.PatientId);
            }
        }

        // שיוך מתנדבים למטופלים באמצעות אלגוריתם הונגרי
        public int[] MatchVolunteersToPatients(List<Volunteer> volunteers, List<Patient> patients)
        {
            int volunteerCount = volunteers.Count;
            int patientCount = patients.Count;
            int size = Math.Max(volunteerCount, patientCount); // יצירת מטריצה ריבועית

            int[,] costMatrix = new int[size, size];

            // מילוי מטריצת העלות
            for (int i = 0; i < volunteerCount; i++)
            {
                for (int j = 0; j < patientCount; j++)
                {
                    costMatrix[i, j] = CalculateMatchScore(volunteers[i], patients[j]);
                }
            }

            // שימוש באלגוריתם ההונגרי
            int[] result = HungarianAlgorithm.HungarianAlgorithm.FindAssignments(costMatrix);
                 // הוספת ההתאמות לטבלת השיבוצים הממתינים
            for (int volunteerIdx = 0; volunteerIdx < volunteerCount; volunteerIdx++)
            {
                int patientIdx = result[volunteerIdx];

                // בדיקה אם ההתאמה תקפה (האינדקס של המטופל נמצא בטווח)
                if (patientIdx >= 0 && patientIdx < patientCount)
                {
                    var volunteer = volunteers[volunteerIdx];
                    var patient = patients[patientIdx];

                    // בדיקת כפילויות - וידוא שאין כבר שיבוץ ממתין לזוג הזה
                    if (_matchRepository.GetPendingMatch(volunteer.Id, patient.Id) == null)
                    {
                        // יצירת שיבוץ ממתין חדש
                        var pendingMatch = new PendingMatch
                        {
                            VolunteerId = volunteer.Id,
                            PatientId = patient.Id,
                            MatchTime = DateTime.Now,
                            VolunteerConfirmed = false,
                            PatientConfirmed = false
                        };

                        // הוספת השיבוץ לרפוזיטורי
                        _matchRepository.AddPendingMatch(pendingMatch);
                    }
                }
                // אפשרות לטיפול במתנדבים שלא שובצו (אם רלוונטי)
                else
                {
                    // לדוגמה: רישום ללוג או התראה על מתנדב שלא שובץ
                    // Console.WriteLine($"Volunteer {volunteers[volunteerIdx].Id} was not assigned to any patient.");
                }
            }


                return result;
        }

        // חישוב ניקוד התאמה
        private int CalculateMatchScore(Volunteer volunteer, Patient patient)
        {
            int score = 0;

            // התאמה בהתאם לזמינות
            if (!volunteer.AvailableTimes.Intersect(patient.RequiredTimes).Any())
                score = 10000;

            // מין
            if (!volunteer.GenderPreferenceJson.Contains(patient.GenderJson) ||
                !patient.GenderPreferenceJson.Contains(volunteer.GenderJson))
            {
                if (volunteer.Religiosity == Religiosity.Orthodox || patient.Religiosity == Religiosity.Orthodox)
                {
                    score = 100000;
                }
                else
                {
                    score += 10;
                }
            }

            // שפה
            if (!volunteer.Language.Intersect(patient.Language).Any())
            {
                score = 100000;
            }

            if (!volunteer.LanguagePreference.Intersect(patient.Language).Any())
            {
                score += 30;
            }

            // אזור
            if (volunteer.Area == patient.Area)
            {
                if (volunteer.City != patient.City)
                {
                    score += 20;
                }
                else
                {
                    score -= 10;
                }
            }
            else
            {
                score = 100000;
            }

            // דת
            if (!volunteer.ReligiosityPreferenceJson.Contains(patient.ReligiosityJson) ||
                !patient.ReligiosityPreferenceJson.Contains(volunteer.ReligiosityJson))
            {
                if (volunteer.Religiosity == Religiosity.Orthodox || patient.Religiosity == Religiosity.Orthodox)
                {
                    score = 100000;
                }
                else
                {
                    score += 20;
                }
            }

            // מחלקה
            if (volunteer.WardPreferenceJson.Contains(patient.WardJson))
            {
                score -= 10;
            }

            // גיל
            if (volunteer.AgePreference.Contains(patient.AgeGroup))
            {
                score -= 10;
            }
            if (patient.AgePreference.Contains(volunteer.AgeGroup))
            {
                score -= 10;
            }

            // התאמה בתחומי עניין
            int commonInterestsCount = volunteer.Interests.Intersect(patient.Interests).Count();
            if (commonInterestsCount > 0)
            {
                score -= 5 + (commonInterestsCount - 1);
            }

            // ניקוד גבוה יותר = התאמה פחות טובה (האלגוריתם מחפש ערכים נמוכים)
            return score;
        }
    }
}