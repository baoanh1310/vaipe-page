import React from "react";
import "./objective.sass";
import objectiveImage from "../../images/body/objective/objective.svg";
import objective1 from "../../images/body/objective/objective1.svg";
import objective2 from "../../images/body/objective/objective2.svg";
import objective3 from "../../images/body/objective/objective3.svg";
import objectiveArrow from "../../images/body/objective/objective_arrow.svg";

const Objective = () => {
  return (
    <>
      <div
        className="block_title"
        style={{
          backgroundImage: `url("${require("../../images/header/objective.svg")}"`
        }}
      >
        Objectives
      </div>
      <div
        className="objectives"
        style={{
          backgroundImage: `url("${require("../../images/body/union_white.png")}"`
        }}
      >
        <div className="objective_title">
          <p><b>AI</b>-assisted IoT-enabled smart, optimal, and <b>P</b>rotective h<b>E</b>althcare monitoring and supporting system</p>
        </div>

        <div className="objective_overview">
          <div className="objective_big_column">
            <div className="overview_title">
              <p>Unified data collection interface<br/>
              AI-based smart healthcare application</p>
            </div>
            <div className="overview_image">
              <img src={objective1} />
            </div>
            <div className="overview_list_items">
              <ul>
                <li>Personalized healthcare profile</li>
                <li>Healthcare data managing and monitoring</li>
                <li>Treatment supporting and enhancing</li>
                <li>Privacy conservation</li>
              </ul>
            </div>
          </div>

          <div className="objective_small_column">
            <img src={objectiveArrow} />
          </div>

          <div className="objective_big_column">
            <div className="overview_title">
              <p>Vietnamese health database</p>
            </div>
            <div className="overview_image">
              <img src={objective2} />
            </div>
            <div className="overview_list_items">
            </div>
          </div>

          <div className="objective_small_column">
            <img src={objectiveArrow} />
          </div>

          <div className="objective_big_column">
            <div className="overview_title">
              <p>AI-assisted healthcare supporting</p>
            </div>
            <div className="overview_image">
              <img src={objective3} />
            </div>
            <div className="overview_list_items">
            </div>
          </div>

        </div>

        <div className="objective_details">
          
        </div>
      </div>
    </>
  );
};
export default Objective;
