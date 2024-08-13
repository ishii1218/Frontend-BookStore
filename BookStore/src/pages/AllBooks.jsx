import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard/BookCard';
import Loader from '../components/Loader/Loader';
const backendUrl = import.meta.env.VITE_BACKEND_URL;
import {
MagnifyingGlassIcon
} from "@heroicons/react/24/solid";

const AllBooks = () => {
  const [data, setData] = useState([]);
  const [groupedBooks, setGroupedBooks] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`${backendUrl}/getAllBooks`);
        console.log(response);
        const books = response.data.data;
        setData(books);
        groupBooks(books);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    // Filter books based on the search query
    const filtered = data.filter(book =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(filtered);
    groupBooks(filtered);
  }, [searchQuery, data]);

  const groupBooks = (books) => {
    const grouped = books.reduce((acc, book) => {
      if (!acc[book.genre]) {
        acc[book.genre] = [];
      }
      acc[book.genre].push(book);
      return acc;
    }, {});
    setGroupedBooks(grouped);
  };

  return (
    <div className='bg-green-100 mt-10 py-10 px-10'>
      <div className='flex justify-between'>
        <div className='text-teal-900/95 text-lg font-bold text-start'>
          <h4></h4>
        </div>
        <div className='relative'>
          
          <input
            type='text'
            placeholder='Search for a book...'
            className=' w-[160px] md:w-80 px-4 py-2 border-none rounded-lg pl-10'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className='absolute top-0 left-0 mt-2 ml-3 text-gray-500'>
          <MagnifyingGlassIcon className='h-5 w-5' />
        </span>
        </div>
      </div>
      {!data.length && (
        <div className='flex items-center justify-center my-8'>
          <Loader />
        </div>
      )}
      <div className='my-4'>
        {filteredBooks.length > 0 ? (
          Object.keys(groupedBooks).map((genre, index) => (
            <div key={index}>
              <h2 className='text-xl font-semibold mt-6 mb-3'>{genre}</h2>
              <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                {groupedBooks[genre].map((book, i) => (
                  <div key={i}>
                    <BookCard data={book} />
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className='text-gray-600'>No books found for {searchQuery}.</p>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
