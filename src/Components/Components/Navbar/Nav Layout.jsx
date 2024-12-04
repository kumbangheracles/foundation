import React from "react";
import Navbar from "./Navbar";
import ContactButton from "./ContactButton";
export default function NavLayout(){
    return(
        <nav>
            <Navbar/>
            <ContactButton/>
        </nav>
    )
}