import React from "react";
import "./objective.sass";
import objectiveImage from "../../images/body/objective/objective.svg";
import objective1 from "../../images/body/objective/objective1.svg";
import objective2 from "../../images/body/objective/objective2.svg";
import objective3 from "../../images/body/objective/objective3.svg";
import objectiveArrow from "../../images/body/objective/objective_arrow.svg";

import ScrollToTopBtn from "../../Footer/ScrollToTopBtn";

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
                <li><span className="bold_word">Personalized</span> healthcare profile</li>
                <li>Healthcare data managing and monitoring</li>
                <li>Treatment supporting and enhancing</li>
                <li><span className="bold_word">Privacy</span> conservation</li>
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
              <ul>
                <li><span className="bold_word">Vietnamese</span> specified healthcare data</li>
                <li><span className="bold_word">Multi sources, multi types</span> data</li>
                <li><span className="bold_word">Realtime</span> and <span>continuous</span> data</li>
              </ul>
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
              <ul>
                <li>Information extraction </li>
                <li>Data mining</li>
                <li>Risk <span className="bold_word">forecasting</span></li>
                <li>Health information management</li>
              </ul>
            </div>
          </div>

        </div>

        <div className="objective_details">
          <ul>
            <li>
              <div className="custom_bullet">
                <img src={require("../../images/body/objective/custom_bullet_objective.svg")} />
                To design a smart healthcare system consisting of two components, namely a front-end (smartphone app) and a back-end (analytics on server and cloud), well defined of each component’s roles and interplay protocols between them.
              </div>
            </li>
            <li>
              <div className="custom_bullet">
                <img src={require("../../images/body/objective/custom_bullet_objective.svg")} />
                To define standard data structures for representing heterogeneous data captured from multiple sources and propose efficient methods for storing and processing the data.
              </div>
            </li>
            <li>
              <div className="custom_bullet">
                <img src={require("../../images/body/objective/custom_bullet_objective.svg")} />
                To propose models for extracting information from raw data and fuse various data to provide clinical insights and disease risk prediction with supporting evidence.7. To construct a publicly available, normalized database of Vietnamese healthcare data for facilitating related research and a publicly available API library for analyzing and forecasting healthcare data.
              </div>
            </li>
            <li>
              <div className="custom_bullet">
                <img src={require("../../images/body/objective/custom_bullet_objective.svg")} />
                To propose methods based on blockchain technology and federated learning to enhance user privacy and engagement in sharing their health-related data.
              </div>
            </li>
            <li>
              <div className="custom_bullet">
                <img src={require("../../images/body/objective/custom_bullet_objective.svg")} />
                To propose a resource optimization scheme for minimizing the deployment cost while guaranteeing QoS constraints.
              </div>
            </li>
            <li>
              <div className="custom_bullet">
                <img src={require("../../images/body/objective/custom_bullet_objective.svg")} />
                To provide a smart health application that allows users to collect and manage their health-related data and assist them in taking care of their health.
              </div>
            </li>
            <li>
              <div className="custom_bullet">
                <img src={require("../../images/body/objective/custom_bullet_objective.svg")} />
                To construct a publicly available, normalized database of Vietnamese healthcare data for facilitating related research and a publicly available API library for analyzing and forecasting healthcare data.
              </div>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <ScrollToTopBtn />
      </div>
    </>
  );
};
export default Objective;
