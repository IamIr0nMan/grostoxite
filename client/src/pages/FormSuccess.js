import React from 'react';

const FormSuccess = () => {
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
      <h1 className='form-success'>We have received your request!</h1>
    </div>
    </div>
  );
};

export default FormSuccess;
