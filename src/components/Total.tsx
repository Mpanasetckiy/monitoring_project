import React from "react";
import HorizontalBarChart from "./HorizontalBarChart";
import { Application } from "../models/application";

type TotalProps = {
  data: Application[];
};

const Total: React.FC<TotalProps> = ({ data }) => {
  const caseOutcomes: string[] = [
    "Grant of Protection",
    "Withdrawn",
    "Refused",
  ];

  // Specify an array of choices for each case
  const chartLabels: string[] = ["Male", "Female"];

  const getDecisionsBySexGroups = (caseOutcome: string): number[] => {
    // Initialize an array to store the total decisions for each sex group
    const decisionsBySexGroups: number[] = Array(chartLabels.length).fill(0);

    data.forEach((application) => {
      const sexGroup = application.Sex;
      const outcome = application["Case outcome group"];

      // Check if the sex group is in the chartLabels array
      const index = chartLabels.indexOf(sexGroup);

      if (index !== -1 && outcome === caseOutcome) {
        decisionsBySexGroups[index] += application.Decisions;
      }
    });

    return decisionsBySexGroups;
  };
  // Example usage
  const decisionsBySexGroupGranted: number[] = getDecisionsBySexGroups(
    caseOutcomes[0]
  );
  const decisionsBySexGroupWithdrawn: number[] = getDecisionsBySexGroups(
    caseOutcomes[1]
  );
  const decisionsBySexGroupRefused: number[] = getDecisionsBySexGroups(
    caseOutcomes[2]
  );

  return (
    <div className="bar-total">
      <h5>TOTAL</h5>
      <HorizontalBarChart
        granted={decisionsBySexGroupGranted}
        withdrawn={decisionsBySexGroupWithdrawn}
        refused={decisionsBySexGroupRefused}
        labels={chartLabels}
      />
    </div>
  );
};

export default Total;
