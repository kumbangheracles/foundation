import React, { useEffect } from "react";


export default function AboutEmailInput(){
  
    return(
        <form action="" className="about-email-input">
            <div className="input-email">
                <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.00518 3.48779L13.5005 12.0749L23.9958 3.48779" stroke="#8C97AC" stroke-width="2.28988" stroke-linecap="round" stroke-linejoin="round"/>
                <rect x="2.05127" y="1.57959" width="22.8988" height="17.1741" rx="2.28988" stroke="#8C97AC" stroke-width="2.28988" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input type="text" name="email" id="email" placeholder="Enter your email"/>
            </div>
            <button type="submit">Subscribe</button>
        </form>
    )
}