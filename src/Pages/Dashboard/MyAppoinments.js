import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppoinments = () => {
    const [appoinments, setAppoinments] = useState([]);
    const [user ]=useAuthState(auth)

    useEffect(()=>{
       if(user){
        fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then(res => res.json())
        .then(data => setAppoinments(data));
       }
    } ,[user])
    return (
        <div>
            <h2 className='text-accent'>Appoinments :{appoinments.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
        
      </tr>
    </thead>

    <tbody>
        {
            appoinments.map((a, index)=> <tr>
                <th>{index +1}</th>
                <th>{a.patientName}</th>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
              </tr> )
        }
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppoinments;