import React, { useState, useEffect } from "react";

import Sidebar from "./Sidebar";

// Models
import { Application } from "../models/application";
import { Category } from "../models/category";
import { Group } from "../models/group";

import dataSource from "../data/russia.json";

const Main: React.FC = () => {
  const [data, setData] = useState<Application[]>(dataSource);
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    "INTERNATIONAL PROTECTION"
  );
  const [selectedGroup, setSelectedGroup] = useState<Group>(null);

  const myAge = data.filter((application) => {
    return application.Age === "18-29" && application.Sex === "Male";
  });
  // console.log(myAge);

  const handleCategoryChange = (selectedCategory: Category) => {
    setSelectedCategory(selectedCategory);
  };

  const handleGroupChange = (selectedGroup: Group) => {
    setSelectedGroup(selectedGroup);
  };

  console.log(selectedCategory, selectedGroup);

  return (
    <div className="main-container">
      <Sidebar
        selectedCategory={selectedCategory}
        onChangeBtn={handleCategoryChange}
        selectedGroup={selectedGroup}
        onChangeGroup={handleGroupChange}
      />
      <div className="content">
        <div className="content__header">
          <h4>{selectedGroup || selectedCategory}</h4>
          <p>
            International protection, under UK law, denotes the legal safeguard
            granted to individuals facing a genuine and well-founded fear of
            persecution in their home country. It includes the recognition of
            refugee status or subsidiary protection, offering the right to
            reside in the UK and protection against forced return. This
            protection is contingent on demonstrating a credible threat of
            persecution based on factors such as race, religion, nationality,
            political opinion, or membership in a particular social group.
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
