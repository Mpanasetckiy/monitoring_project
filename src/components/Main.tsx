import React, { useState, useEffect } from "react";

// Components
import Sidebar from "./Sidebar";

// Models
import { Application } from "../models/application";
import { Category } from "../models/category";
import { Group } from "../models/group";

// Data
import dataSource from "../data/russiaAll.json";
import AgeGroup from "./AgeGroup";
import Total from "./Total";

const Main: React.FC = () => {
  const [data, setData] = useState<Application[]>(dataSource);
  const [selectedYear, setSelectedYear] = useState<Number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category>(null);
  const [selectedGroup, setSelectedGroup] = useState<Group>(null);
  const [definition, setDefinition] = useState<string | null>();

  const allYears = Array.from(new Set(dataSource.map((item) => item.Year)));

  const dataByYear = dataSource.filter((application) => {
    return application["Year"] === selectedYear;
  });

  const handleCategoryChange = (selectedCategory: Category) => {
    setSelectedCategory(selectedCategory);
  };

  const handleGroupChange = (selectedGroup: Group) => {
    setSelectedGroup(selectedGroup);
  };

  const handleDefinitionChange = (selectedDefinition: string | null) => {
    setDefinition(selectedDefinition);
  };

  const handleYearChange = (newYear: number) => {
    setSelectedYear(newYear);
  };

  return (
    <div className="main-container">
      <Sidebar
        selectedCategory={selectedCategory}
        onChangeBtn={handleCategoryChange}
        selectedGroup={selectedGroup}
        onChangeGroup={handleGroupChange}
        onChangeDefinition={handleDefinitionChange}
      />
      <div className="content-bars">
        <div className="content__header">
          <h4>{selectedGroup || selectedCategory}</h4>
          {definition && <p>{definition}</p>}
          <span></span>
          <div className="content__range-selector">
            {allYears.map((year) => (
              <span
                key={year}
                className={`selector ${selectedYear === year ? "active" : ""}`}
                onClick={() => handleYearChange(year)}
              >
                {year}
              </span>
            ))}
          </div>
        </div>

        <div className="bars">
          <Total data={dataByYear} />
          <AgeGroup data={dataByYear} />
        </div>
      </div>
    </div>
  );
};

export default Main;
