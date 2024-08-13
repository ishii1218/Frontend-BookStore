import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BookCard from '../BookCard/BookCard'
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Favorites = () => {
  const [favouriteBooks,setFavouriteBoks] = useState([]);

  const headers = {
    id: localStorage.getItem('id'),
    authorization:  `Bearer ${localStorage.getItem('token')}` ,
    
};
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`${backendUrl}/getFavourites`,
         {headers}
      );
      setFavouriteBoks(response.data.data)
    };
    fetch();
  }, [favouriteBooks]);
  return (
    <div >
      <div >
        <h1 className='text-2xl text-[#08312a] text-center md:text-start items-center font-bold'>Favourite Books</h1>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 ml-5 md:ml-0 mr-5 mt-3'>
        {favouriteBooks.length === 0 &&  
        <div className='text-4xl'>No Favourite Books</div>}
        {favouriteBooks && favouriteBooks.map((items,i) => (
          <div key={i}>
            
          <BookCard data={items} favourite={true}/>
          </div>
        ))}
          
    </div>
   </div>
  )
}

export default Favorites