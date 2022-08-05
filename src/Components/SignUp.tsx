import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUsersSuccess } from "./Action/userAction"
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
import InputField from "./Add/InputField"
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [errorMsg, setErrorMsg] = useState('');
  const [passSam, setPassSam] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [button, setButton] = useState(true);
  const [type, setType] = useState('password');
  const [type1, setType1] = useState('cnfrmpassword');
  const [showPassword, setShowPassword] = useState(false)
  const [cnfrmShowPassword, setcnfrmShowPassword] = useState(false)
  const dispatch = useDispatch();

  const handleToggle = () => {
    setShowPassword(!showPassword)
    if (type === 'password') {
      setType('text');
    }
    else {
      setType('password')
    }
  }

  const cnfrmToggle = () => {
    setcnfrmShowPassword(!cnfrmShowPassword)
    if (type1 === 'password') {

      setType1('text');
    }
    else {
      setType1('password')
    }
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();

    dispatch(fetchUsersSuccess({
      email: email,
      password: password,
      confirmpassword: confirmpassword,
      SignUp: true,
    })
    );
    if (email.length && password.length && confirmpassword.length) {
    } else {
      setButton(true)
    }
    let localdata = new Array()
    setEmail('')
    setpassword('')
    setconfirmpassword('')

  };
  const emailHandler = (value: string) => {
    const filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setEmail(value)
    if (!value.match(filter)) {
      setErrMsg('Please provide a valid userName address');
    } else {
      setEmail(value)
      setErrMsg('')
    }
  }
  const passwordHandler = (value: string) => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
    if (!value.match(passwordRegex)) {
      setErrorMsg('Password length should be 8-15, and contain a capital letter a special chracter and a digit');

    } else {

      setErrorMsg('')

    }
    setpassword(value)
  }
  const cnfrmpasswordHandler = (value: string) => {
    if (value !== password) {
      setPassSam('Password does not match');
    } else {
      setPassSam('')
    }
    setconfirmpassword(value)
  }
  const navigate = useNavigate();
  const handleMove = () => {
    navigate("/");
  };
  const navigatee = useNavigate();
  const handleMoving = () => {
    navigatee("/Dashboard");
  };
  return (
    <>

      <nav className="navbar-light bg-light">
        <div className="container-fluid d-flex">
          <a className="navbar-brand" href="#">Navbar</a>
          <button
            onClick={handleMove}
            type="submit"
            className="btn btn-primary "
            style={{ borderRadius: "8px" }}
          >
            Sign In
          </button>
          <button
            onClick={handleMoving}
            type="submit"
            className="btn btn-primary "
            style={{ borderRadius: "8px", marginLeft: "6px" }}
          >
            Dashboard
          </button>


        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <form className="mt-4 mb-4" onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group">
                <InputField
                  value={email}
                  label="Email"
                  type="text"
                  className="control"
                  id="exampleInputEmail1"
                  onChange={(e: any) => emailHandler(e.target.value)}
                />
                {/* <input
                  value={email}
                  type="text"
                  className="control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email"
                  onChange={(e) => emailHandler(e.target.value)}
                /> */}
                {errMsg.length ? <div style={{ color: 'red' }}>{errMsg}</div> : ''}
              </div>
              <div className="form-group">
                <label>Password</label>
                <div className="passwordDiv">
                  <input
                    value={password}
                    type={type}
                    className="form-control"
                    id="Password"
                    placeholder="Password"
                    onChange={(e) => passwordHandler(e.target.value)}
                  />

                  {showPassword ? <BsFillEyeFill className="Eyeicon" onClick={handleToggle} /> : <BsFillEyeSlashFill className="Eyeicon" onClick={handleToggle} />}


                </div>
                {(errorMsg.length && password.length) ? <div style={{ color: 'red' }}>{errorMsg}</div> : ''}
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <div className="passwordDiv">
                  <input
                    value={confirmpassword}
                    type={type1}
                    className="form-control"
                    id="cnfrmpassword"
                    placeholder="Password"
                    onChange={(e) => cnfrmpasswordHandler(e.target.value)}
                  />

                  {cnfrmShowPassword ? <BsFillEyeFill className="Eyeicon" onClick={cnfrmToggle} /> : <BsFillEyeSlashFill className="Eyeicon" onClick={cnfrmToggle} />}
                </div>
                {(passSam.length && confirmpassword.length) ? <div style={{ color: 'red' }}>{passSam}</div> : ''}
              </div>
              <button
                type="submit"
                className="btn btn-secondary mt-3"
                style={{ borderRadius: "10px" }}
                disabled={!email.length || !password.length || !confirmpassword.length || Boolean(errorMsg.length || errMsg.length || passSam.length)}
              >
                Sign Up
              </button>

            </form>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </>
  );
}

export default Signup;