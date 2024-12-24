import React from "react";
import HomeLayout from "./Components/Components/Home/HomeLayout";
import NavLayout from "./Components/Components/Navbar/Nav Layout";
import AboutLayout from "./Components/Components/About/AboutLayout";
import PortfolioLayout from "./Components/Components/Portfolio/PortfolioLayout";
import TestiLayout from "./Components/Components/Testimonials/TestiLayout";
import PartnerLayout from "./Components/Components/Partner/PartnerLayout";
export default function Layout(){
    return(
        <>
        <NavLayout/>
        <HomeLayout/>
        <AboutLayout/>
        <PortfolioLayout/>
        <TestiLayout/>
        <PartnerLayout/>
        </>
    )
}