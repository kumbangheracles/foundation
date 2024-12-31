import React from "react";
import "./TopSide.css";
export default function TopSide() {
  return (
    <div className="top-side">
      <div>
        <h1>Get offers from professionals</h1>
        <h1>right now</h1>
      </div>
      <button>
        Request a Demo
        <svg
          width="21"
          height="11"
          viewBox="0 0 21 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.9456 4.84595L16.1156 1.01597C15.8864 0.786787 15.5417 0.71824 15.2422 0.842281C14.9427 0.966322 14.7474 1.25853 14.7473 1.58269V4.0099C14.7473 4.12057 14.6576 4.21029 14.5469 4.21029H2.14476C1.48071 4.21029 0.942383 4.74862 0.942383 5.41267C0.942383 6.07673 1.48071 6.61506 2.14476 6.61506H14.5469C14.6576 6.61506 14.7473 6.70478 14.7473 6.81545V9.24266C14.7474 9.56682 14.9427 9.85903 15.2422 9.98307C15.5417 10.1071 15.8864 10.0386 16.1156 9.80938L19.9456 5.9794C20.2585 5.66638 20.2585 5.15897 19.9456 4.84595Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}
