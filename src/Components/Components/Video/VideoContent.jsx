import React from "react";
import play from "../../../assets/Services/play.png";

export default function VideoContent () {
    return (
        <div>
            <p>Watch Our Proccess Video</p>
            <span>
                <button className="align">
                    <img src={play} alt="" />
                </button>
            </span>
            
        </div>
    )
}