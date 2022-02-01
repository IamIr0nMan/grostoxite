import React from "react";
export default function sinup() {
  return (
    <div style={{ backgroundColor: "#FDEFF8" }} className="vh-100">
      <div
        style={{ backgroundColor: "#FFFFFF" }}
        className="h-auto border p-4 position-absolute top-50 start-50 translate-middle shadow p-3 mb-5 bg-body rounded col-xl-4 col-lg-5"
      >
        <div className="d-flex justify-content-center">
          <img
            className="mb-2"
            src="./images/grostoxite.png"
            alt="logo"
            style={{ width: 150, height: 30 }}
          />
        </div>
        <div className="d-flex justify-content-center">
          <h1 className="fw-light mb-3">Signup now</h1>
        </div>
        <form action="/" method="get" className="singup-form row g3">
          <div class="col-md-6 mb-3 fs-6 font-monospace">
            <label for="inputEmail4" class="form-label">
              First Name
            </label>
            <input 
            type="text" 
            name="firstname"
            class="form-control" 
            id="inputEmail4" />
          </div>
          <div class="col-md-6 mb-3 fs-6 font-monospace">
            <label for="inputPassword4" class="form-label">
              Last Name
            </label>
            <input type="text" 
            name="lastname"
            class="form-control" id="inputPassword4"  
            />
          </div>
          <div class="col-md-6 mb-3 fs-6 font-monospace">
            <label for="inputEmail4" class="form-label">
             DOB
            </label>
            <input 
            type="date" 
            name="dateofbirth"
            class="form-control" 
            id="inputEmail4" />
          </div>
          <div class="col-md-6 mb-3 fs-6 font-monospace">
            <label for="inputPassword4" class="form-label">
              Phone No
            </label>
            <input type="number" 
            name="mobile"
            class="form-control" id="inputPassword4" 

            />
          </div>
          <div class="col-md-6 mb-3 fs-6 font-monospace">
            <label for="inputAddress" class="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              class="form-control"
              id="inputAddress"
              placeholder=""
            />
          </div>
          <div class="col-md-6 mb-3 fs-6 font-monospace">
            <label for="inputAddress" class="form-label">
              Adhar Number
            </label>
            <input
              type="text"
              name="identification"
              class="form-control"
              id="inputAddress"
              placeholder=""
            />
          </div>
          <div class="col-12 mb-3 fs-6 font-monospace">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              name="address"
              class="form-control"
              id="inputAddress"
              placeholder=""
            />
          </div>
          <div class="col-md-6 mb-3 fs-6 font-monospace">
            <label for="inputEmail4" class="form-label">
              Account Number
            </label>
            <input 
            type="number" 
            name="accountNo"
            class="form-control" 
            id="inputEmail4" />
          </div>
          <div class="col-md-6 mb-3 fs-6 font-monospace">
            <label for="inputEmail4" class="form-label">
             Bank Name
            </label>
            <input 
            type="text" 
            name="bankName"
            class="form-control" 
            id="inputEmail4" />
          </div>
          <div class="col-12 mb-3 fs-6 font-monospace">
            <label for="inputEmail4" class="form-label">
            Trading Balance
            </label>
            <input 
            type="number" 
            name="bankName"
            class="form-control" 
            id="inputEmail4" />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
