import CoinCard from "./coinCard";
// import { getExchangeRate } from "../connect.js";
import React, { useState } from "react";

const Homepage = () => {
  let [tableDisplayState, settableDisplayState] = useState(false);
  if (tableDisplayState === false) {
    return (
      <div id="pageContainer">
        <div id="bannercontainer">
          <div id="greeting">
            <h1>Get live Crypto Prices</h1>
          </div>

          <div id="highlightedCoinDisplay">
            <CoinCard name="bitcoin" price={50000} />
          </div>

          <button
            onClick={() => settableDisplayState((tableDisplayState = true))}
          >
            Change Table State{" "}
          </button>
        </div>
      </div>
    );
  } else if (tableDisplayState === true) {
    return (
      <div id="tableDisplayContatiner">
        <div id="dataTable">
          <h1>hello from the table</h1>
          <h1>Bitcoin</h1>
          <div id="chartContainer"> This is a table</div>
        </div>
        <button
          onClick={() => settableDisplayState((tableDisplayState = false))}
        >
          Change the state again back to normal
        </button>
      </div>
    );
  }
};
export default Homepage;
