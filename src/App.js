import React, { useState, useEffect } from "react";
import Nomics from "nomics";
import Chart from "react-apexcharts";

const App = () => {
  const [ticker, setTicker] = useState({});

  const nomics = new Nomics({
    apiKey: "65274d3fb65b51ef869afa61f780cd51",
  });

  const updateTicker = () => {
    nomics.currenciesTicker().then(setTicker)
  }

  useEffect(() => {updateTicker()});

  return (
    <div>
      <p>{JSON.stringify(ticker[0])}</p>
      <p>id: {ticker[0]?.id}</p>
      <p>currency: {ticker[0]?.currency}</p>
      <p>symbol: {ticker[0]?.symbol}</p>
      <p>name: {ticker[0]?.name}</p>
      <p>logo_url: {ticker[0]?.logo_url}</p>
      <img src={ticker[0]?.logo_url} style={{width: "30px"}}/>
      <p>rank: {ticker[0]?.rank}</p>
      <p>price: {ticker[0]?.price}</p>
      <p>price_date: {ticker[0]?.price_date}</p>
      <p>market_cap: {ticker[0]?.market_cap}</p>
      <p>circulating_supply: {ticker[0]?.circulating_supply}</p>
      <p>max_supply: {ticker[0]?.max_supply}</p>
      <p>1d:</p>
      <p>price_change: {ticker[0]?["1d"]["price_change"] : ""}</p>
      <p>price_change_pct: {ticker[0]?["1d"]["price_change_pct"] : ""}</p>
      <p>volume: {ticker[0]?["1d"]["volume"] : ""}</p>
      <p>volume_change: {ticker[0]?["1d"]["volume_change"] : ""}</p>
      <p>volume_change_pct: {ticker[0]?["1d"]["volume_change_pct"] : ""}</p>
      <p>market_cap_change: {ticker[0]?["1d"]["market_cap_change"] : ""}</p>
      <p>market_cap_change_pct: {ticker[0]?["1d"]["market_cap_change_pct"] : ""}</p>
    </div>
  )
};

export default App;

