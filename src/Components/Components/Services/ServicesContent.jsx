import React from "react";
import ServiceImg from "../../../assets/Services/ServiceImg.jpg";
import ServiceImg2 from "../../../assets/Services/ServiceImg2.jpg";
import ServiceImg3 from "../../../assets/Services/ServiceImg3.jpg";

const content = [
  {
      id: 1,
      title: "Building & Renovation",
      imgSrc: ServiceImg,
  },
  {
      id: 2,
      title: "Made & Custom",
      imgSrc: ServiceImg2,
  },
  {
      id: 3,
      title: "Design & Planning",
      imgSrc: ServiceImg3,
  },
];

export default function ServicesContent() {
  return (
    <div className="Services-desc">
      <h1>Services</h1>
      <p>
        Here are the services provided by us, which is of course reliable and
        <br /> makes it easy for all of our customers
      </p>

      <div className="Services-content align">
        {
          content.map( (index) => (
            <div key={index.id}>
              <img src={index.imgSrc} alt="" />

              <h2>{index.title}</h2>
              <br />
              <button>Order Now</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}
