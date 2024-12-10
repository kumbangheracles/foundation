import React from "react";
import AboutLeftSide from "./AboutLeftSide";
import AboutRightSide from "./AboutRightSide";
export default function AboutWrapper(){
    return(
        <div className="about-wrapper">
            <AboutLeftSide/>
            <AboutRightSide/>
        </div>
    )
}