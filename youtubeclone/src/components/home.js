import React from "react";
import "./home.css";

function home() {
  return (
    <div className="homepage">
      <input type="text" placeholder="Search..." />
      <button className="searchbutton" type="submit">
        Search
      </button>
      <div className="noresultbox">
        <p>Please Submit a Search Above</p>
      </div>
    </div>
  );
}

export default home;
