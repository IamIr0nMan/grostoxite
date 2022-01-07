import React from "react";

export default function SectionRight() {
  return (
    <div>
      <div className="split right">
        <div /*className="centered" */>
          <h2 className="ayush-right-heading">Hi, Ayush Mishra</h2>
          {/* <hr /> */}
          <div>
            <ul className="right-subsec-2">
              <li>
                <span className="equity-sym">&#9737;</span>Holdings
              </li>
            </ul>
          </div>
          <div className="equity-right-sec">
            <div className="ayush123">
              <ul className="right-subsec-2-ul-1">
                <li>1.76L</li>
                <li>
                  <sub>P&L</sub>
                </li>
              </ul>
            </div>
            <div className="vertical-rightsec"></div>
            <div className="ayush123">
              <ul className="right-subsec-2-ul-1">
                <li>Margin Used</li>
                <li>
                  <sub>Account Value</sub>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
