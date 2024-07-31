import {React,useEffect, useState } from 'react'
import { useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios'
import Toast from '../Toast/Toast'


const Payement = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const plan = params.get('plan');
  const amount = params.get('amount');
  const pkg = params.get('type')
  const navigate = useNavigate();

  const headers = {
    id: localStorage.getItem('id'),
    authorization:  `Bearer ${localStorage.getItem('token')}`
  };

const [Profile, setProfile] = useState(null);
const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');
const [toast, setToast] = useState({ show: false, type: '', message: '' });

useEffect(() => {
  const fetch = async () => {
    try {
      const response = await axios.get('http://localhost:1000/user-information', { headers });
      console.log('userPayment', response);
      setProfile(response.data);
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };
  fetch();
}, []);

const closeToast = async() => {
  setToast({ show: false, type: '', message: '' });
  navigate('/profile');

};

// console.log("profile",Profile)
const handlePayment = ()=>{
  setToast({ show: true, type: 'success', message: 'Payment Successful' });
  

}

  return (
    <div className=' flex justify-center items-center min-h-screen bg-gray-100'>
        <div className="font-sans  w-full max-w-4xl p-4">
      <div className=" bg-white rounded-md border border-gray-300 p-5 ">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 inline-block border-b-[3px] border-gray-800 pb-1">Checkout</h2>
        </div>

        <div className="mt-12">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              
              <h3 className="text-xl font-bold text-gray-800 mt-1">Personal Details</h3>
            </div>

            <div className="md:col-span-2">
            {Profile ? (
                  <form>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Name"
                          value={Profile.username || ''}
                          className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                          readOnly
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Email address"
                          value={Profile.email || ''}
                          className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                          readOnly
                        />
                      </div>
                    </div>
                  </form>
                ) : (
                  <p>Loading...</p>
                )}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-12">
            <div>
              {/* <h3 className="text-3xl font-bold text-gray-300">02</h3> */}
              <h3 className="text-xl font-bold text-gray-800 mt-1">Ammount({plan})</h3>
              <p className="text-1xl  text-gray-500">{pkg}</p>
            </div>

            <div className="md:col-span-2">
              <form>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input type="text " value={amount} 
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                  </div>
                  {/* <div>
                    <input type="text" placeholder="City"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                  </div>
                  <div>
                    <input type="text" placeholder="State"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                  </div>
                  <div>
                    <input type="number" placeholder="Zip Code"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                  </div> */}
                </div>
              </form>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-12">
            <div>
              {/* <h3 className="text-3xl font-bold text-gray-300">03</h3> */}
              <h3 className="text-xl font-bold text-gray-800 mt-1">Payment method</h3>
            </div>

            <div className="md:col-span-2">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center">
                  <input
                        type="radio"
                        className="w-5 h-5 cursor-pointer"
                        id="card"
                        name="paymentMethod"
                        value="card"
                        checked={selectedPaymentMethod === 'card'}
                        onChange={() => setSelectedPaymentMethod('card')}
                      />
                  <label htmlFor="card" className="ml-4 flex gap-2 cursor-pointer">
                    <img src="https://readymadeui.com/images/visa.webp" className="w-12" alt="Visa" />
                    <img src="https://readymadeui.com/images/american-express.webp" className="w-12" alt="American Express" />
                    <img src="https://readymadeui.com/images/master.webp" className="w-12" alt="MasterCard" />
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                      type="radio"
                      className="w-5 h-5 cursor-pointer"
                      id="paypal"
                      name="paymentMethod"
                      value="paypal"
                      checked={selectedPaymentMethod === 'paypal'}
                      onChange={() => setSelectedPaymentMethod('paypal')}
                    />
                  <label htmlFor="paypal" className="ml-4 flex gap-2 cursor-pointer">
                    <img src="https://readymadeui.com/images/paypal.webp" className="w-20" alt="paypalCard" />
                  </label>
                </div>
              </div>

              <div className="grid sm:grid-cols-4 gap-4 mt-4">
                <div className="col-span-2">
                  <input type="number" placeholder="Card number"
                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" 
                    disabled={selectedPaymentMethod !== 'card'}
                  />
                </div>
                <div>
                  <input type="number" placeholder="EXP."
                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" 
                    disabled={selectedPaymentMethod !== 'card'}
                  />
                </div>
                <div>
                  <input type="number" placeholder="CVV"
                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" 
                    disabled={selectedPaymentMethod !== 'card'}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-end gap-4 mt-12">
            <button type="button"
              className="px-6 py-3 text-sm font-semibold tracking-wide bg-transparent border-2 text-gray-800 rounded-md hover:bg-gray-100">Pay later</button>
            <button type="button" onClick={handlePayment}
              className="px-6 py-3 text-sm font-semibold tracking-wide bg-blue-600 text-white rounded-md hover:bg-blue-700">Pay now
            </button>
            {toast.show && <Toast type={toast.type} message={toast.message} onClose={closeToast} />}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Payement