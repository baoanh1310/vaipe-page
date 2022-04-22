import React, { useState } from "react";
import "./resource.sass";
import Tool from './Tool.jsx';
import Dataset from './Dataset.jsx';
import styled from 'styled-components';
import ScrollToTopBtn from "../../Footer/ScrollToTopBtn";
import Underline from "../../Header/Underline";

const TabItem = styled.div`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    text-align: justify;
    flex: none;
    order: 0;
    flex-grow: 0;
    text-decoration: none;
    display: inline-block;
    padding: 21px 16px;
    transition: .2s ease;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    background: white;
    border: 0;
    outline: 0;
    ${({ active }) =>
        active &&
        `
        color: #2CB5C8;
        border-bottom: 2px solid #2CB5C8;
        opacity: 1;
    `}
`;

const Resource = () => {

    const types = ['Tools & Frameworks', 'Datasets'];
    const [active, setActive] = useState(types[0]);

    return (
        <>
            <div
                className="block_title">
                <p>Resources</p>
                <Underline />
            </div>
            <div className="resource" style={{backgroundImage: `url("${require("../../images/body/pattern.png")}"`}}>
                <div className="tabGroup">
                    {types.map(type => (
                        <TabItem
                            key={type}
                            active={active === type}
                            onClick={() => setActive(type)}
                            className="tabItem"
                        >
                            {type}
                        </TabItem>
                    ))}
                </div>
                {active === 'Tools & Frameworks' ? 
                <Tool /> : <Dataset />}
            </div>
            <ScrollToTopBtn />
        </>
    );
}

export default Resource;