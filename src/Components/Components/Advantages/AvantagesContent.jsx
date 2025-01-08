import React from "react";
import ContentImg from "../../../assets/Advantages/ContentImg.jpg";
import ContentImg2 from "../../../assets/Advantages/ContentImg2.jpg";
import ContentImg3 from "../../../assets/Advantages/ContentImg3.jpg";
import ContentImg4 from "../../../assets/Advantages/ContentImg4.jpg";

const content = [
  {
      id: 1,
      title: "Project Guarantee and Payments",
      description: "Guaranteed project in building materials (material spesifications) transparentely to ensure that the building materials used are appropriate & the payment proccess is guaranteed",
      imgSrc: ContentImg,
  },
  {
      id: 2,
      title: "Best Costumer Service",
      description: "Get 24-hour service during development proccess such as, online project reports, and project reports from our customer service.",
      imgSrc: ContentImg2,
  },
  {
      id: 3,
      title: "Free Planning Fee",
      description: "Free of charge for development proccess such as Survey Fees, Consultation, 2D Building Plan Design (Applicable T&C), RAB (Budget Plan), and Time Schedule.",
      imgSrc: ContentImg3,
  },
  {
      id: 4,
      title: "Project Team Escort",
      description: "Every Project will be provided with online escort by the site manager in order to maintain the quality and result of the project by workers.",
      imgSrc: ContentImg4,
  },
];


export default function AdvantagesContent() {
  return (
    <div className="Advantages-desc">
      <h1>Advantages</h1>
      <p>
        There are many advantages to using our services, we are very
        <br /> professional and trusted by our partners and customers
      </p>

      <div className="Advantages-content align">
          {
            content.map( (index) => (
              <div key={index.id}>
                <img src={index.imgSrc} alt="" />

                <h4>{index.title}</h4>
                <p>{index.description}</p>
              </div>
            ))
          }
      </div>
    </div>
  );
}
