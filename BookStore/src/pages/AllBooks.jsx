import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import BookCard from '../components/BookCard/BookCard'
import Loader from '../components/Loader/Loader'

const AllBooks = () => {

  const [Data,setData] = useState();

  useEffect(() => {
      const fetch = async () => {
          const response = await axios.get(
              'http://localhost:1000/getAllBooks'
          );
          console.log(response);
          setData(response.data.data);
          
      };
      fetch();
  }, []);
  return (
    <div className='bg-green-100 mt-10 py-10 px-10'>
    <div className='text-teal-900/95 text-lg font-bold text-center'><h4>All Books</h4>
    {!Data && (
      <div className='flex items-center justify-center my-8'>
        <Loader />{""}
        </div>
      
      )}

         <div className='my-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4'>
          {Data && Data.map((items,i) => 
          <div key={i}>
            <BookCard data={items} />{" "}
              
          </div>
          )}

         </div>

    </div>
</div>
  )
}

export default AllBooks