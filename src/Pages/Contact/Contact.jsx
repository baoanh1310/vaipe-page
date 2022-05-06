import React, { useState } from "react";
import "./contact.sass";
import anhHieu from "../../images/body/team/member/Hieu_Pham.svg";
import ScrollToTopBtn from "../../Footer/ScrollToTopBtn";
import Underline from "../../Header/Underline";

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
  }

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  }

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  }

  const handleMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);
  }

  const handleSubmit = () => {
    alert("Your message has sent to our team successfully!");
  }

  const handleReset = () => {
    setName("");
    setEmail("");
    setTitle("");
    setMessage("");
  }

  return (
    <>
      <div 
        className="block_title" style={{backgroundColor: '#E1FBFF'}}>
          <p>Contact Us</p>
          <Underline />
      </div>
      <div className="contact">
        <div className="human">
          <img src={anhHieu} />
          <div className="humanInfo">
            <p className="title">Dr. Pham Huy Hieu</p>
            <p className="location">College of Engineering & Computer Science, VinUni-Illinois Smart Health Center, VinUniversity</p>
          </div>
        </div>

        <div className="greet">
          <p>We are happy to answer any questions you might have, explore potential partnerships and receive requests from interested affiliates.</p>
        </div>

        <form className="contactForm" onSubmit={handleSubmit}>
          <div className="firstRow row">
            <div className="nameInput">
              <label>Your full name <span>*</span></label><br/>
              <input type="text" value={name} onChange={handleNameChange} placeholder="Please enter your full name" />
            </div>
            <div className="emailInput">
              <label>E-mail address <span>*</span></label><br/>
              <input type="email" value={email} onChange={handleEmailChange} placeholder="Please enter your email" />
            </div>
          </div>
          <div className="titleInput row">
            <label>Message title</label><br/>
            <input type="text" value={title} onChange={handleTitleChange} placeholder="Please enter message title" />
          </div>
          <div className="messageInput row">
            <label>Your message</label><br/>
            <textarea type="text" value={message} onChange={handleMessageChange} placeholder="Please enter your message" />
          </div>
          <div className="btnGroup">
            <input id="sendBtn" className="btn" type="submit" value="Send" />
            <input id="resetBtn" className="btn" type="button" value="Reset" onClick={handleReset} />
          </div>
        </form>
      </div>

      <ScrollToTopBtn />
    </>
  );
};

export default Contact;
