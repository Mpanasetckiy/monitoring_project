import React, { useEffect } from "react";

import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

const Sidebar: React.FC = () => {
  useEffect(() => {
    // Initialize Materialize components
    const collapsibles = document.querySelectorAll(".collapsible");
    M.Collapsible.init(collapsibles, { accordion: false });
  }, []);

  return (
    <div className="row">
      <div className="col">
        <ul className="collection with-header">
          <li className="collection-header">
            <span>Choose a matter</span>
          </li>
          <li className="collection-item">
            <label>
              <input type="radio" name="year" />
              <span>RESIDENCE PERMIT</span>
            </label>
          </li>
          <li className="collection-item">
            <label>
              <input type="radio" name="year" defaultChecked={true} />
              <span>INTERNATIONAL PROTECTION</span>
            </label>
          </li>
          <li className="collection-item">
            <label>
              <input type="radio" name="year" />
              <span>CITIZENSHIP</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
