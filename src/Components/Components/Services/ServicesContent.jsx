import React from "react";
import ServiceImg from "../../../assets/Services/ServiceImg.jpg";
import ServiceImg2 from "../../../assets/Services/ServiceImg2.jpg";
import ServiceImg3 from "../../../assets/Services/ServiceImg3.jpg";

export default function ServicesContent() {
  return (
    <div className="Services-desc">
      <h1>Services</h1>
      <p>
        Here are the services provided by us, which is of course reliable and
        <br /> makes it easy for all of our customers
      </p>

      <div className="Services-content align">
        <div>
          <img src={ServiceImg} alt="" />

          <h2>Building & Renovation</h2>
          <br />
          <button>Order Now</button>
        </div>

        <div>
          <img src={ServiceImg2} alt="" />

          <h2>Made & Custom</h2>
          <br />
          <button>Order Now</button>
        </div>

        <div>
          <img src={ServiceImg3} alt="" />

          <h2>Design & Planning</h2>
          <br />
          <button>Order Now</button>
        </div>
        
      </div>
    </div>
  );
}
