import React from "react";
import ListPort from "./ListPort";
import Dots from "../../../assets/dots.png"

export default function WrapperPort(){
    return(
        <div className="wrapperPort">
            <div className="dots-port">
                <img src={Dots} alt="dots-port" />
            </div>
            <ListPort />
            <div className="dots-port2">
                <img src={Dots} alt="dots-port2" />
            </div>
        </div>
    )
}