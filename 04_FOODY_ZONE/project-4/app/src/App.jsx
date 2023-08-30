import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="topContainer">
        <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>

        <div className="search">
          <input type="text" placeholder="Search Food..." />
        </div>
      </div>

      <div className="filterContainer">
        <button></button>
      </div>
    </div>
  );
};

export default App;
