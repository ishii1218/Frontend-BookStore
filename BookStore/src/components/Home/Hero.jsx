// import React from 'react'
import { Link } from "react-router-dom";

const Hero = () => {
    return (
      <div>
        <section
          className="lg:items-center mt-12  mx-auto flex-col lg-flex relative dark:bg-gray-900"
          style={{
            backgroundImage: "url('Images/Bookimage.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '65vh',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-65"></div>
          <div className="relative py-12 px-4 mx-auto max-w-screen-xl text-center items-center py-16 px-12">
            <a
              href="/new-books"
              className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              role="alert"
            >
              <span className="text-xs bg-teal-900/95 hover:bg-teal-900 hover:text-white rounded-full text-green-100 px-4 py-1.5 mr-3">New</span>{' '}
              <span className="text-sm font-medium">Bookify, New Arrivals</span>
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-green-200 lg:text-5xl dark:text-white">
              We invest in the world’s potential
            </h1>
            <p className="mb-8 text-lg font-normal text-green-100/70 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value
              and drive economic growth.
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link 
                to="/all-books"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:text-green-100 hover:bg-gray-900/80 "
              >
                Discover more
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
             
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  export default Hero
  