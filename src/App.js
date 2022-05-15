import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Appoinments from './Pages/Appoinments/Appoinments';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}/>


        <Route path='/appoinments' element={<Appoinments></Appoinments>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/register' element={<Register></Register>}/>
      </Routes>
    </div>
  );
}

export default App;
