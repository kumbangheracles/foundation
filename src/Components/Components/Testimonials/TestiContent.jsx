import React, { useState } from "react";
import { testiData } from "./testiData";

export default function TestiContent() {
    const [divIndex, setDivIndex] = useState(0);

    function showNextDiv() {
        setDivIndex((index) => (index === testiData.length - 1 ? 0 : index + 1));
    }

    function showPrevDiv() {
        setDivIndex((index) => (index === 0 ? testiData.length - 1 : index - 1));
    }

    return (
        <div className="testi-container">
            <div className="testi-content">
                <div className="testi-header">
                    <div className="testi-img">
                        <img
                            src={testiData[divIndex].img}
                            alt={testiData[divIndex].name}
                        />
                    </div>
                    <span className="testi-name">{testiData[divIndex].name}</span>
                    <span className="testi-job">{testiData[divIndex].job}</span>
                </div>
                <p>{testiData[divIndex].text}</p>
            </div>

            {/* Tombol navigasi */}
            <div className="button-wrapper">
                <button onClick={showPrevDiv}>
                    <svg
                        width="11"
                        height="19"
                        viewBox="0 0 11 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.10217 17.1915L1.69659 9.78594L9.10217 2.38037"
                            stroke="#10847D"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <button onClick={showNextDiv}>
                    <svg
                        width="11"
                        height="19"
                        viewBox="0 0 11 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.89783 2.38075L9.30341 9.78632L1.89783 17.1919"
                            stroke="#10847D"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
