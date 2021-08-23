import "./App.css";
// import { getExchangeRate, getHistoricalData } from "./connect.js";
// import Homepage from "./components/homepage";
// import { DataPage } from "./components/dataPage";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CoinCard from "./components/coinCard.js";
import { useState, useEffect } from "react";
import { DataTable } from "./components/dataTable";

export default function App() {
  let [tableVisibility, setTableVisibility] = useState(false);
  if (tableVisibility === true) {
    return (
      <div id="App">
        <div id="siteBanner">
          <h1>Panopticon</h1>
        </div>
        <div id="CoinCardsContainer">
          <CoinCard coinCode="BTC" />
          <CoinCard coinCode="ETH" />
          <CoinCard coinCode="DOGE" />
        </div>
        <button
          id="showTable"
          onClick={() => setTableVisibility((tableVisibility = false))}
        >
          Hide Table
        </button>
        <DataTable />
      </div>
    );
  } else {
    return (
      <div id="App">
        <div id="siteBanner">
          <h1>Panopticon</h1>
        </div>
        <div id="CoinCardsContainer">
          <CoinCard coinCode="BTC" />
          <CoinCard coinCode="ETH" />
          <CoinCard coinCard="DOGE" />
          <CoinCard coinCard="ADA" />
          <button
            id="showTable"
            onClick={() => setTableVisibility((tableVisibility = true))}
          >
            {" "}
            Show Table
          </button>
        </div>
      </div>
    );
  }
}
