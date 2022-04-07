import React from 'react';
import './resource.sass';
import tool from '../../images/body/resources/tool.png';
import framework from '../../images/body/resources/framework.png';
import tools from '../../images/body/resources/tools.png';
import frameworks from '../../images/body/resources/frameworks.png';

const Tool = () => {
    return (
        <div className="content">
            <div className="labelGroup">
                <img src={tool} className="icon" />
                <div className="label">Tools</div>
            </div>
            <div className="textGroup">
                <p>In the earliest days of medicine, people needed a trip to the doctor like a hole in the head. Because that’s exactly what they got: Healers and witch doctors were downright wanton in their use of trepanning — the practice of sharpening a stone to cut away a section of skull in fully conscious patients. Trepanning was done to relieve headaches, remove fractured skull fragments, provide spirits with an easy entrance or escape, sometimes just to provide rondelles — the leftover bony disks valued as charms or talismans.</p>
                <p>At 7,000 years old, the stone trephine is considered the earliest surgical tool, but it’s not its antiquity that makes it important; it’s how the concept has remained relevant from the Neolithic to the now. Modern neurosurgeons don’t dangle rondelles around their necks, but they do still remove sections of skull.</p>
                <p>The procedure, now called a craniotomy, is used to relieve pressure on a swelling brain, or grant access to a stroke victim’s hemorrhaging blood vessel, among others.</p>
                <div className="imgContainer">
                    <img src={tools} className="contentImg" />
                </div>
                <p>Although the trephine was the first tool to transform medicine, it was far from the last. Here, in no particular order, are 14 others carrying on in that heady tradition.</p>
                <div className="subLabel">Hypodermic Needles</div>
                <p>Physicians have wanted direct access to the bloodstream for a very long time. In 1492, as Columbus sailed the ocean blue, Pope Innocent VIII was on very a different path: He had an apoplectic stroke that year that left him in a coma. In an attempt to resuscitate him with an infusion of fresh blood, his physician cut open the veins of three healthy boys, then those of the pontiff, and stitched them all together. All four died from his macramé transfusion method.</p>
            </div>
            <div className="labelGroup">
                <img src={framework} className="icon" />
                <div className="label">Frameworks</div>
            </div>
            <div className="textGroup">
                <p>In the earliest days of medicine, people needed a trip to the doctor like a hole in the head. Because that’s exactly what they got: Healers and witch doctors were downright wanton in their use of trepanning — the practice of sharpening a stone to cut away a section of skull in fully conscious patients. Trepanning was done to relieve headaches, remove fractured skull fragments, provide spirits with an easy entrance or escape, sometimes just to provide rondelles — the leftover bony disks valued as charms or talismans.</p>
                <p>But the larval marvels haven’t been consigned to the history books: Today, more than 800 U.S. health care centers have used medical maggots on patients. The immature flies are creating buzz as an important option for treating open wounds that won’t heal, caused by methicillin-resistant Staphylococcus aureus (the MRSA superbug), diabetic foot ulcers, flesh-eating disease and others.</p>
                <div className="imgContainer">
                    <img src={frameworks} className="contentImg" />
                </div>
                <p>Rene Laennec, a French physician, learned to tap on a patient’s chest to diagnose pulmonary and cardiac conditions from none other than Napoleon Bonaparte’s personal physician. But, like talking through a tin can telephone, it had auditory limitations. So Laennec took a more direct route: putting his ear directly on a patient’s chest to learn the difference between normal and abnormal heart and lung sounds.</p>
            </div>
        </div>
    )
}

export default Tool;