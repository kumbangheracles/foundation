import React from "react";
import ContentImg from "../../../assets/Advantages/ContentImg.jpg";
import ContentImg2 from "../../../assets/Advantages/ContentImg2.jpg";
import ContentImg3 from "../../../assets/Advantages/ContentImg3.jpg";
import ContentImg4 from "../../../assets/Advantages/ContentImg4.jpg";

export default function AdvantagesContent() {
  return (
    <div className="Advantages-desc">
      <h1>Advantages</h1>
      <p>
        There are many advantages to using our services, we are very
        <br /> professional and trusted by our partners and customers
      </p>

      <div className="Advantages-content align">
        <div>
          <img src={ContentImg} alt="" />

          <h4>Project Guarantee and Payments</h4>
          <p>
            Guaranteed project in building materials (material spesifications)
            transparentely to ensure that the building materials used are
            appropriate & the payment proccess is guaranteed
          </p>
        </div>

        <div>
          <img src={ContentImg2} alt="" />

          <h4>Best Costumer Service </h4>
          <p>
            Get 24-hour service during development proccess such as, online project reports, and project 
            reports from our customer service.
          </p>
        </div>

        <div>
          <img src={ContentImg3} alt="" />

          <h4>Free Planning Fee</h4>
          <p>
            Free of charge for development proccess such as Survey Fees, Consultation, 2D Building Plan Design (Applicable T&C), RAB (Budget Plan), and 
            Time Schedule.
          </p>
        </div>

        <div>
          <img src={ContentImg4} alt="" />

          <h4>Project Team Escort</h4>
          <p>
            Every Project will be provided with online escort by the site manager in order to maintain the quality and result of the project by workers.
          </p>
        </div>
      </div>
    </div>
  );
}
