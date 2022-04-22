import React from "react";
import "./acknowledge.sass";
import handshake from "../../images/body/acknowledge/handshake.png";
import logo from "../../images/body/acknowledge/logo.png";

import ScrollToTopBtn from "../../Footer/ScrollToTopBtn";
import Underline from "../../Header/Underline";

const Acknowledge = () => {
    return (
        <>
            <div
                className="block_title" style={{backgroundColor: '#E1FBFF'}}>
                <p>Acknowledge</p>
                <Underline />
            </div>
            <div className="acknowledge" >
                <div className="logos">
                    <div className="row">
                        <img src={logo} id="logo1" className="logo" />
                        <img src={logo} id="logo2" className="logo" />
                        <img src={logo} id="logo3" className="logo" />
                        <img src={logo} id="logo4" className="logo" />
                    </div>
                    <div className="row">
                        <img src={logo} id="logo6" className="logo" />
                        <img src={logo} id="logo7" className="logo" />
                        <img src={logo} id="logo8" className="logo" />
                        <img src={logo} id="logo9" className="logo" />
                    </div>
                </div>
                <div className="content">
                    <p>We are so grateful for the support of our corporate partners, who are committed to strengthening families and building stronger, healthier, and safer communities. Together, we are helping to make a positive and lasting difference in the lives of so many we know. Thanks to the help of our sponsors, [our company, initiative, etc.] continues to fulfill our mission of supporting our neighbors when they seek [sustainable energy services, housing, affordable mental health care, high quality senior living programs, substance abuse treatment, etc.].</p>
                    <p>We wish to express our deepest gratitude to [sponsor name] for their steadfast support and generosity. Learn about their [product, service, etc.] by visiting [their website].</p>
                    <p>We are so grateful for the continued support of [corporate sponsor]. Learn about their [services] by visiting [website or address].</p>
                    <p>Many warm thanks to our supporters at [corporate sponsor] for their ongoing generosity. If you are in the market for a [product or service], get more information about their [interesting services] by visiting [website].</p>
                    <p>We express our continued gratitude to the [team at corporate sponsor], who have generously donated transportation to our [memorial day luncheon, feed the birds senior day, etc.] for the last 17 years and running.</p>
                    <p>We wish to once again express our continued gratitude to [company sponsor] for their dedication to [our cause] and for making a difference in their community by supporting grassroots initiatives.</p>
                </div>
                <img src={handshake} />
            </div>

            <ScrollToTopBtn />        
        </>
    )
}


export default Acknowledge;