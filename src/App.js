import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Appoinments from './Pages/Appoinments/Appoinments';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequiredAuth from './Pages/Login/RequiredAuth';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppoinments from './Pages/Dashboard/MyAppoinments';
import Review from './Pages/Dashboard/Review';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}/>


        <Route path='appoinments' element=
        {<RequiredAuth>
          <Appoinments>
            
          </Appoinments>
        </RequiredAuth>}/>
        <Route path='dashboard' element=
        {<RequiredAuth>
          <Dashboard></Dashboard>
        </RequiredAuth>}>

        <Route index element={<MyAppoinments></MyAppoinments>}/>
        <Route path='review' element={<Review></Review>}/>

        </Route>
       
        <Route path='login' element={<Login></Login>}/>
        <Route path='register' element={<Register></Register>}/>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
