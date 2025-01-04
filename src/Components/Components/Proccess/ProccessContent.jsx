import React from "react";
import arrow1 from "../../../assets/Proccess/arrow (1).png";
import arrow2 from "../../../assets/Proccess/arrow (2).png";
import Proccessimg from "../../../assets/Proccess/Proccessimg.jpg";
import Proccessimg2 from "../../../assets/Proccess/Proccessimg2.jpg";
import Proccessimg3 from "../../../assets/Proccess/Proccessimg3.jpg";
import Proccessimg4 from "../../../assets/Proccess/Proccessimg4.png";

const content1 = [
  {
    id: 1,
    title: "01. ONLINE FORM FILLING",
    description:
      "Costumers fill out an online for renovation, interior custom, or design & planning needs.",
    imgSrc: Proccessimg,
  },
  {
    id: 2,
    title: "03. DESIGN & RAB OFFERS",
    description:
      "After surveying the location, team will send image & design offers to customer",
    imgSrc: Proccessimg3,
  },
];

const content2 = [
  {
    id: 1,
    title: "02. LOCATION SURVEYS",
    description:
      "Use team our technique that will come to your home location to review the building that will be renovated / decorated",
    imgSrc: Proccessimg2,
  },
  {
    id: 2,
    title: "04. CONTRACT/SPK",
    description:
      "And after the offer has been completed, team will draft a contract digitally to customers",
    imgSrc: Proccessimg4,
  },
];

export default function ProccessContent() {
  return (
    <div className="Proccess-desc">
      <h1>Proccess On The Project</h1>
      <p>
        Only four easy steps proccess to get
        <br />
        your dream home.
      </p>

      <div className="Proccess-content">
        <div>
          {content1.map((index, idx) => (
            <React.Fragment key={index.id}>
              <div className="Proccess-card">

                <div className="text">
                  <h4>{index.title}</h4>
                  <p>{index.description}</p>
                </div>

                <div className={`image ${idx === 0 ? "end" : ""}`}>
                  <img src={index.imgSrc} alt="" />
                </div>

              </div>

              <img className="arrow" src={arrow2} alt="" />
              
            </React.Fragment>
          ))}
        </div>

        <div>
          {content2.map((index, idx) => (
            <React.Fragment key={index.id}>
              <div className="Proccess-card">

                <div className="text">
                  <h4>{index.title}</h4>
                  <p>{index.description}</p>
                </div>

                <div className={`image ${idx === 1 ? "end" : ""}`}>
                  <img src={index.imgSrc} alt="" />
                </div>

              </div>

              {idx < content2.length - 1 && (
                <img className="arrow" src={arrow1} alt="" />
              )}

            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
