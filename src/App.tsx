import React from "react";
import "materialize-css/dist/css/materialize.min.css";

// Components
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
