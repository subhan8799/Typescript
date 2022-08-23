import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
import { Signbtn } from '../Buttons/Buttons';
import { setIsLoginUser } from "../Action/userAction";
export default function SignIn() {
    const [errMsg, setErrMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [type, setType] = useState('password');
    const [stateUsers, setStateUsers] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();
    const handleMoving = () => {
        navigate("./Dashboard");
    };
    const users = useSelector((state: any) => state.users.signup)
    useEffect(() => {
        setStateUsers(users)
    }, [])
    const handleToggle = () => {
        setShowPassword(!showPassword)
        if (type === 'password') {
            setType('text');
        }
        else {
            setType('password')
        }
    }
    const dispatch = useDispatch();
    const SignInHandle = async (e: any) => {
        e.preventDefault()
        //@ts-ignore\
        const user = users.map(item => item.email);
    const userpass = users.map((item:any) => item.password);
        if (user.includes(email)  && userpass.includes(password)) {
            navigate("./Layout");
            dispatch(setIsLoginUser(true))
        }
       if (!user.includes(email)){
               alert('Email credentials are invalid')
        }
    };
    const emailHandler = (value: string) => {
        const filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!filter.test(value)) {
            setErrMsg('Please valid email address');
            return true;
        } else {
            setErrMsg('')
        }
        setEmail(value)
    }
    const passwordHandler = (value: string) => {
        const paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if (!value.match(paswd)) {
            return false;
        } else {
            setErrorMsg('');
            setPassword(value)
            return true;
        }
    }
    return (
        <div className='row SignIn' >
            <div className='col'>
                <form className="formData style">
                    <h3>Sign In</h3>
                    <div className="mb-3">
                        <form className="mt-4 mb-4" onSubmit={SignInHandle} />
                        <label>Email address</label>
                        <input
                            name="Email"
                            type="text"
                            className="control"
                            placeholder="Enter Email"
                            onChange={(e) => emailHandler(e.target.value)}
                        />
                        {errMsg.length ? <div style={{ color: 'red' }}>{errMsg}</div> : ''}
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type={type}
                            className="form-control"
                            id="Password"
                            placeholder="Password"
                            name="password"
                            onChange={(e) => passwordHandler(e.target.value)}
                        />
                        {showPassword ? <BsFillEyeFill className="Eyeicon" onClick={handleToggle} /> : <BsFillEyeSlashFill className="Eyeicon" onClick={handleToggle} />}
                    </div>
                    {errorMsg.length ? <div style={{ color: 'red' }}>{errorMsg}</div> : ''}
                    <div className="mb-3">
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                            />
                            <label className="custom-control-label" htmlFor="customCheck1">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <div className="d-grid">
                        <Signbtn
                            onClick={SignInHandle}
                            types='submit'
                            text="Sign In"
                            className="btn btn-secondary"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}