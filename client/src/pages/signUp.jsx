import React from "react";
import Validate from './Validate';
import useForm from './useForm';

  const Signup = ({ submitForm }) => {
    const { handleChange, handleSubmit, user, errors } = useForm(
      submitForm,
      Validate
    );
  // const [user, setUser] = useState({
  //   firstname: "",
  //   lastname: "",
  //   dateofbirth: "",
  //   email: "",
  //   mobile: "",
  //   email: "",
  //   identification: "",
  //   address: "",
  //   accountNo: "",
  //   bankName: "",
  //   tradingBalance: "",
  //   password: "",
  // });

  // const [error, setErrors] = useState({});

  // let name, value;
  // const handleChange = (e) => {
  //   console.log(e);
  //   name = e.target.name;
  //   value = e.target.value;

  //   setUser({ ...user, [name]: value });
  // };

  // const handleChangeForm = e => {
  //   e.preventDefault();
  // }
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

        {/* Main form code starts here --- */}

        <form className="singup-form row g3" onSubmit={handleSubmit}>
          <div class="col-md-6 mb-3 fs-6 font-monospace">
            <label for="inputEmail4" class="form-label">
              First Name  
            </label>
            <input
              type="text"
              name="firstname"
              value={user.firstname}
              onChange={handleChange}
              class="form-control"
              id="inputEmail4"
              autoComplete="off"
            />
             {errors.firstname && <p style={{ color: "red" }}>{errors.firstname}</p>}
          </div>
          <div class="col-md-6 mb-3 fs-6 font-monospace">
            <label for="inputPassword4" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              value={user.lastname}
              onChange={handleChange}
              class="form-control"
              id="inputPassword4"
              autoComplete="off"
            />
            {errors.lastname && <p style={{ color: "red" }}>{errors.lastname}</p>}
          </div>
          <div class="col-md-6 mb-3 fs-6 font-monospace">
            <label for="inputEmail4" class="form-label">
              DOB
            </label>
            <input
              type="date"
              name="dateofbirth"
              value={user.dateofbirth}
              onChange={handleChange}
              class="form-control"
              id="inputEmail4"
              autoComplete="off"
            />
             {errors.dateofbirth && <p style={{ color: "red" }}>{errors.dateofbirth}</p>}
          </div>
          <div class="col-md-6 mb-3 fs-6 font-monospace">
            <label for="inputPassword4" class="form-label">
              Phone No
            </label>
            <input
              type="number"
              name="mobile"
              value={user.mobile}
              onChange={handleChange}
              class="form-control"
              id="inputPassword4"
              autoComplete="off"
            />
             {errors.mobile && <p style={{ color: "red" }}>{errors.mobile}</p>}
          </div>
          <div class="col-md-6 mb-3 fs-6 font-monospace">
            <label for="inputAddress" class="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              class="form-control"
              id="inputAddress"
              placeholder=""
              autoComplete="off"
            />
             {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
          <div class="col-md-6 mb-3 fs-6 font-monospace">
            <div class="col-auto">
              <label class="form-label" for="autoSizingSelect">
                Identification
              </label>
              <select class="form-select" id="autoSizingSelect">
                <option selected>Choose...</option>
                <option value="1">AdharCard</option>
                <option value="2">PanCard</option>
                <option value="3">VoterId</option>
                <option value={user.identification}>DrivingLicense</option>
              </select>
              {errors.identification && <p>{errors.identification}</p>}
            </div>
          </div>
          <div class="col-12 mb-3 fs-6 font-monospace">
            <label for="inputAddress" class="form-label">
            Address
            </label>
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
              class="form-control"
              id="inputAddress"
              placeholder=""
              autoComplete="off"
            />
             {errors.address && <p style={{ color: "red" }} >{errors.address}</p>}
          </div>
          <div class="col-md-6 mb-3 fs-6 font-monospace">
            <label for="inputEmail4" class="form-label">
              Account Number
            </label>
            <input
              type="number"
              name="accountNo"
              value={user.accountNo}
              onChange={handleChange}
              class="form-control"
              id="inputEmail4"
              autoComplete="off"
            />
             {errors.accountNo && <p style={{ color: "red" }}>{errors.accountNo}</p>}
          </div>
          <div class="col-md-6 mb-3 fs-6 font-monospace">
            <label for="inputEmail4" class="form-label">
              Bank Name
            </label>
            <input
              type="text"
              name="bankName"
              value={user.bankName}
              onChange={handleChange}
              class="form-control"
              id="inputEmail4"
              autoComplete="off"
            />
             {errors.bankName && <p style={{ color: "red" }}>{errors.bankName}</p>}
          </div>
          <div class="col-12 mb-3 fs-6 font-monospace">
            <label for="inputEmail4" class="form-label">
              Trading Balance
            </label>
            <input
              type="number"
              name="tradingBalance"
              value={user.tradingBalance}
              onChange={handleChange}
              class="form-control"
              id="inputEmail4"
              autoComplete="off"
            />
             {errors.tradingBalance && <p style={{ color: "red" }}>{errors.tradingBalance}</p>}
          </div>
          <div class="col-12 mb-3 fs-6 font-monospace">
            <label for="inputEmail4" class="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              class="form-control"
              id="inputEmail4"
              autoComplete="off"
            />
             {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
          </div>
          <button type="submit" class=" form-input-btn btn btn-primary">
            Sign up
          </button>
          {/* <button className='form-input-btn' type='submit'>
          Sign up
        </button> */}
        </form>
      </div>
    </div>
  );
}

export default Signup;
