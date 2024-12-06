import React from "react";
import HomeLayout from "./Components/Components/Home/HomeLayout";
import NavLayout from "./Components/Components/Navbar/Nav Layout";
import AboutLayout from "./Components/Components/About/AboutLayout";
export default function Layout(){
    return(
        <>
        <NavLayout/>
        <HomeLayout/>
        <AboutLayout/>
        </>
    )
}