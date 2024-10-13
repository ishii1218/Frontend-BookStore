import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../components/Loader/Loader';
import { Link } from 'react-router-dom';
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const BookStatus = () => {
    const [data, setData] = useState([]);
    const headers = {
        id: localStorage.getItem('id'),
        authorization: `Bearer ${localStorage.getItem('token')}`,
    };

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get(`${backendUrl}/getAllOrders`, { headers });
                console.log('bookstatus', response.data.data);
                setData(response.data.data);
            } catch (error) {
                console.error('Failed to fetch book status', error);
            }
        };
        fetch();
    }, []);

    const groupByUser = (data) => {
        return data.reduce((acc, item) => {
            if (!acc[item.user.username]) {
                acc[item.user.username] = [];
            }
            acc[item.user.username].push(item);
            return acc;
        }, {});
    };

    const groupedData = groupByUser(data);

    return (
        <>
            {!data && (
                <div className='h-[100%] flex items-center justify-center'>
                    {" "}
                    <Loader />{" "}
                </div>
            )}
            {data && data.length > 0 && (
                <div className='h-[100%] p-0 md:p-4 mb-10 text-green-200'>
                    <h1 className='text-3xl md:text-4xl font-semibold text-[#08312a] mb-3'>
                        Status of Users Books
                    </h1>
                    <div className='mt- mb-1 bg-[#08312a] w-full rounded-b-none rounded py-2 px-4 flex gap-2'>
                        <div className='w-[20%]'>
                            <h1 className=''>User</h1>
                        </div>
                        <div className='w-[50%] md:w-[30%]'>
                            <h1 className=''>Book</h1>
                        </div>
                        <div className='w-0 md:w-[45%] hidden md:block'>
                            <h1 className=''>Description</h1>
                        </div>
                        <div className='w-[30%] md:w-[16%]'>
                            <h1 className=''>Status</h1>
                        </div>
                    </div>

                    {Object.keys(groupedData).map((username, idx) => (
                        <React.Fragment key={idx}>
                            {groupedData[username].map((item, i) => (
                                <div
                                    key={i}
                                    className={`w-full py-2 px-4 flex gap-2 cursor-pointer bg-[#08312a] ${i === groupedData[username].length - 1 ? ' border-b-2 border-green-200' : ''}`}
                                >
                                    <div className='w-[20%]'>
                                        {i === 0 && <h1 className=''>{item.user.username}</h1>}
                                    </div>
                                    <div className='w-[50%] md:w-[30%]'>
                                        <Link to={`/book-details/${item.book._id}`} className='hover:text-green-600'>
                                            <h1 className=''>{item.book.title}</h1>
                                        </Link>
                                    </div>
                                    <div className='w-0 md:w-[45%] hidden md:block'>
                                        <h1 className=''>{item.book.description.slice(0, 35)}...</h1>
                                    </div>
                                    <div className='w-[30%] md:w-[18%]'>
                                        <h1 className=''>
                                            <button className=''>
                                                {item.status === 'In Collection' ? (
                                                    <div className='text-green-200 p-1 md:p-0 lg:p-2 rounded bg-gray-900'>{item.status}</div>
                                                ) : item.status === 'Reading' ? (
                                                    <div className='text-black p-1 lg:p-2 rounded bg-green-600'>{item.status}</div>
                                                ) : (
                                                    <div className='text-white rounded p-1 lg:p-2 bg-red-900'>{item.status}</div>
                                                )}
                                            </button>
                                        </h1>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            )}
        </>
    );
};

export default BookStatus;
