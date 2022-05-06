import React from 'react';
import './resource.sass';
import datasets from '../../images/body/resources/datasets.png';
import resource4 from "../../images/body/resources/resource4.svg";
import resource5 from "../../images/body/resources/resource5.svg";
import resource6 from "../../images/body/resources/resource6.svg";

const Dataset = () => {
    return (
        <div className="content">
            <div className="textGroup">
                <p>We divide the dataset into two parts: the training set of 15,000 scans and the test set of 3,000 scans. Each image in the training set was independently labeled by 3 radiologists, while the annotation of each image in the test set was even more carefully treated and obtained from the consensus of 5 radiologists. The labeling process was performed via our own web-based framework called VinDr Lab, which was built on top of a Picture Archiving and Communication System (PACS). A demonstration of this framework can be found here.</p>
            </div>
            <div className="colGroup">
                <div className="resourceCol">
                    <div className="colTitle">
                        Pill Images
                    </div>
                    <div className="colImage">
                        <img src={resource4} alt="" />
                    </div>
                    <div className="colDesc">
                    In the emergency room where I work, I sometimes see patients who have either taken the wrong medication or the wrong dose of medication. It is a common problem. Medication errors can cause serious consequences. Doctors and pharmacists are diligent in making sure patients receive the correct medication. But mistakes happen. As a consumer, you need to protect yourself and ensure you have the correct medication.
                    </div>
                </div>
                <div className="resourceCol">
                    <div className="colTitle">
                        Prescription Images
                    </div>
                    <div className="colImage">
                        <img src={resource5} alt="" />
                    </div>
                    <div className="colDesc">
                    When your doctor writes a prescription, she's advising you to take a medication that you can only get from a pharmacist. You can refer to the paper with the drug's name and the doctor's signature and the bottle of medicine as a prescription. Sometimes prescription is used in a non-medical way to simply mean a suggestion or recommendation, like laughter and friends — a great prescription for chasing away the blues.
                    </div>
                </div>
                <div className="resourceCol">
                    <div className="colTitle">
                        Others
                    </div>
                    <div className="colImage">
                        <img src={resource6} alt="" />
                    </div>
                    <div className="colDesc">
                    The numbers of positive labels were reported based on the majority vote of the participating radiologists. (*) The calculations were only based on the CXR scans where patient’s sex and age were known. (-) To preserve the integrity of the test set, its labels are not released to the public. This dataset was used for the VAIPE BigData Chest Xray Abnormalities Detection Competition hosted on the Kaggle.com platform.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dataset;