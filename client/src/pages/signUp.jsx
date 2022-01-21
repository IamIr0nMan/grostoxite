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
        <form action="/" method="get" className="singup-form">
          <div class="mb-3 fs-6 font-monospace">
            <label for="exampleInputPhone" class="form-label">
              Phone No
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              class="form-control"
            />
          </div>
          <div class="mb-3 fs-6 font-monospace ">
            <label for="exampleInputEmail1" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="nameHelp"
            />
          </div>
          <div class="mb-3 fs-6 font-monospace">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 fs-6 font-monospace">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 fs-6 font-monospace">
            <label for="exampleInputPassword1" class="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
