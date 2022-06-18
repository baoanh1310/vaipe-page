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
                <p>In this project, we aim to collect real-world, large-scale medical-related datasets such as pill images, prescription images or personal health indicators dataset. All these datasets are established under real-world scenarios and then normalized to train machine learning systems. To encourage new advances in medical research and dataset sciences, we will make these dataset publicly available.</p>
            </div>
            <div className="colGroup">
                <div className="resourceCol">
                    <div className="colTitle">
                        VAIPE-Pill: A Large-scale, Annotated Benchmark Dataset for Visual Pill Identification
                    </div>
                    <div className="colImage">
                        <img src={resource4} alt="" />
                    </div>
                    <div className="colDesc">
                    VAIPE-Pill is a large dataset of pill images for automated pill identification. The dataset contains more than 50,000 pill images with annotations that are collected under real-world settings. To the best of our knowledge, the VAIPE-Pill is currently the largest pill image dataset for object detection tasks. The dataset can be used to train AI systems to identify more than 1,000 types of pills. It also can serve as a dataset for common computer vision tasks such as image classification, object detection and localization.
                    </div>
                </div>
                <div className="resourceCol">
                    <div className="colTitle">
                    VAIPE-P: An Open Dataset of Prescription for Visual-based Clinical Applications
                    </div>
                    <div className="colImage">
                        <img src={resource5} alt="" />
                    </div>
                    <div className="colDesc">
                    We introduce a large-scale dataset of prescriptions for visual-based clinical applications. It contains more than 50,000 images collected from multiple hospitals in Vietnam. To the best of our knowledge, this is the first and the largest dataset for understanding prescriptions from images in Vietnamese. The VAIPE-P dataset can be used to develop novel AI-based solutions for Vietnamese clinical text recognition and understanding.
                    </div>
                </div>
                <div className="resourceCol">
                    <div className="colTitle">
                    VAIPE-PHI: An Open Dataset for Recognizing of Personal Health Indicators
                    </div>
                    <div className="colImage">
                        <img src={resource6} alt="" />
                    </div>
                    <div className="colDesc">
                    We collect and release a real-world dataset of personal health indicators for visual-based clinical applications. The dataset contains over 2,000 images collected from multiple medical devices such as blood pressure monitors, heart rate monitors, height and weight index devices, etc. The VAIPE-PHI dataset can be used to develop data-driven automatic tools to detect multiple kinds of medical devices and health indicators. We believe the use of this dataset will be beneficial for the development of many real-world medical applications.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dataset;