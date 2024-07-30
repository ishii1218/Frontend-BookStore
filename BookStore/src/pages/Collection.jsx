import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'; // Add this line to import Link
import Loader from '../components/Loader/Loader'
import axios from 'axios'
import { MdDelete } from "react-icons/md";


const Collection = () => {

  const [collection, setCollection] = useState();
  const [Total, setTotal] = useState(0);
  

  const headers = {
    id: localStorage.getItem('id'),
    authorization:  `Bearer ${localStorage.getItem('token')}` ,
    
};

const deleteOrder = async (bookId) => {
  await axios.delete(`http://localhost:1000/deleteOrder/${bookId}`, { headers });
};

const deleteItem = async (bookid) => {
  console.log('bookid',bookid)
  const response = await axios.put(
    `http://localhost:1000/deleteCart/${bookid}`,
    {},
    {headers}
  );
  alert(response.data.message)
  setCollection(collection.filter((item) => item._id !== bookid));
  deleteOrder(bookid);
};

const handleRead = async (Id) => {
  try {
    const res = await axios.put(`http://localhost:1000/updateOrderStatus/${Id}`,
      {status: 'Reading'},
      { headers },
      );
      console.log('res',res);
  } catch (err) {
    console.error('Failed to start reading', err);
  }
};

useEffect(() => {
  const fetch = async () => {
    const response = await axios.get("http://localhost:1000/getCollection", { headers });
    setCollection(response.data.data);
    
    
  };
  return () => fetch();
}, []);

// useEffect(() => {
//   const updateOrder = async () => {
//     if ( collection && collection.length > 0) {
//       // Clear existing orders
//       await axios.put(
//         'http://localhost:1000/clearOrders',
//         {},
//         { headers }
//       );

//       const orderData = collection.map(item => ({
//         book: item._id
//       }));

//       await axios.post(
//         'http://localhost:1000/addOrder',
//         { order: orderData },
//         { headers }
//       );
//     }
//   };

//   return () => updateOrder();
// }, [collection]);


  return (
    <div className='mt-10 bg-green-100 px-12  h-[100%] py-8'>
    {!collection && (
      <div className='flex items-center justify-center my-8'>
        <Loader />{""}
      </div>
      
    )}
    {collection && collection.length === 0 && (
      <div className='h-screen'>
        <div className='h-[100%] flex item-center justify-center flex-col'>
          <h1 className='text-5xl lg:text-6xl font-semibold text-gray-800/70'>
          No Books in Collection
          </h1>
          <img
            src='\Images\grocery-cart.png'
            alt='empty'
            className=' h-96 w-96 mt-8'
            
          />
        </div>
      </div>
    )}
    {collection && collection.length > 0 && (
      <div className=''>
        <h1 className='text-5xl lg:mx-10 font-semibold text-[#08312a] mb-8'>
          Your Collection
        </h1>
        {collection && collection.map((items, i) => (
          <div 
            className='mx-0 lg:mx-10  my-4 px-6 lg:px-12 gap-1 rounded flex flex-col md:flex-row p-4 bg-[#08312a] justify-between items-center'
            key={i}
            >
            <div className=' flex flex-col md:flex-row gap-3 items-center'>
              <img
                src={items.url}
                alt='/'
                className='h-[20vh] md:h-[10vh] object-cover'
              />
              <div className='w-full md:w-auto'>
                <h1 className='text-2xl font-semibold text-start mt-2 md:mt-0 text-white'>
                  {items.title}
                </h1>
                <p className='text-normal text-green-100 mt-2 hidden lg:block'>
                  {items.description.slice(0, 100)}...
                </p>
                <p className='text-normal text-green-100 mt-2 hidden md:block lg:hidden'>
                  {items.description.slice(0, 65)}...
                </p>
                <p className='text-normal text-green-100 mt-2 block md:hidden'>
                  {items.description.slice(0, 100)}...
                </p>
              </div>
            </div>
            <div className='flex gap-2 lg:gap-4'>
              <Link to={`/start-reading/${items._id}`} 
              className='bg-gray-900/90 text-white hover:text-green-200 hover:bg-gray-900/50 text-sm p-2 rounded-md'
              onClick={() => handleRead(items._id)}
              >
                Start Reading
              </Link>
              <button className='bg-green-100 text-red-900 p-1 rounded-sm h-8 w-8 flex items-center justify-center hover:bg-red-900 hover:text-white'

              onClick={() => deleteItem(items._id)}
              >
              <MdDelete />
              </button>
            </div>
          </div>
        ))}
      
      </div>
    )}
    
      
    </div>
    
  )
}

export default Collection