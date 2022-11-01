import React from "react";
import weather from "../Images/weather.jpg";
import spelling from "../Images/spelling.jpg";
import currency from "../Images/currency.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="main">
      <div class="h-100 d-flex justify-content-around align-items-center flex-wrap">
        <div className="head">
          <div>APP</div>
          <div>LIBRARY</div>
        </div>
        <Link
          to="/weather"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <div className="card custom">
            <div className="image">
              <img src={weather} alt="" />
            </div>
            <div className="title">Weather APP</div>
            <div className="content">
              An application where one can findout the weather & climate details
              at a paticular location.
            </div>
          </div>
        </Link>
        <Link
          to="/spellcheck"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <div className="card custom">
            <div className="image">
              <img src={spelling} alt="" />
            </div>
            <div className="title">Spell Check</div>
            <div className="content">
              This is an application using which we can correct spelling
              mistakes in text.
            </div>
          </div>
        </Link>
        <Link
          to="/currency"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <div className="card custom">
            <div className="image">
              <img src={currency} alt="" />
            </div>
            <div className="title">Currency converter</div>
            <div className="content">
              To convert currency values between any two well known
              countries. (Ex: INR to USD)
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
