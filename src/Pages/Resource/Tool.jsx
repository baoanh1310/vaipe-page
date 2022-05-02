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
                        What is a Web Based System? A web-based system is an application that is accessed via HTTP. The term web-based is usually used to describe applications that run in a web browser. It can, though, also be used to describe applications that have a very small component of the solution loaded on the client PC.
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
                        API Platform is an Open Source web framework for API-first projects. Describe the API's data model or import an existing one from Schema.org and get instantly a fully featured read/write API with REST operations, data validation, pagination, sorting, filtering, Swagger documentation, an authorization system, invalidation-based HTTP cache, nested documents, content negotiation and support for modern hypermedia formats (JSON-LD, HAL and Hydra).
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
                        Smartphone applications represent a technological opportunity to explore new approaches to mental health care, treatment, and research into psychiatric conditions, which in turn may better empower patients to become more actively involved in their own health care (Torous et al., 2014). Instead of relying upon retrospective data collection, smartphone applications enable a novel method of data collection.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tool;