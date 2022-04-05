import React, { useState } from "react";
import classNames from "classnames";
import "./header.sass";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import menu from "../images/header/menu.svg";
import close from "../images/header/close.svg";

const menu_list = [
  { text: "Home", link: "/" },
  { text: "Objectives", link: "/objective" },
  { text: "Team", link: "/team" },
  { text: "Publications", link: "/publication" },
  { text: "Resources", link: "/resource" },
  { text: "Acknowledge", link: "/publication" },
  { text: "News & Events", link: "/news" },
  { text: "Contact Us", link: "/contact" }
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

  return (
    <div className="header">
      <div className="navigation">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="menu">
          {menu_list.map((item, index) => (
            <Link key={item.link} to={item.link} className="item">
              {item.text}
            </Link>
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
