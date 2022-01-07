import React from "react-dom";

export default function Holdings() {
  return (
    <div className="order-main split right holding">
      <h5 className="holding-heading">Holdings (4)</h5>
      <div className="holding-main-table">
        <table className="table table-bordered border-0 large">
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.cost</th>
              <th>LTP</th>
              <th>Curr.val</th>
              <th>P&L</th>
              <th>Net chg.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CAMS</td>
              <td>2</td>
              <td>311245</td>
              <td>28457</td>
              <td>2830.00</td>
              <td>397.05</td>
              <td>+16.9%</td>
            </tr>
            <tr>
              <td>EITHERMOTOR</td>
              <td>1</td>
              <td>311245</td>
              <td>28457</td>
              <td>2830.00</td>
              <td>397.05</td>
              <td>+16.9%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <table className="table table-borderless border-0 ">
        <thead>
          <tr>
            <td>Total investment</td>
            <td>Current value</td>
            <td>Day's P&L</td>
            <td>Total P&L</td>
          </tr>
          <tr>
            <td>1245</td>
            <td>36.41</td>
            <td>-31.4.40</td>
            <td>-31.4.40</td>
          </tr>
        </thead>
      </table>
    </div>
  );
}
