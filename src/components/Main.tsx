import React, { useState, useEffect } from "react";

import Sidebar from "./Sidebar";

import dataSource from "../data/russia.json";

type Application = {
  Year: number;
  Quarter: string;
  Nationality: string;
  Region: string;
  "Case type": string;
  "Case outcome group": string;
  "Case outcome": string;
  Age: string;
  Sex: string;
  "Applicant type": string;
  UASC: string;
  "Host Country": string;
  Decisions: number;
};

const Main: React.FC = () => {
  const [data, setData] = useState<Application[]>(dataSource);

  const myAge = data.filter((application) => {
    return application.Age === "18-29" && application.Sex === "Male";
  });
  console.log(myAge);

  return (
    <div className="main-container">
      <Sidebar />
      <div className="content">
        <div className="content__header">
          <h4>International Protection</h4>
          <p>
            According to European Union directives international protection is
            defined as refugee status or subsidiary protection status. Those who
            receive a positive decision also receive a residence permit. These
            statistics include decisions on international protection as well as
            decisions on residence permits for asylum seekers.
          </p>
          <span></span>
          <div className="content__range-selector">
            <span className="selector">2015</span>
            <span className="selector">2016</span>
            <span className="selector">2017</span>
            <span className="selector">2018</span>
            <span className="selector">2019</span>
            <span className="selector">2020</span>
            <span className="selector">2021</span>
            <span className="selector">2022</span>
            <span className="selector">2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
