import React from "react";
import "./home.sass";
import { Link } from "react-router-dom";
import buttonHome from "../../images/body/home/home_btn.svg";
import homeImage from "../../images/body/home/home.svg";
import MouseIcon from "../../images/body/home/mouse.svg";
import ScrollToTopBtn from "../../Footer/ScrollToTopBtn";

const Home = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div
        className="home_header"
        style={{
          backgroundImage: `url("${require("../../images/header/cover.png")}"`
        }}
      >
        <div className="header_wrapper">
          <div className="home_title">
            VAIPE
          </div>
          <div className="home_subtitle">
            Protective healthcare monitoring<br/>and supporting system<br/>for Vietnamese
          </div>
        </div>
        <img className="mouse_icon" src={MouseIcon} alt="mouse" />
      </div>
      <div className="home">
        <div
          className="home_content"
        >
          <div className="home_content_title">
            <b>VAIPE</b>: <b>AI</b>-assisted IoT-enabled smart, optimal, and <b>P</b>rotective h<b>E</b>althcare monitoring and supporting system for <b>V</b>ietnamese
          </div>
          <div className="home_content_line"></div>
          <div className="home_content_description">
            <p>VAIPE is a project funded by VinIF, composed of VinUniversity, Hanoi University of Science & Technology (HUST), The University of Massachusetts Boston (UMass Boston), and The University of South Florida (USF). The project aims to build an intelligent healthcare system to assist users in collecting, managing, and analyzing their health-related data. Our system enables users to collect heterogeneous data captured from multiple sources using a convenient smartphone camera, provides visualizations of analytical and predicted results, and includes functions to support users, for example, reminding of medication schedules and warning of early-disease risks. VAIPE is AI-assisted and involves original research and development of several key modules.</p>
            <p>(1) Representation, storage, and processing of multi-source multi-type data,</p>
            <p>(2) Training, learning, and mining data for clinical insights and disease risk prediction with supporting evidence,</p>
            <p>(3) Enhancing user privacy and engagement in sharing health-related data,</p>
            <p>(4) Optimizing resource allocation to reduce deployment costs while guaranteeing QoS constraints.</p>
          </div>

          <a href="#team" className="explore">
            <img src={buttonHome} alt="Button explore" />
          </a>
        </div>

        <div className="home_background_wrapper">
          <div className="home_background">
            <img src={homeImage} alt="Home" />
          </div>
        </div>

        <ScrollToTopBtn />
      </div>
    </>
  );
};

export default Home;
