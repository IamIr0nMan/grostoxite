import React, { useState }  from 'react'
import Dashboard from './section/dashboard';
import StockView from "./section/stockview";

export default function MutualFund(){

    const [mutualFund, setMutualFund] = useState([]);
    React.useEffect(() => {
      fetch('https://randomuser.me/api/').
      then(res => res.json()).
      then(data => {
        setMutualFund(data.results)}).catch(err => console.log(err));
      }, [])
  
  const mutualFunddata = mutualFund.map((data)=> {
    return (
        <StockView
            name = {data.name.first}
            height = {data.location.street.number}
            mass = {data.location.postcode}
        / >)
  })
    return (
      <div>
        <div className="split left">
          <div>
          {mutualFunddata}
          </div>
      </div>
      <Dashboard />
      </div>
    );
  }