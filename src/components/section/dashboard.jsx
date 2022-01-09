import React from "react";

export default function Dashboard() {
  return (
    <div>
      <div className="split right">
        <div /*className="centered" */>
          <h2 className="ayush-right-heading">Hi, Ayush Mishra</h2>
          <hr />
          <div>
            <ul className="right-subsec-2">
              <li>
                <img
                  src="./images/icon.png"
                  alt="Holdings"
                  className="equity-sym"
                />
                <span className="holding-compnent">Holdings</span>
              </li>
            </ul>
          </div>
          <div className="equity-right-sec">
            <div className="ayush123">
              <ul className="right-subsec-2-ul-1">
                <li className="holding-pl">1.76L</li>
                <li>
                  <sub>P&L</sub>
                </li>
              </ul>
            </div>
            <div className="vertical-separartion-holdings"></div>
            <div className="vertical-rightsec"></div>
            <div className="ayush123">
              <ul className="right-subsec-2-ul-1">
                <li className="current-value">Current Value</li>
                <li className="investment">Investment</li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
