import React from "react";
import "./resource.sass";

const Resource = () => {
    return (
        <>
            <div
                className="block_title"
                style={{
                    backgroundImage: `url("${require("../../images/header/resources.png")}"`
                }}
            >
                Resources
            </div>
            <div className="resource">

            </div>
        </>
    );
}

export default Resource;