import "./stylesheets/coincard.css";
import { getHistoricalData } from "../connect.js";
import React from "react";
import { useState, useEffect } from "react";

const CoinCard = (props) => {
  let [displayData, setDisplayData] = useState(false);
  const ShowCoinData = () => {
    setDisplayData((displayData = true));
    if ((displayData = false)) {
      console.log("Display data state is false true");
    } else if ((displayData = true)) {
      console.log("displayData is true!!!");
      return (
        <div>
          <h1> the card has been clicked</h1>
        </div>
      );
    }
  };
  return (
    <div id="cardContainer">
      <div id="coinLogo">Bitcoin</div>
      <div id="cardDetails">
        <h2 id="name">{props.name.toUpperCase()}</h2>
        <p>Price: ${props.price}</p>
      </div>
      {/* Coin Data Card */}
    </div>
  );
};
export default CoinCard;
