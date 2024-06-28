/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import axios from 'axios';
import { Link  } from 'react-router-dom';

const BookCard = ({data,favourite }) => {
    // console.log('bookcardData',data);
    
    const headers = {
      id: localStorage.getItem('id'),
      authorization:`Bearer ${localStorage.getItem('token')}` ,
      bookid:data._id,
      
  };

  
  
    const handleRemoneFavourite = async () => {
      const response = await axios.put("http://localhost:1000/deleteFavourite",
        {},
        {headers}
      );
      window.location.reload(false)
      alert(response.data.message);
      
      
      
    };

  return (
    <>
    
    <div className='bg-gray-800 rounded p-2'>
      <Link to={`/book-details/${data._id}`}>
        <div className='flex justify-center '>
            <img src={data.url} alt="/" className='w-48 h-64 ' />
        </div>
      </Link>
        <div className='text-white text-center mt-2'>
            <h4 className='text-green-100 font-bold text-lg'>{data.title}</h4>
            <p className='text-sm'>by {data.author}</p>
            {/* <p className='text-sm'>{data.price}</p> */}
            
            {favourite && (
              <button className='bg-teal-900/95 hover:bg-teal-800/80 hover:text-white text-green-100  mt-2 p-2 rounded-md'
              onClick={handleRemoneFavourite}
            >
              Remove From Favorites</button>
            )}
        </div>
        

    </div>
   

    </>
  )
}

export default BookCard