import React from "react";
import arrow1 from "../../../assets/Proccess/arrow (1).png";
import arrow2 from "../../../assets/Proccess/arrow (2).png";
import Proccessimg from "../../../assets/Proccess/Proccessimg.jpg";
import Proccessimg2 from "../../../assets/Proccess/Proccessimg2.jpg";
import Proccessimg3 from "../../../assets/Proccess/Proccessimg3.jpg";
import Proccessimg4 from "../../../assets/Proccess/Proccessimg4.png";

export default function ProccessContent () {
    return (
        <div className="Proccess-desc">
            <h1>Proccess On The Project</h1>
            <p>
                Only four easy steps proccess to get 
                <br />your dream home.
            </p>

            <div className="Proccess-content">
                <div>
                    <div className="Proccess-card">
                        <div className="text">
                            <h4>01. ONLINE FORM FILLING</h4>
                            <p>Costumers fill out an online for renovation, interior custom, or design & planning needs.</p>
                        </div>
                        <div className="image end">
                            <img src={Proccessimg} alt="" />    
                        </div>
                    </div>

                    <img className="arrow" src={arrow2} alt="" />

                    <div className="Proccess-card">
                        <div className="text">
                            <h4>03. Design & RAB OFFERS</h4>
                            <p>After surveying the location, team will send image & design offers to customer</p>
                        </div>
                        <div className="image">
                            <img src={Proccessimg3} alt="" />    
                        </div>
                    </div>
                    <img className="arrow" src={arrow2} alt="" />
                </div>

                <div>
                    <div className="Proccess-card">
                        <div className="text">
                            <h4>02. LOCATION SURVEYS</h4>
                            <p>Use team our technique that will come to your home location to review the building that will be renovated / decorated</p>
                        </div>
                        <div className="image">
                            <img src={Proccessimg2} alt="" />    
                        </div>
                    </div>

                    <img className="arrow" src={arrow1} alt="" />

                    <div className="Proccess-card">
                        <div className="text">
                            <h4>04. CONTRACT/SPK</h4>
                            <p>And after the offer has been completed, team will draft a contract digitally to customers</p>
                        </div>
                        <div className="image end">
                            <img src={Proccessimg4} alt="" />    
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}