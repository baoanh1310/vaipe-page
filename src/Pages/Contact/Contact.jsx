import React from "react";
import "./contact.sass";

const Contact = () => {
  return (
    <>
      <div 
        className="block_title"
        style={{
          backgroundImage: `url("${require("../../images/header/contact.png")}"`
        }}
      >Contact Us</div>
      <div className="contact">
        <div className="contact_wrapper vietnam_wrapper">
          <div className="contact_box">
            <div className="contact_flag">
              <img
                src={require("../../images/body/contact/vietnam_contact.png")}
                alt="Vietnam Flag"
              />
            </div>
            <div className="contact_description">
              <h3 class="contact_team_title">Vietnamese Team</h3>
              <p>
                <b>Dr. Nguyen Phi Le</b>
              </p>
              <p>School of Information and Communication Technology</p>
              <p>Hanoi University of Science and Technology</p>{" "}
              <p>
                <a href="lenp@soict.hust.edu.vn">lenp@soict.hust.edu.vn</a>
              </p>
            </div>
          </div>
        </div>

        <div className="contact_wrapper japan_wrapper">
          <div className="contact_box">
            <div className="contact_flag">
              <img
                src={require("../../images/body/contact/japan_contact.png")}
                alt="Vietnam Flag"
              />
            </div>
            <div className="contact_description">
              <h3 class="contact_team_title">Japanese Team</h3>
              <p><b>Prof. Kien Nguyen</b></p>
              <p>Graduate School of Engineering</p>
              <p>Chiba University</p>
              <p>
                <a href="lenp@soict.hust.edu.vn">nguyen@chiba-u.jp</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
