import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SpeakerWaveIcon, CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/24/solid';
import { Popover, Dialog } from '@headlessui/react';
import axios from 'axios';

const headers = {
  id: localStorage.getItem('id'),
  authorization: `Bearer ${localStorage.getItem('token')}`,
};

const StartReading = () => {
  const { id } = useParams();
  const [isPremium, setIsPremium] = useState(false);
  const [isFinishedModalOpen, setIsFinishedModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [bookDetails, setBookDetails] = useState({ title: '', author: '', description: '' });

  useEffect(() => {
    // Fetch user profile to check if the user is a premium member
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:1000/user-information', { headers });
        console.log('user profile', response.data);
        setIsPremium(response.data.isPremium);
      } catch (error) {
        console.error('Failed to fetch user profile', error);
      }
    };

    // Fetch book details
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:1000/getBookById/${id}`, { headers });
        console.log('book details', response.data);
        setBookDetails(response.data.data);
      } catch (error) {
        console.error('Failed to fetch book details', error);
      }
    };

    fetchProfile();
    fetchBookDetails();
  }, [id]);

  const handleFinishReading = async () => {
    try {
      const res = await axios.put(
        `http://localhost:1000/updateOrderStatus/${id}`,
        { status: 'Finished' },
        { headers }
      );
      console.log('res', res);
      setIsFinishedModalOpen(true);
    } catch (err) {
      console.error('Failed to finish reading', err);
    }
  };

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="mt-12 bg-green-100">
      <div className="p-4 pb-20">
        <div className="text-start pl-6 pt-4">
          <h1 className="text-3xl font-bold text-green-900">Read <medium className='text-[#08312a]'>{bookDetails.title}</medium></h1>
          <h2 className="text-xl text-green-900 mt-2">by <medium className='font-bold text-[#08312a]'>{bookDetails.author}</medium> </h2>
        </div>
        <div className="w-4/5 md:w-3/5 mx-auto p-5 bg-white shadow-lg rounded-lg mt-6">
          <iframe
            src='https://drive.google.com/file/d/1CB_Jee2ktPTXesZ3RwlNgfP5bUZ3CEMN/preview'
            className="w-full h-[550px] border"
          />
          <p className="mt-4 text-gray-700">{bookDetails.description}</p>
          <div className="flex justify-between space-x-4 mt-4">
            {isPremium ? (
              <button
                className="bg-blue-800 text-white p-4 md:text-[18px] lg:px-10 rounded-md hover:bg-blue-900 flex items-center"
                onClick={() => console.log('Play audiobook')}
              >
                <SpeakerWaveIcon className="h-5 w-5 mr-2" />
                Listen to Audiobook
              </button>
            ) : (
              <Popover className="relative">
                <Popover.Button className="bg-blue-900 text-white md:text-[18px] p-4 px-2 lg:px-8 rounded-md hover:bg-blue-700 flex items-center">
                  <SpeakerWaveIcon className="h-5 w-5 mr-2" />
                  Listen to Audiobook
                </Popover.Button>
                <Popover.Panel className="absolute z-10 mt-2 bg-white p-3 border rounded shadow-md w-72">
                  <div className="flex items-start">
                    <InformationCircleIcon className="h-6 w-6 text-blue-500 mr-2" />
                    <div>
                      <p className="text-gray-800">Subscribe for Premium to access the audiobook.</p>
                      <Link to="/" className="text-blue-600 underline">
                        Get Premium
                      </Link>
                    </div>
                  </div>
                </Popover.Panel>
              </Popover>
            )}
            <button
              className="bg-green-900 flex items-center text-white md:text-[18px] p-4 lg:px-20 rounded-md hover:bg-green-700"
              onClick={handleFinishReading}
            >
              <CheckCircleIcon className="h-5 w-5 mr-2" />
              Finish Reading
            </button>
          </div>
        </div>
      </div>
      <Dialog open={isFinishedModalOpen} onClose={() => setIsFinishedModalOpen(false)}>
        <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center">
          <Dialog.Panel className="bg-white p-6 rounded-md shadow-md max-w-md w-full">
            <div className="flex items-center mb-4">
              <CheckCircleIcon className="h-8 w-8 text-green-500 mr-2" />
              <Dialog.Title className="text-xl font-semibold">
                Congratulations!
              </Dialog.Title>
            </div>
            <Dialog.Description>
              You've finished reading the book. Please rate the book.
            </Dialog.Description>
            <div className="flex space-x-2 mt-4">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`h-8 w-8 cursor-pointer ${
                    index < rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  onClick={() => handleStarClick(index)}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.816a1 1 0 00.95.69h5.065c.969 0 1.371 1.24.588 1.81l-4.096 2.978a1 1 0 00-.364 1.118l1.562 4.816c.3.921-.755 1.688-1.541 1.118l-4.096-2.978a1 1 0 00-1.175 0l-4.096 2.978c-.786.57-1.841-.197-1.541-1.118l1.562-4.816a1 1 0 00-.364-1.118L.14 9.243c-.784-.57-.38-1.81.588-1.81h5.065a1 1 0 00.95-.69l1.562-4.816z" />
                </svg>
              ))}
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
                onClick={() => setIsFinishedModalOpen(false)}
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default StartReading;
