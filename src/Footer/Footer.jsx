import React from "react";
import "./footer.sass";
import ic_facebook from '../images/social/ic_facebook.png';
import ic_instagram from '../images/social/ic_instagram.png';
import ic_youtube from '../images/social/ic_youtube.png';
import ic_twitter from '../images/social/ic_twitter.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        Copyright © 2022 VAIPE © Project All Rights Reserved
      </div>
      <div className="social_icon">
        <a href="https://www.facebook.com/" target="_blank">
          <img src={ic_facebook} />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <img src={ic_youtube} />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src={ic_instagram} />
        </a>
        <a href="https://www.twitter.com/" target="_blank">
          <img src={ic_twitter} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
