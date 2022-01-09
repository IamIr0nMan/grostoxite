import React from "react";
import StockView from "./stockview.jsx";

export default function WatchList() {
  return (
    <div>
      <div className="split left">
        <div /* className="centered" */>
          <StockView />
          <StockView />
          <StockView />
          <StockView />
          <StockView />
        </div>
      </div>
    </div>
  );
}
