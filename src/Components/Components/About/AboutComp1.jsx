import React from "react";
import lineAbout from '../../../assets/About/lineAbout.png'
export default function AboutComp1(){
    return(
        <div className="about-comp1">
            <div className="about-comp1-wrapper">
                <div className="icon-msg-comp1">
                    <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.93299 0.248047H23.8561C25.3011 0.248047 26.4715 1.47506 26.4715 2.98999V19.4416C26.4715 20.9565 25.3011 22.1836 23.8561 22.1836H2.93299C1.48799 22.1836 0.317604 20.9565 0.317604 19.4416L0.330681 2.98999C0.330681 1.47506 1.48799 0.248047 2.93299 0.248047ZM13.3946 12.5868L23.8561 5.73194V2.99L13.3946 9.84485L2.93301 2.99V5.73194L13.3946 12.5868Z" fill="white"/>
                    </svg>
                </div>

                <div className="comp1-content">
                    <h3>New Inspiration!🎨</h3>
                    <div className="comp1-line">
                        <img src={lineAbout} alt="line" />
                    </div>
                    <div className="comp1-desc">
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6201 37.7969C28.871 37.7969 37.181 29.487 37.181 19.2361C37.181 8.98526 28.871 0.675293 18.6201 0.675293C8.36929 0.675293 0.0593262 8.98526 0.0593262 19.2361C0.0593262 29.487 8.36929 37.7969 18.6201 37.7969Z" fill="#10847D"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6203 9.95581C18.7385 9.95581 18.8514 10.0029 18.933 10.0861C19.2456 10.3902 26.213 17.2549 26.213 21.6865C26.2328 23.6512 25.4392 25.5411 24.011 26.9304C22.5828 28.3197 20.64 29.0917 18.6203 29.0725C16.6006 29.0917 14.6579 28.3197 13.2297 26.9304C11.8014 25.5411 11.0078 23.6512 11.0276 21.6865C11.0276 17.2549 17.995 10.3902 18.3077 10.0861C18.3892 10.0029 18.5022 9.95581 18.6203 9.95581ZM15.4937 21.6864C15.4937 24.1629 17.8162 24.7277 18.6201 24.7277C19.424 24.7277 21.7465 24.1629 21.7465 21.6864C21.7018 20.383 19.6027 17.6024 18.9774 16.7769C18.893 16.6675 18.7607 16.6031 18.6201 16.6031C18.4795 16.6031 18.3471 16.6675 18.2628 16.7769C18.2478 16.7966 18.232 16.8174 18.2155 16.8393C17.5383 17.7325 15.5373 20.3717 15.4937 21.6864Z" fill="white"/>
                        </svg>
                        <p>Qareluv was Upload <br /><span>Modern House!</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}