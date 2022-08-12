import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// // import { useForm } from "react-hook-form";
// // import { ErrorMessage } from "@hookform/error-message";
// // import { MyContext } from "../context/context";
// enum sourcenum {
//   Male,
//   Female,
// }
// interface formData {
//   username: string;
//   password: number;
//   gender: sourcenum;
// }
// export default function Form() {
//   const [firstName, setFirstName] = useState("");
//   const [password, setpassword] = useState("");
//   const [error, setError] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (firstName.length <= 6 || firstName.length == 0 || password.length <= 8 || password.length == 0) {
//       setError(true);
//     }
//     console.log("First Name: ",firstName);
//     console.log("password: ",password);
//   };

// //   const contextData = useContext(MyContext);
//   const navigate = useNavigate();
//   const handleMove = () => {
//     navigate("./Signup");
//   };
//   // const {
//   //   register,
//   //   handleSubmit,
//   //   formState: { errors },
//   // } = useForm<formData>();
//   // handleSubmit(({ username, password, gender })

//   return (
//     <>
//       <div className="container-fluid">
//         <div className="row bg-secondary">
//           <div className="col-lg-4"></div>
//           <div className="col-lg-4"></div>
//           <div className="col-lg-4 text-center">
//             <button
//               onClick={handleMove}
//               type="submit"
//               className="btn btn-primary"
//               style={{ borderRadius: "10px" }}
//             >
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-4"></div>
//           <div className="col-lg-4">
//             <div className="form">
//               <form onSubmit={(e) => handleSubmit(e)}>
//               <div className="form-group mt-4">
//                 <div>
//                 <label>UserName</label>
//                   <input
//                    type="text"
//                    className="form-control mb-3"
//                     placeholder="First Name"
//                     onChange={(e) => setFirstName(e.target.value)}
//                   />
//                 </div>
//                 {error && firstName.length <= 6 ? (
//                   <p>Please Fulfill UserName Conditions</p>
//                 ) : (
//                   ""
//                 )}
//                 <div>
//                 <label>Password</label>
//                   <input
//                    type="text"
//                    className="form-control mb-3"
//                     placeholder="Password"
//                     onChange={(e) => setpassword(e.target.value)}
//                   />
//                 </div>
//                 {error && password.length <= 7 ? (
//                   <p>Please Fulfill Password Condition</p>
//                 ) : (
//                   ""
//                 )}
//                 <div>
//                 <button
//                   type="submit"
//                   className="btn btn-secondary"
//                   style={{ borderRadius: "10px" }}
//                 >
//                   Signin
//                 </button>
//                 </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//           <div className="col-lg-4"></div>
//         </div>
//       </div>
//     </>
//   );
// }