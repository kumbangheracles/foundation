import React from "react";
import HomeImage from '../../../assets/HomeBuilding.png'
import dots from '../../../assets/dots.svg'


export default function HomeImg(){
    return(
        <div className="home-img">
            <div className="dots"><img src={dots} alt="dots" /></div>
            <div className="img-background-style"></div>
            <img src={HomeImage} alt="Home"/>
        </div>
    )
}