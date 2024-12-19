import React from "react";
import Logo from "./Logo";
import List from "./List";
export default function Navbar(){
    return(
        <ul className="navbar">
            <Logo/>
            <List title={"Home"} attribute={"#home"}/>
            <List title={"Services"} attribute={"#services"}/>
            <List title={"Featured"} attribute={"#featured"}/>
            <List title={"Testimonials"} attribute={"#testimonials"}/>
            <List title={"About us"} attribute={"#about"}/>
        </ul>
    )
}