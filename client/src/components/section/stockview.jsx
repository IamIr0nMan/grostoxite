import React from "react";

export default function StockView(props) {
  // console.log(data);
  return (
    <div>
    <div className="stockview-anime" >
        <ul className="ayush-trying">
          {/* {/* <li className="ayush-left-li">Ayush</li> */}
          <li className="ayush-left-li "><a href="www.google.com" className="stockview-a">{props.name}</a></li>
        {/* <li className="ayush-right-li">18.4 &uarr;</li> */}
          <li className="ayush-right-li">{props.height} &uarr;</li>
          {/* <li className="ayush-right-li">12457</li> */}
          <li className="ayush-right-li">{props.mass}</li>
        </ul>
      </div>
    </div>
  );
}
