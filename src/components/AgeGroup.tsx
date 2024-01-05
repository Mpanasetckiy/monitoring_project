import React from "react";
import HorizontalBarChart from "./HorizontalBarChart";
import { Application } from "../models/application";

type AgeGroupProps = {
  data: Application[];
};

const AgeGroup: React.FC<AgeGroupProps> = ({ data }) => {
  const caseOutcomes: string[] = [
    "Grant of Protection",
    "Withdrawn",
    "Refused",
  ];
  const chartLabels: string[] = ["Under 18", "18-29", "30-49", "50-69", "70+"];

  const getDecisionsByAgeGroups = (
    applications: Application[],
    chartLabels: string[],
    caseOutcome: string
  ): number[] => {
    // Initialize an array to store the total decisions for each age group
    const decisionsByAgeGroups: number[] = Array(chartLabels.length).fill(0);

    // Loop through applications and update the counts based on age groups
    applications.forEach((application) => {
      const ageGroup = application.Age;
      const outcome = application["Case outcome group"];

      // Check if the age group is in the chartLabels array
      const index = chartLabels.indexOf(ageGroup);
      console.log(outcome, "|", caseOutcome);

      if (index !== -1 && outcome === caseOutcome) {
        decisionsByAgeGroups[index] += application.Decisions;
      }
    });

    return decisionsByAgeGroups;
  };

  // Example usage
  const decisionsByAgeGroupGranted: number[] = getDecisionsByAgeGroups(
    data,
    chartLabels,
    caseOutcomes[0]
  );
  const decisionsByAgeGroupWithdrawn: number[] = getDecisionsByAgeGroups(
    data,
    chartLabels,
    caseOutcomes[1]
  );
  const decisionsByAgeGroupRefused: number[] = getDecisionsByAgeGroups(
    data,
    chartLabels,
    caseOutcomes[2]
  );
  console.log(
    decisionsByAgeGroupGranted,
    decisionsByAgeGroupWithdrawn,
    decisionsByAgeGroupRefused
  );
  return (
    <div className="bar-age">
      <h4>Age Group</h4>
      <HorizontalBarChart
        granted={decisionsByAgeGroupGranted}
        withdrawn={decisionsByAgeGroupWithdrawn}
        refused={decisionsByAgeGroupRefused}
        labels={chartLabels}
      />
    </div>
  );
};

export default AgeGroup;