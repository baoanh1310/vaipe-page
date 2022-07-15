import React, { useState } from "react";
import Home from "./Pages/Home/Home.jsx";
import Team from "./Pages/Team/Team.jsx";
import Objective from "./Pages/Objective/Objective.jsx";
import Publication from "./Pages/Publication/Publication.jsx";
import News from "./Pages/News/News.jsx";
import NewsDetail from "./Pages/NewsDetail/NewsDetail.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Acknowledge from "./Pages/Acknowledge/Acknowledge";
import Resource from "./Pages/Resource/Resource";
import Challenge from "./Pages/Challenge/Challenge";
import ScrollToTopBtn from "./Footer/ScrollToTopBtn";
import "./Header/header.sass";

import { Link } from "react-router-dom";
import logo from "./images/logo.svg";
import menu from "./images/header/menu_icon.svg";
import close from "./images/header/close.svg";
import classNames from "classnames";

const menu_list = [
    { text: "Home", link: "/", id: "#home" },
    { text: "Objectives", link: "/objective", id: "#objective" },
    { text: "Team", link: "/team", id: "#team" },
    { text: "Publications", link: "/publication", id: "#publication" },
    { text: "Resources", link: "/resource", id: "#resource" },
    { text: "AI4VN", link: "/ai-challenge", id: "#challenge"},
    { text: "Acknowledgement", link: "/acknowledge", id: "#acknowledgement" },
    // { text: "News & Events", link: "/news", id: "#7" },
    { text: "Contact Us", link: "/contact", id: "#contact" }
  ];

const Main = () => {

    const [open, setOpen] = useState(false);

    const showMenu = () => setOpen(true);

    const closeMenu = (e) => {
        const tag = e.target.tagName;

        if (tag !== "A" && tag !== "IMG") {
            return;
        }

        setOpen(false);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            <div className="header">
                <div className="navigation">
                    <div className="logo">
                    <Link to="#home">
                        <img src={logo} alt="" />
                    </Link>
                    </div>
                    <div className="menu">
                    
                    {menu_list.map((item, index) => (
                        <a key={item.id} href={item.id} className="item" style={{ cursor: 'pointer'}}>
                            {item.text}
                        </a>
                    ))}
                    </div>
                </div>
                <div className="mobile_navigation">
                    <div className="menu_icon" onClick={() => showMenu()}>
                        <img src={menu} alt="menu" />
                    </div>
                    <div
                        className={classNames({ menu_list: true, active: open })}
                        onClick={(e) => closeMenu(e)}
                    >
                        <div className="menu_close">
                            <img src={close} alt="close" />
                        </div>
                        {menu_list.map((item, index) => (
                            <a key={item.id} href={item.id} className="item" style={{ cursor: 'pointer'}}>
                                {item.text}
                            </a>
                        ))}
                    </div>
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="notDisplay"></div>
                </div>
            </div>

            <div id="home">
                <Home/>
            </div>
            <div id="objective">
                <Objective />
            </div>
            <div id="team">
                <Team/>
            </div>
            <div id="publication">
                <Publication />
            </div>
            <div id="resource"> 
                <Resource />
            </div>
            <div id="challenge">
                <Challenge />
            </div>
            <div id="acknowledgement">
                <Acknowledge />
            </div>
            {/* <div id="7">
                <News id="7" />
            </div> */}
            <div id="contact" className="background_cyan">
            {/* <div id="contact"> */}
                <Contact id="8" />
            </div>
            <ScrollToTopBtn />
        </div>
    )
}

export default Main;