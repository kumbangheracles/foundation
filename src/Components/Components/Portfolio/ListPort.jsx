import React from "react";
import { portData } from "./portData";

export default function ListPort() {
    return (
      <div className="list-port">
        <ul>
          {portData.map((item) => (
            <li key={item.id} className="port-item">
              <div className="port-img">
                <span>{item.name}</span>
                <img src={item.img} alt={item.name} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }