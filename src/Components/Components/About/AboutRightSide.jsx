import React from "react";
import AboutDescription from "./AboutDescription";
import AboutEmailInput from "./AboutEmailInput";
export default function AboutRightSide(){

    return(
        <div className="about-right-side">
            <AboutDescription/>
            <AboutEmailInput/>
        </div>
    )
}