using CarePair.Core.Models;
using CarePair.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HungarianAlgorithm;
using HungarianAlgorithmNamespace;
using Microsoft.Extensions.Hosting;

namespace CarePair.Service
{
    //public class MatchingService
    //{
    //    private readonly IVolunteerRepository _volunteerRepository;
    //    private readonly IPatientRepository _patientRepository;

        //    public MatchingService(IVolunteerRepository volunteerRepository, IPatientRepository patientRepository)
        //    {
        //        _volunteerRepository = volunteerRepository;
        //        _patientRepository = patientRepository;
        //    }

        //    public List<Assignment> AssignVolunteersToPatients()
        //    {
        //        var volunteers = _volunteerRepository.GetVolunteerList();
        //        var patients = _patientRepository.GetPatientList();

        //        // Create cost matrix based on availability and preferences
        //        double[,] costMatrix = CreateCostMatrix(volunteers, patients);

        //        // Solve using the Hungarian algorithm
        //        HungarianAlgorithm hungarian = new HungarianAlgorithm(costMatrix);
        //        int[] result = hungarian.Run();

        //        // Create assignment list
        //        List<Assignment> assignments = new List<Assignment>();

        //        for (int i = 0; i < result.Length; i++)
        //        {
        //            if (result[i] >= 0)
        //            {
        //                assignments.Add(new Assignment
        //                {
        //                    VolunteerId = volunteers[i].Id,
        //                    PatientId = patients[result[i]].Id,
        //                    MatchScore = costMatrix[i, result[i]],
        //                    AssignmentDate = DateTime.Now
        //                });
        //            }
        //        }

        //        return assignments;
        //    }

        //    private double[,] CreateCostMatrix(List<Volunteer> volunteers, List<Patient> patients)
        //    {
        //        int size = Math.Max(volunteers.Count, patients.Count);
        //        double[,] matrix = new double[size, size];

        //        for (int i = 0; i < volunteers.Count; i++)
        //        {
        //            for (int j = 0; j < patients.Count; j++)
        //            {
        //                matrix[i, j] = CalculateMatchScore(volunteers[i], patients[j]);
        //            }
        //        }

        //        return matrix;
        //    }

        //    private double CalculateMatchScore(Volunteer volunteer, Patient patient)
        //    {
        //        // Calculate match score (the lower the score, the better the match)
        //        double score = 0;

        //        // Match based on availability
        //        score -= 10; // Bonus for matching time

        //        // Match based on interests
        //        score -= 5;

        //        // Higher score = worse match (algorithm looks for lower values)
        //        return Math.Abs(score);
        //    }
        //}
        public class MatchingService
        {
            public int[] MatchVolunteersToPatients(List<Volunteer> volunteers, List<Patient> patients)
            {
                int volunteerCount = volunteers.Count;
                int patientCount = patients.Count;
                int size = Math.Max(volunteerCount, patientCount); // יצירת מטריצה ריבועית

                int[,] costMatrix = new int[size, size];


            //מילוי מטריצת העלות(למשל, ניקוד התאמה בין מתנדבים לחולים)
                for (int i = 0; i < volunteerCount; i++)
            {
                for (int j = 0; j < patientCount; j++)
                {
                    costMatrix[i, j] = CalculateMatchScore(volunteers[i], patients[j]);
                }
            }

            // שימוש באלגוריתם ההונגרי
            int[] result = HungarianAlgorithm.HungarianAlgorithm.FindAssignments(costMatrix);

                return result;
            }

            private int CalculateMatchScore(Volunteer volunteer, Patient patient)
            {
       // חישוב ניקוד התאמה (ככל שהניקוד נמוך יותר, ההתאמה טובה יותר)
                int score = 0;


            // התאמה בהתאם לזמינות

            if (!volunteer.AvailableTimes.Intersect(patient.RequiredTimes).Any())
                score = 10000;


            // מין

            if (!volunteer.GenderPreferenceJson.Contains(patient.GenderJson) || !patient.GenderPreferenceJson.Contains(volunteer.GenderJson))
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
                score +=30;
            }
            else

            // אזור

            if ( volunteer.Area == patient.Area )
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

            if (!volunteer.ReligiosityPreferenceJson.Contains(patient.ReligiosityJson) || !patient.ReligiosityPreferenceJson.Contains(volunteer.ReligiosityJson))
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

            if ( volunteer.WardPreferenceJson.Contains(patient.WardJson))
            {
                score -=10;
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
