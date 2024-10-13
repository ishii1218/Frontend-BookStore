import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { GrLanguage } from 'react-icons/gr';
import Loader from '../Loader/Loader';
import { FaHeart } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import { useSelector } from 'react-redux';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Toast from '../Toast/Toast';
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const BookDetails = () => {
    const [Data, setData] = useState();
    const navigate = useNavigate();
    const [toast, setToast] = useState({ show: false, type: '', message: '' });

    const { id } = useParams();
    console.log('id', id);

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const role = useSelector((state) => state.auth.role);

    

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(
                `${backendUrl}/getBookById/${id}`
            );
            console.log('bookdetails', response);
            setData(response.data.data);
        };
        fetch();
    }, [id]);

    const headers = {
        id: localStorage.getItem('id'),
        authorization:  `Bearer ${localStorage.getItem('token')}` ,
        bookid:id,
    };
    const handleFavorite = async () => {
        const response = await axios.put(
           `${backendUrl}/addFavourite`,{},{headers}
        );
        setToast({ show: true, type: 'success', message: response.data.message });
        
        // alert(response.data.message);
    };
    const handleCollection = async () => {
        const response = await axios.put(
           `${backendUrl}/addToCart`,{},{headers}
        );
        setToast({ show: true, type: 'success', message: response.data.message });
        // alert(response.data.message);
        console.log('response',response);


        await axios.post(
            `${backendUrl}/updateOrder`, {},

            { headers }
        );
    }

    const deleteBook = async () => {
        const response = await axios.delete(
           `${backendUrl}/deleteBook`,{headers}
        );
        // setToast({ show: true, type: 'success', message: response.data.message });
        alert(response.data.message);
        navigate('/allbooks');
    };

    const closeToast = () => {
        setToast({ show: false, type: '', message: '' });
      };

    return (
        <>
            {Data ? (
                <div className=' md:px-10 py-8 lg:flex-row flex-col flex bg-green-100 item-start lg:gap-6 '>
                    <div className='m-5 md:mb-0 lg:ml-0 lg:mr-0 mt-14 lg:w-[80vh]'>
                      <div className=' flex-col lg:flex-row bg-gray-900/80 flex justify-around  p-10 lg:p-10 lg:pr-0 px-32 rounded'>
                            <img src={Data.url} alt="/" 
                            className='lg:h-[70vh] md:h-[70vh] h-[50vh] rounded ' />
                            {isLoggedIn && role === 'user' && (
                                <div className='flex flex-row lg:flex-col item-center justify-between lg:justify-start lg:m-0 lg:mt-2 lg:ml-0 gap-2 lg:gap-0'>
                                    <button className=' lg:rounded-full rounded-sm text-2xl flex item-center justify-center lg:text-3xl p-2 mt-4 lg:mt-0 text-red-900 bg-green-100'
                                    onClick={handleFavorite}>
                                        <FaHeart />
                                        <span className='text-black  text-[24px] ms-2 block lg:hidden '>Favorites</span>
                                        </button>
                                        {toast.show && <Toast type={toast.type} message={toast.message} onClose={closeToast} />}
                                    <button className='bg-green-100 rounded-sm lg:rounded-full item-center flex text-2xl mt-4 lg:text-3xl p-2 lg:mt-4 text-gray-900'
                                    onClick={handleCollection}>
                                        <SiBookstack />
                                        <span className='text-black text-[22px] ms-2 block lg:hidden '>Add to collection</span>
                                        </button>
                                        {toast.show && <Toast type={toast.type} message={toast.message} onClose={closeToast} />}

                                </div>
                            )}

                            {isLoggedIn && role === 'admin' && (
                                <div className='flex flex-row lg:flex-col justify-between lg:justify-start lg:m-0 lg:mt-2 lg:ml-0 gap-2 lg:gap-0'>
                                    
                                    <Link to={`/update-book/${id}`} className='items-center lg:rounded-full rounded-sm flex justify-center text-3xl p-1 md:p-2 mt-4 lg:mt-0 text-black bg-green-100'>
                                        <FaEdit />
                                        <span className='text-black  text-[20px]  md:text-[22px] ms-2 block lg:hidden '>Edit Book</span>
                                    </Link>
                                    
                                    <button className='bg-green-100 items-center rounded-sm lg:rounded-full justify-center flex mt-4 text-3xl p-1 lg:p-2 md:mt-4 text-red-900'
                                        onClick={deleteBook}
                                    >
                                        <MdDelete />
                                        <span className='text-black text-[20px]  md:text-[22px] ms-2 block lg:hidden '>Delete Book</span>
                                    </button>
                                    {toast.show && <Toast type={toast.type} message={toast.message} onClose={closeToast} />}
                                </div>
                            )}
                       </div>
                   </div> 
                   
                      <div className='lg:mt-12 mt-4 p-4 w-full lg:w-3/6'>
                          <h1 className='text-3xl font-bold text-teal-900/95'>{Data.title}</h1>
                          <p className='text-xl my-3 font-bold text-black'>by {Data.author}</p>
                          <p className='text-xl my-3 font-bold text-black'><strong>Genre: </strong> {Data.genre}</p>
                          <p className='text-lg text-gray-800'>{Data.description}</p>
                          <p className='text-lg text-gray-900 items-center flex mt-4'>
                              <GrLanguage className='mr-2' />{Data.language}
                          </p>
                      </div>
                      
                </div>
            ) : (
                <div className='flex h-screen bg-green-100 items-center justify-center my-8'>
                    <Loader />{""}
                </div>
            )}
        </>
    );
};

export default BookDetails;
