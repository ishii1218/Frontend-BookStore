import React from 'react'
import { useNavigate } from 'react-router-dom';
import { authActions } from '../store/auth';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [Values, setValues] =useState({
    username: '',
    password: '',
    
  })
  
  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  const change = (e) => {
    const { name, value } = e.target
    setValues({
      ...Values,
      [name]: value
    });
  };
  
    const submit = async () => {
      try {
        console.log(Values);
        if (Values.username === "" ||
           Values.password ==="") 
          {
          alert('All fields are required')
          }
        else {
          const response = await axios.post(
            'http://localhost:1000/login',
            Values
        );
        console.log(response.data);
        dispatch(authActions.login());
        dispatch(authActions.changeRole(response.data.role));
        localStorage.setItem('id', response.data.id);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', response.data.role);
        navigate('/profile')
        }
      }
      catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <div className="font-[sans-serif] text-[#333] mt-10 flex items-center justify-center min-h-screen bg-green-100/70">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4 ">
        <div className="grid md:grid-cols-1 justify-center items-center gap-4 w-full">
          <div className="border bg-white border-green-200 rounded-md p-6 max-w-lg shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-6 ">
              <div className="mb-10">
                <h3 className="text-3xl font-extrabold text-teal-900/90">Login</h3>
                <p className="text-sm mt-4">Sign in to your account and explore a world of possibilities. Your journey begins here.</p>
              </div>
              <div>
                <label className="text-sm mb-2 block">Username</label>
                <div className="relative flex items-center">
                  <input name="username" type="text" 
                  required 
                  className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]" 
                  placeholder="Enter user name" 
                  value={Values.username}
                  onChange={change}
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>
              <div>
                <label className="text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input name="password" type="password" 
                  required 
                  className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]" 
                  placeholder="Enter password"
                  value={Values.password}
                  onChange={change}
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-3 block text-sm">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="jajvascript:void(0);" className="text-green-800 hover:underline">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div className="!mt-10">
                <button type="button" className="w-full bg-teal-900/90 shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#333] hover:bg-teal-800 focus:outline-none" onClick={submit}>
                  Log in
                </button>
              </div>
              <p className="text-sm !mt-10 text-center">Dont have an account <a href="javascript:void(0);" className="text-green-800 hover:underline ml-1 whitespace-nowrap">Register here</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login