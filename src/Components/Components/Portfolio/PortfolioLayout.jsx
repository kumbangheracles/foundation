import React from "react";
import WrapperPort from "./WrapperPort";
export default function PortfolioLayout(){
    return(
        <section id="portfolio">
            <h1>Our Portfolio</h1>
            <WrapperPort/>
            <div className="port-button">
                <button type="button">See Morre</button>
            </div>
        </section>
    )
}