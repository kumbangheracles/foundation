import React from "react";
import HomeLayout from "./Components/Components/Home/HomeLayout";
import NavLayout from "./Components/Components/Navbar/Nav Layout";
import AboutLayout from "./Components/Components/About/AboutLayout";
import AdvantagesLayout from "./Components/Components/Advantages/AdvantagesLayout";
import ServiceLayout from "./Components/Components/Services/ServicesLayout";
import VideoLayout from "./Components/Components/Video/VideoLayout";
import ProccessLayout from "./Components/Components/Proccess/ProccessLayout";

export default function Layout(){
    return(
        <>
        <NavLayout/>
        <HomeLayout/>
        <AboutLayout/>
        <AdvantagesLayout/>
        <ServiceLayout/>
        <VideoLayout/>
        <ProccessLayout/>
        </>
    )
}