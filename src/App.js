import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Appoinments from './Pages/Appoinments/Appoinments';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}/>

        <Route path='/appoinments' element={<Appoinments></Appoinments>}/>
      </Routes>
    </div>
  );
}

export default App;
