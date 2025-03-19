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
        public class MatchService
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
