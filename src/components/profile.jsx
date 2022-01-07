import React from "react";

function Profile() {
  return (
    <div className="split right">
      <div>
        <h4>Profile</h4>
        <hr />
        <h2>Deepak Kumar</h2>
        <br />
        <div>
          <div className="d-flex flex-row p-2">
            <div className="d-flex justify-content-start">
              <h4>Account</h4>
            </div>
            <div className="d-flex justify-content-end">
              <a href="">
                <h4>edit</h4>
              </a>
            </div>
          </div>
          <hr />
          <table className="table table-borderless border-0">
            <tbody>
              <tr>
                <td>
                  <h6>Date of Birth</h6>
                </td>
                <td>
                  <h6>01-01-2022</h6>
                </td>
              </tr>
              <tr>
                <td>
                  <h6>ID</h6>
                </td>
                <td>
                  <h6>Pan card</h6>
                </td>
              </tr>
              <tr>
                <td>
                  <h6>E-mail</h6>
                </td>
                <td>
                  <h6>fdksjhkj@gjdh.com</h6>
                </td>
              </tr>
              <tr>
                <td>
                  <h6>Mobile</h6>
                </td>
                <td>
                  <h6>+91 1234567890</h6>
                </td>
              </tr>
              <tr>
                <td>
                  <h6>Address</h6>
                </td>
                <td>
                  <h6>Bangalore, India</h6>
                </td>
              </tr>
              <tr>
                <td>
                  <h6>Bank</h6>
                </td>
                <td>
                  <h6>SBI</h6>
                </td>
              </tr>
              <tr>
                <td>
                  <h6>Bank Account Number</h6>
                </td>
                <td>
                  <h6>123346484588798</h6>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Profile;
