import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BookCard from '../BookCard/BookCard';
import Loader from '../Loader/Loader';
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const RecentlyAdded = () => {

  const [Data,setData] = useState();

  useEffect(() => {
      const fetch = async () => {
          const response = await axios.get(
              `${backendUrl}/getRecentBooks`
          );
          console.log(response);
          setData(response.data.data);
          
      };
      fetch();
  }, []);


  return (
    <div className='mt-6 px-4'>
        <div className='text-teal-900/95 text-lg font-bold text-center'><h4>Recently Added Books</h4>
        {!Data && (
          <div className='flex items-center justify-center my-8'>
            <Loader />{""}
            </div>
          
          )}

             <div className='mt-4  grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5  gap-4'>
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

export default RecentlyAdded