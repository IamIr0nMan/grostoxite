import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "rgb(249, 249, 249)" }} className="vh-100">
        <div
          style={{ backgroundColor: "rgb(256, 256, 256)" }}
          className="h-auto  border p-5 position-absolute top-50 start-50 translate-middle shadow"
        >
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
              <img
                className="mb-5"
                src="./images/grostoxite.png"
                alt="logo"
                style={{ width: 200, height: 40 }}
              />
            </div>
            <div className="d-flex justify-content-center">
              <h1 className="fw-light mb-5">Login to Grostoxite</h1>
            </div>
            <div className="d-flex justify-content-center">
              <form action="/" method="get" className="row g-3">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    name="email"
                  />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="password"
                    name="password"
                    minLength="6"
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <button
                  className="btn btn-primary btn-lg"
                  style={{ backgroundColor: "#ff4800", border: "none" }}
                >
                  Login
                </button>
                <a
                  href=""
                  className="d-flex justify-content-center text-decoration-none"
                >
                  Forgot Password?
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
