import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import Dashboard from './Components/Dashboard/Dashboard';
import Student from './Components/Students/Student';
import Mainmenu from './Components/Layout/Lyout';
function App() {
  return (
    <>
      <Routes>
        <Route path="/SignUp" element={< SignUp />}></Route>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/student" element={<Student />}></Route>
        <Route path="/layout" element={<Mainmenu />}></Route>
      </Routes>
    </>
  );
}
export default App;
