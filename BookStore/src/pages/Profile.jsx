import {React,useEffect, useState } from 'react'
import Sidebar from '../components/Profile/Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import MobileNav from '../components/Profile/MobileNav'


const Profile = () => {

  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // const role = useSelector((state) => state.auth.role);

  const headers = {
    id: localStorage.getItem('id'),
    authorization:  `Bearer ${localStorage.getItem('token')}`
};
  const [Profile, setProfile] = useState();



  useEffect(() => {
      const fetch = async () => {
          const response = await axios.get(
              `http://localhost:1000/user-information`,
              {headers}
          );
          console.log('user', response);
          setProfile( response.data);
      };
      fetch();
  }, []);

    

  return (
    <div className='mt-10 bg-green-200 px-0 md:px-5 flex flex-col md:flex-row h-full pt-12 pb-0 gap-6'>
      {!Profile && <div className='w-full h-[100%] flex items-center justify-center'>
        Loading...</div>}
      {Profile && (
        <>
        <div className='w-full md:w-[400px] mb-0 md:mb-10'>
          <Sidebar data={Profile} />
          <div className='md:hidden'>
          <MobileNav />
          </div>
        </div>
        <div className='w-full md:w-5/6 '>
          <Outlet />
        </div>
      </>
      )}
    </div>
  )
}

export default Profile