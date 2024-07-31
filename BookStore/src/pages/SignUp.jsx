import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import toast from '../components/Toast/Toast'

const SugnUp = () => {
const [Values, setValues] =useState({
  username: '',
  email: '',
  password: '',
  cpassword: ''
})

const navigate = useNavigate();

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
         Values.email=== "" || 
         Values.password ==="" ||
        Values.cpassword ==="") 
        {
        alert('All fields are required')
        }
      else if (Values.password !== Values.cpassword) {
        alert('Password does not match')
      }
      else {
        const response = await axios.post(
          'http://localhost:1000/signup',
          Values
      );
      alert(response.data.message);
      navigate('/login')
      }
    }
    catch (error) {
      toast.error(error.response.data.message);

    alert(error.response.data.message);
  }
};
  return (
    <div className="font-[sans-serif] text-[#333] mt-10 flex items-center justify-center min-h-screen bg-green-100/70">
      <div className="max-w-lg w-full mx-auto border bg-white border-green-200 rounded-md p-6 mt-12 mb-12">
        <div className=" mb-10">
        <h3 className="text-3xl font-extrabold text-teal-900/90">Sign Up</h3>
        </div>
        <form>
          <div className="space-y-6">
          <div>
              <label className="text-sm mb-2 block">Username</label>
              <input name="username" type="text" className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-green-500" 
              placeholder="Enter email" 
              required
              value={Values.username}
              onChange={change}
              />
            </div>
            <div>
              <label className="text-sm mb-2 block">Email</label>
              <input name="email" type="text" className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-green-500" 
              placeholder="Enter email"
              required
              value={Values.email}
              onChange={change}
              />
            </div>
            <div>
              <label className="text-sm mb-2 block">Password</label>
              <input name="password" type="password" className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-green-500" 
              placeholder="Enter password"
              required
              value={Values.password}
              onChange={change}
              />
            </div>
            <div>
              <label className="text-sm mb-2 block">Confirm Password</label>
              <input name="cpassword" type="password" className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-green-500" 
              placeholder="Enter confirm password"
              required
              value={Values.cpassword}
              onChange={change}
              />
            </div>
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-3 block text-sm">
                I accept the <a href="javascript:void(0);" className="text-green-800  font-semibold hover:underline ml-1">Terms and Conditions</a>
              </label>
            </div>
          </div>
          <div className="!mt-10">
            <button type="button" className="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-teal-900/90  hover:bg-teal-900 focus:outline-none"
            onClick={submit}
            >
              Create an account
            </button>
          </div>
          <p className="text-sm mt-6 text-center">Already have an account? <a href="javascript:void(0);" className="text-green-800 font-semibold hover:underline ml-1">
            <Link to={'/login'}>
              Login here
            </Link>
          </a></p>
        </form>
      </div>
    </div>
  )
}

export default SugnUp