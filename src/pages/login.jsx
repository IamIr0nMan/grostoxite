import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div className="relative">
        <div>
          <img
            className="mb-5"
            src="../images/grostoxite.png"
            alt="logo"
            style={{ width: 300, height: 65 }}
          />
          <h1 className="fw-light mb-5">Login to Grostoxite</h1>
        </div>
        <div className="d-flex justify-content-center">
          <form action="/" method="get" className="row g-3">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="email"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="password"
                name="password"
                minLength="6"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <button
              className="btn btn-primary btn-lg"
              style={{ backgroundColor: "#ff4800", border: "none" }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
