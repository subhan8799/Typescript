
import React, {  useState } from "react";

import {useNavigate} from 'react-router-dom'


export default function Signup() {
  const [err,setErr]=useState(false)
  const [firstName,setfirstName]=useState("")
  const [lastName,setlastName]=useState("")
  const [password,setPassword]=useState("")
  const [confirmPass,setConfirmPass]=useState("")
  const [userErr,setUserErr]=useState(false);
  const [passErr,setPassErr]=useState(false);

    const navigate = useNavigate();

    const handleMove = () =>{
        navigate('/SignIn');
    
      }
      function SignUpHandle(e: React.FormEvent)
      {
        if (firstName.length || lastName.length || password.length || confirmPass.length)
        {
          alert("Value of correct")
        }
        else
        {
          alert("all good")
        }
        e.preventDefault()
      }
      const firstNamehandle = (e: React.ChangeEvent<HTMLInputElement>)=>{
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
        setfirstName(item)
      }
      function lastNamehandle(e: React.ChangeEvent<HTMLInputElement>){
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
        setlastName(item)
      }
      function passwordhandle(e: React.ChangeEvent<HTMLInputElement>){
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
      }
      function confirmPasshandle(e: React.ChangeEvent<HTMLInputElement>){
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
        setConfirmPass(item)
      }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <form className="mt-4 mb-4" onSubmit={SignUpHandle}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter First Name"
                  onChange={firstNamehandle}
                  {...userErr?<span>User Not Valid</span>:""}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Last Name"
                onChange={lastNamehandle}
                {...userErr?<span>User Not Valid</span>:""}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={passwordhandle}
                  {...userErr?<span>User Not Valid</span>:""}
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Confirm Password"
                 onChange={confirmPasshandle}
                 {...userErr?<span>User Not Valid</span>:""}
                />
              </div>
              <button
              onClick={handleMove}
                type="submit"
                className="btn btn-secondary"
                style={{ borderRadius: "10px" }}
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