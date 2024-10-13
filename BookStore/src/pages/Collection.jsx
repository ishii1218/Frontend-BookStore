import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'; // Add this line to import Link
import Loader from '../components/Loader/Loader'
import axios from 'axios'
import { MdDelete, MdBook, MdPlayArrow, MdCheckCircle } from "react-icons/md";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
import GroceryCart from '../components/Images/grocery-cart.png'

const Collection = () => {

  const [collection, setCollection] = useState();
  const [Total, setTotal] = useState(0);
  

  const headers = {
    id: localStorage.getItem('id'),
    authorization:  `Bearer ${localStorage.getItem('token')}` ,
    
};

// Fetch order history
useEffect(() => {
  const fetchOrderHistory = async () => {
    try {
      const response = await axios.get(`${backendUrl}/getOrderHistory`, { headers });
      setCollection(response.data.orders);
      console.log('responseeee',response.data.orders)
    } catch (error) {
      console.error("Failed to fetch order history", error);
    }
  };

  fetchOrderHistory();
}, []);

const deleteOrder = async (bookId) => {
  await axios.delete(`${backendUrl}/deleteOrder/${bookId}`, { headers });
};

const deleteItem = async (bookid) => {
  console.log('bookid',bookid)
  const response = await axios.put(
    `${backendUrl}/deleteCart/${bookid}`,
    {},
    {headers}
  );
  alert(response.data.message)
  setCollection(collection.filter((item) => item._id !== bookid));
  deleteOrder(bookid);
};
console.log('collection',collection)

const handleRead = async (Id) => {
  try {
    const res = await axios.put(`${backendUrl}/updateOrderStatus/${Id}`,
      {status: 'Reading'},
      { headers },
      );
      console.log('res',res);
  } catch (err) {
    console.error('Failed to start reading', err);
  }
};

// useEffect(() => {
//   const fetch = async () => {
//     const response = await axios.get(`${backendUrl}/getCollection`, { headers });
//     setCollection(response.data.data);
//     console.log('response',response.data.data)
    
    
//   };
//   return () => fetch();
// }, []);

// useEffect(() => {
//   const updateOrder = async () => {
//     if ( collection && collection.length > 0) {
//       // Clear existing orders
//       await axios.put(
//         `${backendUrl}/clearOrders`,
//         {},
//         { headers }
//       );

//       const orderData = collection.map(item => ({
//         book: item._id
//       }));

//       await axios.post(
//         `${backendUrl}/addOrder`,
//         { order: orderData },
//         { headers }
//       );
//     }
//   };

//   return () => updateOrder();
// }, [collection]);


const getButtonContent = (status) => {
  switch (status) {
    case 'In Collection':
      return { text: 'Start Reading', icon: <MdBook className='h-4 w-4' /> };
    case 'Reading':
      return { text: 'Continue Reading', icon: <MdPlayArrow  className='h-3 w-3'/> };
    case 'Finished':
      return { text: 'Done', icon: <MdCheckCircle className='h-4 w-4'/> };
    default:
      return { text: 'Unknown', icon: <MdBook className='h-4 w-4' /> };
  }
};

const getButtonStyles = (status) => {
  switch (status) {
    case 'In Collection':
      return 'bg-gray-500/90 text-black hover:bg-gray-700/50 hover:text-white';
    case 'Reading':
      return 'bg-blue-200/90 justify-center text-[#08312a] hover:bg-blue-900 hover:text-white';
    case 'Finished':
      return 'bg-green-400/90 text-[#08312a] hover:bg-green-900 hover:text-gray-200';
    default:
      return 'bg-green-200/90 text-black hover:bg-green-900 hover:text-green-200';
  }
};

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
            src={GroceryCart}
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
                src={items.book.url}
                alt='/'
                className='h-[20vh] md:h-[10vh] object-cover'
              />
              <div className='w-full md:w-auto'>
                <h1 className='text-2xl font-semibold text-start mt-2 md:mt-0 text-white'>
                  {items.book.title}
                </h1>
                <p className='text-normal text-green-100 mt-2 hidden lg:block'>
                  {items.book.description.slice(0, 100)}...
                </p>
                <p className='text-normal text-green-100 mt-2 hidden md:block lg:hidden'>
                  {items.book.description.slice(0, 65)}...
                </p>
                <p className='text-normal text-green-100 mt-2 block md:hidden'>
                  {items.book.description.slice(0, 100)}...
                </p>
              </div>
            </div>
            <div className='flex gap-2 lg:gap-4'>
              <Link to={`/start-reading/${items.book._id}`} 
              className={`${getButtonStyles(items.status)} w-[130px] lg:w-[150px] font-bold flex items-center justify-center text-[12px] lg:text-sm p-1 rounded-md gap-1`}
              onClick={() => handleRead(items.book._id)}
              >
                {getButtonContent(items.status).icon} {getButtonContent(items.status).text}
              </Link>
              <button className='bg-green-100 text-red-900 p-1 rounded-sm h-8 w-8 flex items-center justify-center hover:bg-red-900 hover:text-white'

              onClick={() => deleteItem(items.book._id)}
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