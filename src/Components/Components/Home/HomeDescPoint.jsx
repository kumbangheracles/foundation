import React from "react";

export default function HomeDescPoint(){
    const stats = [
        {count: "12", label: "Apartement", suffix: "K"},
        {count: "32", label: "Visitors", suffix: "K"},
        {count: "14", label: "Transactions", suffix: "K"},
    ]
    return(
        <div className="home-desc-point">
            {
                stats.map((stat, index) =>(
                    <div key={index} className={stat.label.toLowerCase()}>
                        <h3>
                            {stat.count} <span>{stat.suffix}</span>
                        </h3>
                        <p>{stat.label}</p>
                    </div>
                ))
            }
        </div>
    )
}