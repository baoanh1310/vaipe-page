import React, { useState } from "react";
import classNames from "classnames";
import "./header.sass";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import logo from "../images/logo.svg";
import menu from "../images/header/menu.svg";
import close from "../images/header/close.svg";

const menu_list = [
  { text: "Home", link: "/", id: "1" },
  { text: "Objectives", link: "/objective", id: "2" },
  { text: "Team", link: "/team", id: "3" },
  { text: "Publications", link: "/publication", id: "4" },
  { text: "Resources", link: "/resource", id: "5" },
  { text: "Acknowledge", link: "/acknowledge", id: "6" },
  { text: "News & Events", link: "/news", id: "7" },
  { text: "Contact Us", link: "/contact", id: "8" }
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const showMenu = () => setOpen(true);

  const closeMenu = (e) => {
    const tag = e.target.tagName;

    if (tag !== "A" && tag !== "IMG") {
      return;
    }

    setOpen(false);
  };

  const scrollTo = (name) => {
    scroller.scrollTo(name, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  return (
    <div className="header">
      <div className="navigation">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="menu">
          {/* {menu_list.map((item, index) => (
            <Link key={item.link} to={item.id} className="item">
              {item.text}
            </Link>
          ))} */}
          {menu_list.map((item, index) => (
            <div onClick={() => scrollTo(item.id)} className="item" style={{ cursor: 'pointer'}}>
              {item.text}
            </div>
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
            <Link to={item.link} className="item">
              {item.text}
            </Link>
          ))}
        </div>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
