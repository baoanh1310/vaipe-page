import React from 'react';
import './resource.sass';
import resource1 from "../../images/body/resources/resource1.svg";
import resource2 from "../../images/body/resources/resource2.svg";
import resource3 from "../../images/body/resources/resource3.svg";

const Tool = () => {
    return (
        <div className="content">
            <div className="textGroup">
                <p>In the earliest days of medicine, people needed a trip to the doctor like a hole in the head. Because that’s exactly what they got: Healers and witch doctors were downright wanton in their use of trepanning — the practice of sharpening a stone to cut away a section of skull in fully conscious patients. Trepanning was done to relieve headaches, remove fractured skull fragments, provide spirits with an easy entrance or escape, sometimes just to provide rondelles — the leftover bony disks valued as charms or talismans.</p>
            </div>
            <div className="colGroup">
                <div className="resourceCol">
                    <div className="colTitle">
                        Web-based Systems
                    </div>
                    <div className="colImage">
                        <img src={resource1} alt="" />
                    </div>
                    <div className="colDesc">
                    <p>Necessary tools to facilitate the integration of our services into third-party application by following simple steps:</p>
                    <p>1. Creating a VAIPE account</p>
                    <p>2. Registering for API integration</p>
                    <p>3. Integrating API in third-party application</p>
                    <p>4. Monitoring API including usage, statistics, status, ...</p>
                    </div>
                </div>
                <div className="resourceCol">
                    <div className="colTitle">
                        API Platforms
                    </div>
                    <div className="colImage">
                        <img src={resource2} alt="" />
                    </div>
                    <div className="colDesc">
                        <p>Full set of smart-health APIs, including the recognition and detection of:</p>
                        <br/>
                        <p>1. Prescriptions</p>
                        <p>2. Medications/Pills</p>
                        <p>3. Electrocardiogram</p>
                        <p>4. Health-care devices (scale, thermometers, sphygmomanometer, ...)</p>
                    </div>
                </div>
                <div className="resourceCol">
                    <div className="colTitle">
                        Smartphone Applications
                    </div>
                    <div className="colImage">
                        <img src={resource3} alt="" />
                    </div>
                    <div className="colDesc">
                        <p>AI-based smart healthcare applications for both Android/iOs devices, providing:</p>
                        <br/>
                        <p>1. Smart calendar and reminder for medication schedule</p>
                        <p>2. Looking-up medication information using pill recognition and detection</p>
                        <p>3. Tracking health information (weight, spO2, blood pressure, electrocardiogram, ...)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tool;