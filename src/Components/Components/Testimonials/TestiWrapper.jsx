import React from "react";
import TestiContent from "./TestiContent";
// import TestiDots from "./TestiDots";
export default function TestiWrapper(){
    return(
        <div className="testi_wrapper">
            <h1>What Our Customers Says?</h1>
            {/* <TestiDots /> */}
            <TestiContent/>
        </div>
    )
}