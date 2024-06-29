import React from 'react'

const Pricing = () => {
  return (
    <div>
<div className="font-[sans-serif] bg-green-50 px-4 py-8">
      <div className="max-w-5xl max-lg:max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Choose a Subscription</h2>
          <p className="text-sm text-gray-500">choose a plan tailored to your needs</p>
        </div>

        <div className="flex mx-auto bg-white rounded-full max-w-[300px] p-1 mt-6">
          <button className="w-full text-sm bg-[#08312a]  text-white py-2 px-4 tracking-wide rounded-full">
            Monthly</button>
          <button
            className="w-full text-sm bg-transparent text-gray-800 py-2 px-4 tracking-wide rounded-full">
            Yearly</button>
        </div>

        <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-6 max-sm:max-w-sm max-sm:mx-auto mt-12">

          <div className="bg-white shadow rounded-3xl p-6 hover:scale-105 transition-all duration-300">
            <h4 className="text-gray-800 text-lg mb-3">Basic</h4>
            <h3 className="text-4xl font-semibold ">$4.50<sub className="text-gray-500 font-medium text-sm ml-1">/ month</sub></h3>

            <hr className="my-6 border-gray-300" />

            <div>
              <ul className="space-y-4">
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="mr-3 bg-teal-100 fill-teal-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  50 Image generations
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="mr-3 bg-teal-100 fill-teal-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  500 Credits
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="mr-3 bg-teal-100 fill-teal-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Monthly 100 Credits Free
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="mr-3 bg-teal-100 fill-teal-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Customer Support
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="mr-3 bg-teal-100 fill-teal-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Dedicated Server
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="mr-3 bg-teal-100 fill-teal-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Priority Generations
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="mr-3 bg-teal-100 fill-teal-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  50GB Cloud Storage
                </li>
              </ul>

              <button type="button" className="w-full mt-6 px-4 py-2 text-sm tracking-wide bg-[#08312a] hover:bg-teal-900 text-white rounded-xl">Get Started</button>
            </div>
          </div>

          <div className="bg-white shadow rounded-3xl p-6 hover:scale-105 transition-all duration-300">
            <h4 className="text-gray-800 text-lg mb-3">Startup</h4>
            <h3 className="text-4xl font-semibold ">$14.50<sub className="text-gray-500 font-medium text-sm ml-1">/ month</sub></h3>

            <hr className="my-6 border-gray-300" />

            <div>
              <ul className="space-y-4">
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="mr-3 bg-teal-100 fill-teal-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  200 Image generations
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="mr-3 bg-teal-100 fill-teal-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  1200 Credits
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="mr-3 bg-teal-100 fill-teal-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Monthly 1000 Credits Free
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="mr-3 bg-teal-100 fill-teal-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Customer Support
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="mr-3 bg-teal-100 fill-teal-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Dedicated Server
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="mr-3 bg-teal-100 fill-teal-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Priority Generations
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="mr-3 bg-teal-100 fill-teal-600 rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  150GB Cloud Storage
                </li>
              </ul>
              <button type="button" className="w-full mt-6 px-4 py-2 text-sm tracking-wide bg-[#08312a] hover:bg-teal-900 text-white rounded-xl">Get Started</button>
            </div>
          </div>

          
          
        </div>
      </div>
    </div>


    </div>
  )
}

export default Pricing