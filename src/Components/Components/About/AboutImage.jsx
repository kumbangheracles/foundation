import React from "react";
import AboutIMG from '../../../assets/AboutIMG.png'
import AboutComp1 from "./AboutComp1";
import AboutComp2 from "./AboutComp2";
export default function AboutImage(){
    return(
        <div className="about-img-container">
            <img src={AboutIMG} alt="About Image" className="about-img"/>
            <AboutComp1/>
            <AboutComp2/>
        </div>
    )
}