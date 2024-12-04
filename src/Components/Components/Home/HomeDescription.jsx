import React from "react";
import HomeDescPoint from "./HomeDescPoint";
import HomeLocation from "./HomeLocation";
import HomeButton from "./HomeButton";

export default function HomeDescription(){
    return(
        <div className="home-description">
             <h1>Easy Ways to Get Up Your Home</h1>
             <p>Determine the style and budget according to your wishes, just fill in the request for a quote then the team will conduct a survey and give you and offer.</p>
            <HomeDescPoint/>
            <HomeLocation/>
            <HomeButton/>

        </div>
    )
}