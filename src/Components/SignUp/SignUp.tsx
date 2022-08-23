import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
import { Signbtn } from '../Buttons/Buttons';
import { signupUsers } from "../Action/userAction";
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
  const handleSubmit = () => {
    dispatch(signupUsers({
      email: email,
      password: password,
      confirmpassword: confirmpassword,
    }))
    if (email.length && password.length && confirmpassword.length) {
      navigate("/");
    } else {
      setButton(true)
    }
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
  const goToSignIn = () => {
    navigatee("/signIn");
  };
  return (
      <div className='row SignIn'>
        <div className='col-lg-4'></div>
        <div className='col-lg-4'>
          <form className="formData style">
            <h3>Sign Up</h3>
            <div className="mb-3">
              <form className="mt-4 mb-4"  />
              <label>Email address</label>
              <input
                placeholder="Email Address"
                value={email}
                className="control"
                id="exampleInputEmail1"
                onChange={(e: any) => emailHandler(e.target.value)}
              />
              {errMsg.length ? <div style={{ color: 'red' }}>{errMsg}</div> : ''}
            </div>
            <div className="mb-3">
              <label>Password</label>
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
            <div className="mb-3">
              <label>Confirm Password</label>
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
            <div className="d-grid">
                <Signbtn
                onClick={() => {handleSubmit(); goToSignIn()}}
                  text="Signup"
                  color="white"
                  types= "submit"
                  borderColor="grey"
                  background-color="blue"
                  className="btn btn-primary"
                  disabled={!email.length || !password.length || !confirmpassword.length || Boolean(errorMsg.length || errMsg.length || passSam.length)}
                />
            </div>
          </form>
        </div>
        <div className='col-lg-4'></div>
      </div>
  )
}
export default Signup;