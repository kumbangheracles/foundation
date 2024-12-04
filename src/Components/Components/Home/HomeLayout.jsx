import React from "react";
import HomeDescription from "./HomeDescription";
import HomeImg from "./HomeImg";

export default function HomeLayout(){
    return(
        <section id="home">
            <div className="home-wrapper">
                <HomeDescription />
                <HomeImg />
            </div>
        </section>
    )
}