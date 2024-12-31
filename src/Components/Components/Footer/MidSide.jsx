import React from "react";
import logo from "/logo.png";
import paypal from "../../../assets/Footer/paypal.svg";
import visa from "../../../assets/Footer/visa.svg";
import mcard from "../../../assets/Footer/mastercard.svg";
import fb from "../../../assets/Footer/fb.svg";
import ig from "../../../assets/Footer/ig.svg";
import twitter from "../../../assets/Footer/twitter.svg";
import yt from "../../../assets/Footer/yt.svg";
import "./MidSide.css";
export default function MidSide() {
  return (
    <div className="mid-side">
      <div className="first">
        <div className="icon-footer">
          <img src={logo} alt="logo" />
          <h4>Foundation</h4>
        </div>
        <p>
          We commited to ensuring digital <br /> accessbility for individuals
        </p>
        <div className="payment-footer">
          <span>
            <img src={paypal} alt={paypal} />
          </span>
          <span>
            <img src={visa} alt={visa} />
          </span>
          <span>
            <img src={mcard} alt={mcard} />
          </span>
        </div>
      </div>
      <div className="support-footer">
        <h4>Support</h4>
        <span>Help Videos</span>
        <span>Accecories</span>
        <span>View Booking</span>
        <span>Features</span>
        <span>Terms & Policy </span>
      </div>
      <div className="about-footer">
        <h4>About</h4>
        <span>Payment & Tax</span>
        <span>Term of Service</span>
        <span>Contact</span>
        <span>Anouncement</span>
        <span>News</span>
      </div>
      <div className="address-footer">
        <h4>Our Address</h4>
        <span>
          3444 Par Drive, San Francisco <br /> ,United States
        </span>
        <div className="address-footer-icon">
          <div>
            <img src={fb} alt={fb} />
          </div>
          <div>
            <img src={ig} alt={ig} />
          </div>
          <div>
            <img src={twitter} alt={twitter} />
          </div>
          <div>
            <img src={yt} alt={yt} />
          </div>
        </div>
      </div>
    </div>
  );
}
