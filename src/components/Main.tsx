import React, { useState, useEffect } from "react";

// Components
import Sidebar from "./Sidebar";

// Models
import { Application } from "../models/application";
import { Category } from "../models/category";
import { Group } from "../models/group";

// Data
import dataSource from "../data/russia.json";
import AgeGroup from "./AgeGroup";

const Main: React.FC = () => {
  const [data, setData] = useState<Application[]>(dataSource);
  const [selectedCategory, setSelectedCategory] = useState<Category>(null);
  const [selectedGroup, setSelectedGroup] = useState<Group>(null);
  const [definition, setDefinition] = useState<string | null>();

  // const myAge = data.filter((application) => {
  //   return application.Age === "18-29" && application.Sex === "Male";
  // });
  // // console.log(myAge);

  const handleCategoryChange = (selectedCategory: Category) => {
    setSelectedCategory(selectedCategory);
  };

  const handleGroupChange = (selectedGroup: Group) => {
    setSelectedGroup(selectedGroup);
  };

  const handleDefinitionChange = (selectedDefinition: string | null) => {
    setDefinition(selectedDefinition);
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
        <div className="bars">
          <AgeGroup data={data} />
        </div>
      </div>
    </div>
  );
};

export default Main;
