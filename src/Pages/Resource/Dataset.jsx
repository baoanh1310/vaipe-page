import React from 'react';
import './resource.sass';
import datasets from '../../images/body/resources/datasets.png';

const Dataset = () => {
    return (
        <div className="content">
            <div className="labelGroup">
                <div className="label">Dataset Description</div>
            </div>
            <div className="textGroup">
                <p>In the earliest days of medicine, people needed a trip to the doctor like a hole in the head. Because that’s exactly what they got: Healers and witch doctors were downright wanton in their use of trepanning — the practice of sharpening a stone to cut away a section of skull in fully conscious patients. Trepanning was done to relieve headaches, remove fractured skull fragments, provide spirits with an easy entrance or escape, sometimes just to provide rondelles — the leftover bony disks valued as charms or talismans.</p>
                <p>We divide the dataset into two parts: the training set of 15,000 scans and the test set of 3,000 scans. Each image in the training set was independently labeled by 3 radiologists, while the annotation of each image in the test set was even more carefully treated and obtained from the consensus of 5 radiologists. The labeling process was performed via our own web-based framework called VinDr Lab, which was built on top of a Picture Archiving and Communication System (PACS). A demonstration of this framework can be found here.</p>
                <p>This dataset was used for the <span>VAIPE BigData Chest Xray Abnormalities Detection Competition</span> hosted on the Kaggle.com platform.</p>
                <div className="imgContainer">
                    <img src={datasets} className="datasetImg" />
                    <div className="imgDesc">
                        Examples of CXRs with radiologist’s annotations. Abnormal findings (local labels) marked by radiologists are plotted on the original images for visualization purpose. The global labels are in bold and listed at the bottom of each example. Better viewed on a computer and zoomed in for details.
                    </div>
                </div>
            </div>
            <div className="labelGroup">
                <div className="label">Dataset Statistics</div>
            </div>
            <div className="textGroup">
                <p>Note: the numbers of positive labels were reported based on the majority vote of the participating radiologists. (*) The calculations were only based on the CXR scans where patient’s sex and age were known. (-) To preserve the integrity of the test set, its labels are not released to the public. The statistic of the labels on the test set is therefore not shown here.</p>
            </div>
        </div>
    )
}

export default Dataset;