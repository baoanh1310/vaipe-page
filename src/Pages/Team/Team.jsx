import React, { useState } from "react";
import "./team.sass";
import teamLogo from "../../images/body/team/team_logo.svg";
import vietnameseImage from "../../images/body/team/vietnamese_team.svg";
import japaneseImage from "../../images/body/team/japanese_team.svg";
import member_list from "./data.js";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ScrollToTopBtn from "../../Footer/ScrollToTopBtn";
import studentIcon from "../../images/body/team/student_icon.png";
import profressorIcon from "../../images/body/team/profressor_icon.png";
import starIcon from "../../images/body/team/star_icon.png";

const Team = () => {
  const [show, setShow] = useState({ display: false, name: '', profile: '', email: '' });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="block_title"
        style={{
          backgroundImage: `url("${require("../../images/header/team.svg")}"`
        }}
      >
        Our Team
      </div>
      <div className="team">
        <div className="team_profressor_bar">
          <div className="profressor_group">
            <img className="profressor_icon" src={profressorIcon} />
            <div className="profressor_label">
              Profressor
            </div>
          </div>
          <img className="star_icon" src={starIcon} />
        </div>
        <div className="team_member">
          {member_list.map((item, index) => (
            <div className="team_member_item">
              <div className="member_list_title">{item.title}</div>
              <div className="member_list_line"></div>
              <div className="member_list_details">
                {item.member.map((item_member, index_member) => (
                  <div className="team_member_item_member">
                    <img src={item_member.member_image} alt="Member" onClick={e => setShow({ display: true, name: item_member.modal.title, profile: item_member.modal.profile, email: item_member.modal.contact.email })} />
                    {/* <div className="member_name">{item_member.member_name}</div> */}
                    <div className="person_name">{item_member.member_name}</div>
                    <p>{item_member.school}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="team_student_bar">
          <div className="student_group">
            <img className="student_icon" src={studentIcon} />
            <div className="student_label">
              Student
            </div>
          </div>
          <img className="star_icon" src={starIcon} />
        </div>
      </div>

      

      <Modal show={show.display} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{show.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Profile</h3>
          <hr></hr>
          <p>{show.profile}</p>
          <hr></hr>
          <h3>Contact Info</h3>
          <p>
            <b>Email:</b> {show.email}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <ScrollToTopBtn />
    </>
  );
};

export default Team;
