import React from "react";
import StockView from "./stockview.jsx";

export default function WatchList() {
  
  const [myState, setmyState] = React.useState([]);
  React.useEffect(() => {
    fetch('https://swapi.dev/api/people/').
    then(res => res.json()).
    then(data => {
      setmyState(data.results)}).catch(err => console.log(err));
    }, [])
//  console.log(myState);

const jokeElements = myState.map((data)=> {
  return (
      <StockView 
          // name = {data.name}
          name = {data.name}
          height = {data.height}
          mass = {data.mass}
      / >)
})

  return (
    <div>
      <div className="split left">
        <div /* className="centered" */>
        {/* <pre>{JSON.stringify(myState, null, 2)}</pre> */}
           {/* <StockView />
          <StockView />
          <StockView />
          <StockView />  */}
          {jokeElements}
        </div>
      </div>
    </div>
  );
}
