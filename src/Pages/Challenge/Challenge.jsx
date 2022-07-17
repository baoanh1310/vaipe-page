import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./challenge.sass";

import ScrollToTopBtn from "../../Footer/ScrollToTopBtn";
import Underline from "../../Header/Underline";

const Challenge = () => {
    const special_text = "VAIPE_P_{num}.jpg";

    return (
        <div style={{backgroundColor: '#E1FBFF'}}>
            <div
                className="block_title" style={{backgroundColor: '#E1FBFF'}}>
                <p>AI4VN Challenge 2022</p>
                <Underline />
            </div>

            <div className="challenge">
                <div className="challenge-content">

                    <div className="challenge-title">Introduction</div>
                    <p>Medicine usage is a common treatment that supports patients in overcoming illness
effects. However, prescribed drug misusage can lead to catastrophic effects, including
removal of actual treatment, causing side effects, or even death cases. According to
WHO, one-third of death cases resulted from drug misusage. The development of novel
prescribed drugs and the increasing demands of their usage lead to the need for an
assisted system in correctly identifying types of prescribed pills.</p>
                    <p>Based on this, <b>VAIPE (AI-assisted IOT-enabled smart, optimal, and Protective
Healthcare monitoring and supporting system for Vietnamese)</b> - a project funded by
<b><a href="https://vinif.org/" style={{textDecoration: "none", color: "#666666"}} target="_blank"> VINIF</a></b>, under the cooperation among prestigious universities all over the world, aims to
find effective solutions which utilize AI technology to tackle the prescribed pill
identification problem. This might be integrated into a mobile device application for
practical usage. In addition, the objective of the system is to identify those prescribed
pills, which do not exist in the prescriptions captured by mobile devices; and to raise a
warning of prescribed pill misusage. Within the scope of this challenge, the topic is
about localizing and recognizing prescribed pill instances in real-world images, and outof-prescription pills recognition.</p>

                    <div className="challenge-title">Task Description</div>
                    <p>The participants are required to produce effective solutions which can identify the
prescribed pill instances as well as recognize out-of-prescription pills. It is
recommended to make use of information from the prescription image to support the
solution. The solutions must perform localizing prescribed pill instances with bounding
boxes (top-left and bottom-right) as well as provide the predicted label categories for the
corresponding pill instances.</p>

                    <div className="challenge-title">Dataset</div>
                    <p>In terms of the data, all of the prescribed pill images are taken from real-world scenarios
whereas prescriptions are collected from various big hospitals. The dataset is divided
into three folds:</p>
                    <ul style={{display: "none"}}>
                        <li>Training Data: 9,500 prescribed pill images and 1,171 prescription images. <a href="https://drive.google.com/file/d/1DbIUQ0yq87Mw49LWPMqFl7biFYR4P63u/view?usp=sharing" target="_blank">(Download - 22GB)</a></li>
                        <li>Public Test Data: 1,500 prescribed pill images and 172 prescription images. <a href="https://drive.google.com/file/d/146BJ1ER43mOUS7IL4Ewgs2vaAylCXt2l/view?usp=sharing" target="_blank">(Download - 3GB)</a></li>
                        <li>Private Test Data: 1,600 prescribed pill images and 184 prescription images. (Not Available)</li>
                    </ul>

                    <div className="data-cards">
                        <DataCard 
                            title="Training Data" 
                            ggLink="https://drive.google.com/drive/folders/1F7JvhcAIzZews4u8Cba_HntUZk25jQdh?usp=sharing" 
                            oneLink=" https://husteduvn-my.sharepoint.com/:f:/g/personal/thanh_nt176874_sis_hust_edu_vn/Eu_I08_cNshAvkdrTU9EDicB4d8r9YK4VeSCFi5n3dycVA?e=xx2d9l"
                            pill="9,500 prescribed pill images"
                            prescription="1,171 prescription images"
                        />
                        <DataCard 
                            title="Public Test Data" 
                            ggLink="https://drive.google.com/file/d/146BJ1ER43mOUS7IL4Ewgs2vaAylCXt2l/view?fbclid=IwAR2kZtM6YrtvaiZisWZdBB69_mBYRs2BI_jWDLvtaMZ-6j-vAq6da5jpP0E" 
                            oneLink="https://husteduvn-my.sharepoint.com/:u:/g/personal/thanh_nt176874_sis_hust_edu_vn/EWt8z7xEa6BGnx8UNGE4EPkBzk3OicO9Jpa5WBFjtmCsJw?e=ZNifJn"
                            pill="1,500 prescribed pill images"
                            prescription="172 prescription images"
                        />
                        <DataCard 
                            title="Private Test Data" 
                            ggLink="" 
                            oneLink=""
                            pill="1,600 prescribed pill images"
                            prescription="184 prescription images"
                        />
                    </div>

                    <div className="challenge-title">Submissions</div>
                    <p>The input images are raw images without any annotations in terms of the bounding box. The expected output should be stored in <b>csv</b> file, namely <b>results.csv</b>. Each line inside the csv file is comprised of: the name of images, categories of pill instances and confidence score, and bounding boxes annotation. The format of each line is as follows:</p>
                    <p className="special-note"><i className="math-font">image_name, class_id, confidence_score, x_min, y_min, x_max, y_max</i></p>
                    <p>For each image <b>{special_text}</b>, participants are required to generate <i className="math-font">n</i> lines in the csv file where <i className="math-font">n</i> denotes the number of bounding boxes predicted for pill instances located inside the images. A typical example for a single input image is as follows:</p>
                    <p className="special-note"><i className="math-font">VAIPE_P_0_1.jpg, class_id, confidence_score, x_min, y_min, x_max, y_max</i></p>
                    <p>All of the csv files should be then compressed into a single <b>results.zip</b></p>
                    <div className="challenge-title">Evaluation</div>
                    <p><i className="math-font">wmAP0.5-0.95 - wmAP</i> - is a new evaluation metric specially designed for the challenge. <i className="math-font">wmAP</i> is quite similar to COCO mAP which is widely used in current object recognition challenges. However, <i className="math-font">wmAP</i> introduced an additional term, which penalizes those predictions which are out-of-prescription pills.</p>
                    <div className="challenge-title">Rules</div>
                    <p>The team is allowed to use <b>only one pre-trained model</b> and should be public to the organizer of the challenge for verification. There are two phases during <b><i>VAIPE: Medicine Pill Image Recognition Challenge</i></b>, namely Public Test and Private Test:</p>
                    <ul>
                        <li><b>Public Test (15/07/2022 - 15/08/2022):</b> Public Test data is released to the AI community in Vietnam, which helps the research community to formalize their initial solution for the challenge. At the same time, participants are provided with real-world data, and an automatic evaluation system to test the performance of the team’s solution on public data. The maximum number of submissions in a day is 10.</li>
                        <li><b>Private Test (16/08/2022 - 31/08/2022):</b> Potential teams achieving high scores on the leaderboard will be selected to participate in the <b>Private Test</b> round. In this round, final submissions from teams are generated from the available model during the Public Test round. <b>The maximum number of submissions in a day is 5</b>. A list of those selected teams for the <b>Private Test</b> round will be informed later.</li>
                    </ul>
                    <div className="challenge-title">Challenge Organizing Team</div>
                    <ul style={{marginTop: "0px"}}>
                        <li>Dr. Pham Huy Hieu - VinUni-Illinois Smart Health Center/VinUniversity</li>
                        <li>Dr. Nguyen Phi Le - Hanoi University of Science and Technology</li>
                        <li>Dr. Nguyen Thanh Hung - Hanoi University of Science and Technology</li>
                    </ul>
                </div>
                
            </div>

            <ScrollToTopBtn />
        </div>
    )
}

const DataCard = ({title, pill, prescription, ggLink, oneLink}) => {

    let buttonGroup = <div style={{display: "flex", justifyContent: "space-evenly"}}>
        <CardButton isOnedrive={false} link={ggLink} />
        <CardButton isOnedrive={true} link={oneLink} />
    </div>

    if (ggLink.length == 0 && oneLink.length == 0) {
        buttonGroup = <CardButton isOnedrive={true} link={ggLink} />
    }

    return (
      <Card style={{ width: '30%', border: "1px solid #2CB5C8" }} className="card-item text-center">
        <Card.Body>
          <Card.Title style={{textAlign: "center"}}>{title}</Card.Title>
          <ul style={{marginTop: "16px"}}>
            <li>{pill}</li>
            <li>{prescription}</li>
          </ul>
          {buttonGroup}
          
        </Card.Body>
      </Card>
    );
}

const CardButton = ({isOnedrive, link}) => {
    let downloadText = isOnedrive ? "OneDrive" : "Google Drive";
    return (
        <>
            {link.length > 0 ? <Button href={link} target="_blank" variant="outline-info">{downloadText}</Button> : <Button variant="outline-info" disabled>Unavailable</Button>}
        </>
    );
}

export default Challenge;