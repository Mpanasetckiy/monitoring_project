import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

type HorizontalBarChartProps = {
  granted: number[];
  withdrawn: number[];
  refused: number[];
  labels: string[];
};

const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({
  granted,
  withdrawn,
  refused,
  labels,
}) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Cleanup previous chart instance
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Granted",
                data: granted,
                backgroundColor: "rgb(69, 137, 188)",
                borderColor: "rgb(69, 137, 188)",
                borderWidth: 1,
              },
              {
                label: "Withdrawn",
                data: withdrawn,
                backgroundColor: "rgb(232, 125, 44)",
                borderColor: "rgb(232, 125, 44)",
                borderWidth: 1,
              },
              {
                label: "Refused",
                data: refused,
                backgroundColor: "rgb(182, 56, 71)",
                borderColor: "rgb(182, 56, 71)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            indexAxis: "y",
            scales: {
              x: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }

    // Cleanup on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [granted, withdrawn, refused, labels]);

  return <canvas ref={chartRef} />;
};

export default HorizontalBarChart;
