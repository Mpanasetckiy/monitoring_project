import React, { useEffect, useState } from "react";

// Models
import { Category } from "../models/category";
import { Group } from "../models/group";

import definitions from "../data/definitions.json";

import "materialize-css/dist/css/materialize.min.css";

type SidebarProps = {
  selectedCategory: Category;
  onChangeBtn: (selectedCategory: Category) => void;
  selectedGroup: Group;
  onChangeGroup: (selectedGroup: Group) => void;
  onChangeDefinition: (selectedDefinition: string | null) => void;
};

const Sidebar: React.FC<SidebarProps> = ({
  selectedCategory,
  onChangeBtn,
  selectedGroup,
  onChangeGroup,
  onChangeDefinition,
}) => {
  const [selectedCatValue, setSelectedCatValue] =
    useState<Category>(selectedCategory);
  const [selectedGroupValue, setSelectedGroupValue] = useState<Group>(null);

  const findDefinition = (group: Group | Category): string | null => {
    console.log(group);

    if (group) {
      const matchingTerm = definitions.find(
        (term) => term["Case outcome"].toUpperCase() === group.toUpperCase()
      );
      console.log(matchingTerm?.Definition);

      return matchingTerm ? matchingTerm.Definition : null;
    }

    return null;
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value as Category;
    setSelectedCatValue(newValue);
    onChangeBtn(newValue);
    setSelectedGroupValue(null);
    onChangeGroup(null);
    onChangeDefinition(findDefinition(newValue));
  };

  const handleGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value as Group;
    setSelectedGroupValue(newValue);
    onChangeGroup(newValue);
    onChangeDefinition(findDefinition(newValue));
  };

  useEffect(() => {
    if (selectedCategory === "INTERNATIONAL PROTECTION") {
      setSelectedGroupValue(selectedGroup);
    }
  }, [selectedCategory, selectedGroup]);

  return (
    <div>
      <div className="row">
        <div className="col">
          <ul className="collection with-header">
            <li className="collection-header">
              <span>Choose a category</span>
            </li>
            <li className="collection-item">
              <label>
                <input
                  type="radio"
                  name="category"
                  value="RESIDENCE PERMIT"
                  checked={selectedCatValue === "RESIDENCE PERMIT"}
                  onChange={handleCategoryChange}
                />
                <span>RESIDENCE PERMIT</span>
              </label>
            </li>
            <li className="collection-item">
              <label>
                <input
                  type="radio"
                  name="category"
                  value="INTERNATIONAL PROTECTION"
                  checked={selectedCatValue === "INTERNATIONAL PROTECTION"}
                  onChange={handleCategoryChange}
                />
                <span>INTERNATIONAL PROTECTION</span>
              </label>
            </li>
            <li className="collection-item">
              <label>
                <input
                  type="radio"
                  name="category"
                  value="CITIZENSHIP"
                  checked={selectedCatValue === "CITIZENSHIP"}
                  onChange={handleCategoryChange}
                />
                <span>CITIZENSHIP</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
      {selectedCategory === "INTERNATIONAL PROTECTION" ? (
        <div className="row">
          <div className="col">
            <ul className="collection with-header">
              <li className="collection-header">
                <span>Choose a group</span>
              </li>
              <li className="collection-item">
                <label>
                  <input
                    type="radio"
                    name="group"
                    value="REFUGEE PERMISSION"
                    checked={selectedGroupValue === "REFUGEE PERMISSION"}
                    onChange={handleGroupChange}
                  />
                  <span>REFUGEE PERMISSION</span>
                </label>
              </li>
              <li className="collection-item">
                <label>
                  <input
                    type="radio"
                    name="group"
                    value="HUMANITARIAN PROTECTION"
                    checked={selectedGroupValue === "HUMANITARIAN PROTECTION"}
                    onChange={handleGroupChange}
                  />
                  <span>HUMANITARIAN PROTECTION</span>
                </label>
              </li>
              <li className="collection-item">
                <label>
                  <input
                    type="radio"
                    name="group"
                    value="DISCRETIONARY LEAVE"
                    checked={selectedGroupValue === "DISCRETIONARY LEAVE"}
                    onChange={handleGroupChange}
                  />
                  <span>DISCRETIONARY LEAVE</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Sidebar;
