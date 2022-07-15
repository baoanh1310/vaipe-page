import React from 'react';
import './resource.sass';
import resource1 from "../../images/body/resources/resource1.svg";
import resource2 from "../../images/body/resources/resource2.svg";
import resource3 from "../../images/body/resources/resource3.svg";
import appStore from "../../images/body/resources/appstore.png";
import chPlay from "../../images/body/resources/chplay.png";

const Tool = () => {
    return (
        <div className="content">
            <div className="textGroup">
                <p>We develop and provide various tools and frameworks to facilitate the integration of our services into end-users and third-party applications, including Web-based Systems, API Platforms, and Smartphone Applications</p>
            </div>
            <div className="colGroup">
                <div className="resourceCol">
                    <div className="colTitle">
                        Web-based Systems
                    </div>
                    <div className="colImage">
                        <img src={resource1} alt="" />
                    </div>
                    <div className="colDescTool">
                        <p>Necessary tools to facilitate the integration of our services into third-party applications by following simple steps:</p>
                        <p>1. Creating a VAIPE account</p>
                        <p>2. Registering for API integration</p>
                        <p>3. Integrating API in the third-party application</p>
                        <p>4. Monitoring API including usage, statistics, status, etc</p>
                    </div>
                    <a className="tryBtn" href="https://partner.vaipe.io/login" target="_blank">
                        <span className="tryText">Try it now</span>
                    </a>
                </div>
                <div className="resourceCol">
                    <div className="colTitle">
                        API Platforms
                    </div>
                    <div className="colImage">
                        <img src={resource2} alt="" />
                    </div>
                    <div className="colDescTool">
                        <p>Full set of smart-health APIs, including the recognition and detection of:</p>
                        <br/>
                        <p>1. Prescriptions</p>
                        <p>2. Medications/Pills</p>
                        <p>3. Electrocardiogram</p>
                        <p>4. Health-care devices (scale, thermometers, sphygmomanometer, etc)</p>
                    </div>
                    <a className="tryBtn" href="https://partner.vaipe.io/login" target="_blank">
                        <span className="tryText">Try it now</span>
                    </a>
                    
                </div>
                <div className="resourceCol">
                    <div className="colTitle">
                        Smartphone Applications
                    </div>
                    <div className="colImage">
                        <img src={resource3} alt="" />
                    </div>
                    <div className="colDescTool">
                        <p>AI-based smart healthcare applications for both Android/iOs devices, providing:</p>
                        <br/>
                        <p>1. Smart calendar and reminder for medication schedule</p>
                        <p>2. Looking up medication information using pill recognition and detection</p>
                        <p>3. Tracking health information (weight, spO2, blood pressure, electrocardiogram, etc)</p>
                    </div>
                    <div className="mobileMarket">
                        <a href="" target="_blank" className="market">
                            <img src={appStore} alt="AppStore" />
                        </a>
                        <a href="" target="_blank" className="market">
                            <img src={chPlay} alt="Google Play" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tool;