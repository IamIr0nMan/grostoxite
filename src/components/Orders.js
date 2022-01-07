import React from "react-dom";

export default function Orders() {
  return (
    <div className="order-main split right order">
      <h5 className="holding-heading">Orders (4)</h5>
      <div className="holding-main-table">
        <table className="table table-bordered border-0 large">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Trade time</th>
              <th>Order ID</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CAMS</td>
              <td>2</td>
              <td>311245</td>
              <td>sell : buy</td>
              <td>28457</td>
              <td>28457</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
