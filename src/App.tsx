import './App.css';
import { Routes, Route,BrowserRouter } from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import "antd/dist/antd.css";
import Mainmenu from './Components/Layout/Lyout';
import { useSelector } from 'react-redux';
function App() {
  const {isLogin} = useSelector((state:any) => state.users);
  return (
    <>
    {isLogin ? 
     <Mainmenu />:
     <BrowserRouter>
     <Routes>
     <Route path="/signIn" element={<SignIn />}></Route>
     <Route path="/" element={<SignUp />}></Route>
     </Routes>
     </BrowserRouter>
    }
    </>
  );
}
export default App;
