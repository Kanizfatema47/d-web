import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Appoinments from './Pages/Appoinments/Appoinments';
import Text from './Pages/Test';
import SignIn from './Pages/Login/SignIn';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/test' element={<Text></Text>}/>


        <Route path='/appoinments' element={<Appoinments></Appoinments>}/>
        <Route path='/login' element={<Login></Login>}/>
      </Routes>
    </div>
  );
}

export default App;
