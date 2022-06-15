import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
// import Form from './Form';

function App() {
  return (
    <>
      <Routes>
        <Route path="/SignUp" element={< SignUp />}></Route>
        <Route path="/" element={<SignIn />}></Route>
        {/* <Route path="/" element={< Form />}></Route> */}
      </Routes>

    </>

  );
}

export default App;
