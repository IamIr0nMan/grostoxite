import React from "react";

function Funds() {
  return (
    <div className="split right">
      <div className="m-5">
        <div className="d-flex flex-row-reverse">
          <button type="button" class="btn btn-lg btn-primary m-2">
            Withdraw
          </button>
          <button type="button" class="btn btn-lg btn-success m-2">
            Add Funds
          </button>
        </div>
        <table className="table table-hover">
          <tbody>
            <tr>
              <td>
                <div>Available Balance in Trading Account</div>
              </td>
              <td>
                <h2>0.00</h2>
              </td>
            </tr>
            <tr>
              <td>Bank Balance</td>
              <td>
                <h2>0.00</h2>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="d-flex flex-row-reverse">
          <a href="" className="text-decoration-none">
            view statement
          </a>
        </div>
      </div>
    </div>
  );
}

export default Funds;
