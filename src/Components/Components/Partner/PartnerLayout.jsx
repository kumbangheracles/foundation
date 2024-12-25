import React from "react";
import { partnerDataTop, partnerDataBot } from "./PartnerData";
import '../../../partner.css'
function PartnerTop(){
    return(
        <div className="flex justify-around">
            {
                partnerDataTop.map((item) =>(
                    <div className="icon-partner" key={item.id}>
                        <img src={item.src} alt="" />
                    </div>
                ))
            }
        </div>
    )
}
function PartnerBot(){
    return(
        <div className="partner-Bot">
            {
                partnerDataBot.map((item) =>( 
                    <div className="icon-partner" key={item.id}>
                        <img src={item.src} alt="" />
                    </div>
                ))
            }
        </div>
    )
}

export default function PartnerLayout(){
    return(
        <div className="partner-container">
            <h1>Partner</h1>
            <PartnerTop/>
            <PartnerBot/>
        </div>
    )
}