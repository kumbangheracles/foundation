import React from "react";
import Dots from '../../../assets/dots.png'
import AboutImage from "./AboutImage";
export default function AboutLeftSide(){
    return(
        <div className="about-left-side">
            <img src={Dots} alt="Dots" className="about-dots"/>
            <AboutImage/>
        </div>
    )
}