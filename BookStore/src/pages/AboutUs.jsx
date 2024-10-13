import React from 'react'
import BookImage from '../components/Images/Bookimage.jpg'

const AboutUs = () => {
  return (
    <div className='mt-12'>

        <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-70 before:z-10">
          <img src={BookImage} alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />

          <div className="min-h-[350px] relative z-40 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
            <h2 className="sm:text-4xl text-2xl font-bold mb-6">Explore the World of Books</h2>
            {/* <p className="sm:text-lg text-base text-center text-gray-200">Embark on unforgettable journeys. Book your dream vacation today!</p> */}

            <button
              type="button"
              className="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300">
              Subscribe Now
            </button>
          </div>
        </div>

      <div className="bg-green-50 p-8 min-h-[350px] flex flex-col items-center justify-center font-[sans-serif] text-[#333]">
            <h2 className="text-3xl font-bold mb-14 text-center">Bookify Metrics</h2>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 max-lg:gap-12">
              <div className="text-center">
                <h3 className="text-4xl font-extrabold">2<span className="text-blue-600">K+</span></h3>
                <p className="text-base font-bold mt-3">Total Users</p>
                <p className="text-sm text-gray-500 mt-2">The total number of registered users on the platform.</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-extrabold">500<span className="text-blue-600">+</span></h3>
                <p className="text-base font-bold mt-3">Curated Titles</p>
                <p className="text-sm text-gray-500 mt-2">Enjoy books carefully chosen by our expert team.</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-extrabold">98<span className="text-blue-600">%</span></h3>
                <p className="text-base font-bold mt-3">Customer Satisfaction</p>
                <p className="text-sm text-gray-500 mt-2">We're proud to deliver joy to our subscribers every month</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-extrabold">5<span className="text-blue-600">Star</span></h3>
                <p className="text-base font-bold mt-3">Rating </p>
                <p className="text-sm text-gray-500 mt-2">by 95% of Customers.</p>
              </div>
            </div>
      </div>

      <div className="grid sm:grid-cols-2 items-center gap-8 font-[sans-serif] max-w-5xl max-sm:max-w-sm mx-auto p-4">
      <div className="sm:h-[400px]">
        <img src="https://readymadeui.com/team-2.webp" className="w-full h-full object-contain" />
      </div>

      <div>
        <h3 className="text-xl font-extrabold text-gray-800">Tom Johnson – Chief Curator.</h3>
        <p className="mt-4 text-sm text-gray-800">With over 10 years of experience in the publishing industry, Tom leads our curation team, ensuring every book that reaches your door is a perfect match for your taste.</p>

        <div className="mt-8 text-left">
          <h4 className="text-base font-bold">Tom Johnson</h4>
          <p className="text-xs text-gray-500 mt-0.5">Tom@gmail.com</p>
        </div>

        <div className="space-x-3 mt-8">
          <a href="javascript:void(0)"
            className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 155.139 155.139">
              <path
                d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                data-original="#010002" />
            </svg>
          </a>
          <a href="javascript:void(0)"
            className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]">
            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
              <path
                d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                data-original="#03a9f4" />
            </svg>
          </a>
          <a href="javascript:void(0)"
            className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]">
            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 24 24">
              <path
                d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                data-original="#0077b5" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutUs