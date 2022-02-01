import React from "react";
import StockView from "./stockview.jsx";

export default function WatchList() {
  
  const [stockData, setStockData] = React.useState([]);
  React.useEffect(() => {
    fetch('https://swapi.dev/api/people/').
    then(res => res.json()).
    then(data => {
      setStockData(data.results)}).catch(err => console.log(err));
    }, [])

const stockdata = stockData.map((data)=> {
  return (
      <StockView
          name = {data.name}
          height = {data.height}
          mass = {data.mass}
      / >)
})

  return (
    <div>
      <div className="split left">
        <div>
        {/* <button type="button" class="btn btn-primary" onClick={toggleState()}>Clik to Chnage</button> */}
        {stockdata}
        </div>
      </div>
    </div>
  );
}
