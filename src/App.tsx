import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import Dashboard from './Components/Dashboard/Dashboard';
function App() {
  return (
    <>
      <Routes>
        <Route path="/SignUp" element={< SignUp />}></Route>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
      </Routes>
    </>

  );
}
export default App;
