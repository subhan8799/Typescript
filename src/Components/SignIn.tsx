import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ErrorMessage } from "@hookform/error-message";
import { MyContext } from "../contexts/allContext";
// enum sourcenum {
//     True,
//     False,
// }
// interface SignIn {
//     Email: string;
//     password: number;
//     Check: sourcenum;
// }
export default function SignIn() {
    const [err,setErr]=useState(false)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [userErr,setUserErr]=useState(false);
    const [passErr,setPassErr]=useState(false);
    const contextData = useContext(MyContext);
    const navigate = useNavigate();
    const handleMove = () => {
        navigate("./SignUp");
    };
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // }hook <SignIn>();
    // const onsubmit = handleSubmit(({ email, password, Check }) => {
    //     console.log(Email);
    //     alert("Welcome Sign In");
    // });
      function SignInHandle(e: React.FormEvent)
      {
        if (email.length<3 || password.length<9)
        {
            alert("type correct values")
        }
        else
        {
            alert("all good")
        }
        e.preventDefault()
      }
      const  emailHandler =(e: React.ChangeEvent<HTMLInputElement>)=>{
        let item=e.target.value;
        console.log(item)
        if(item.length<3)
        {
            setErr(true)
        }
        else
        {
            setUserErr(false)
        }
       setEmail(item)
        // console.log(e.target.value)
      }
      function passwordHandler(e:React.ChangeEvent<HTMLInputElement>){
        let item=e.target.value;
        console.log(item)
        if(item.length<9)
        {
            setPassErr(true)
        }
        else
        {
            setPassErr(false)
        }
        setPassword(item)
        // console.log(e.target.value)
      }


    return (
        <>
            <div className="container-fluid">
                <div className="row bg-secondary">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 text-center">
                        <button
                            onClick={handleMove}
                            type="submit"
                            className="btn btn-primary"

                            style={{ borderRadius: "10px" }}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <div className="form">
                            <form className="mt-4 mb-4" onSubmit={SignInHandle}>
                             
                                <div className="form-group">
                                    <label>Email</label>
                                    
                                    <input

                                        // ref={register({

                                        // })}

                                        // {...register("Email", {
                                        //     required: true,
                                        //     minLength: 6,
                                        //     maxLength: 20,
                              
                                        // })}
                                        // {errors.username && "Email is invalid"}
                                        name="Email"
                                        type="text"

                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter Email"
                                        onChange={emailHandler}
                                        {...userErr?<span>User Not Valid</span>:""}
                                        // onChange={(e)=>console.log(e.target.value)}
                                    />
                                    {/* <ErrorMessage errors={errors} name="Email" as="p" />
                                    <ErrorMessage
                                        errors={errors}
                                        name="Email"
                                        render={({ message }) => <p>Email is in valid</p>}
                                    /> */}
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        // {...register("password", {
                                        //     required: true,
                                        //     minLength: 8,
                                        //     maxLength: 20,
                                        // })}
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Password"
                                        name="password"
                                        onChange={passwordHandler}
                                        {...passErr?<span>Password Not Valid</span>:""}
                                    />
                                    {/* <ErrorMessage errors={errors} name="password" as="p" />

                                    <ErrorMessage
                                        errors={errors}
                                        name="password"
                                        render={({ message }) => <p>Password is in valid</p>}
                                    /> */}
                                </div>
                                <div className="form-check">
                                    <input name="Check" className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" >
                                        Remember Me
                                    </label>
                                </div>
                                <br></br>
                                <br></br>
                                <button
                                    type="submit"
                                    className="btn btn-secondary"
                                    style={{ borderRadius: "10px" }}
                                >
                                    Sign In
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </>
    );
}