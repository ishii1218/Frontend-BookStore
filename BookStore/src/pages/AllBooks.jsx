import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import BookCard from '../components/BookCard/BookCard'
import Loader from '../components/Loader/Loader'

const AllBooks = () => {

  const [Data,setData] = useState();
  const [groupedBooks, setGroupedBooks] = useState({});

  useEffect(() => {
      const fetch = async () => {
          const response = await axios.get(
              'http://localhost:1000/getAllBooks'
          );
          console.log(response);
          const books = response.data.data;
          setData(books);

          const grouped = books.reduce((acc, book) => {
            if (!acc[book.genre]) {
              acc[book.genre] = [];
            }
            acc[book.genre].push(book);
            return acc;
          }, {});
          setGroupedBooks(grouped);
          
      };
      fetch();
  }, []);
  return (
    <div className='bg-green-100 mt-10 py-10 px-10'>
    <div className='text-teal-900/95 text-lg font-bold text-start'><h4>All Books</h4>
    {!Data && (
      <div className='flex items-center justify-center my-8'>
        <Loader />{""}
        </div>
      
      )}

      <div className='my-4'>
          {Data &&
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
            ))}
        </div>

    </div>
</div>
  )
}

export default AllBooks