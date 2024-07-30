import React from 'react'
import auth from '../store/auth'
import { useState } from 'react';
import axios from 'axios';


const AddBook = () => {
    const [data, setData] = useState({
        url: '',
        title: '',
        author: '',
        genre: '',
        description: '',
        language: '',
    });
    const headers = {
        id: localStorage.getItem('id'),
        authorization:  `Bearer ${localStorage.getItem('token')}` ,   
    };
    const change =(e) =>{
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value,
        });
    }
    const handleSubmit = async () => {
       try{
        console.log('bookdetails',data)
            if(data.url === '' || 
                data.title === '' || 
                data.author === '' || 
                data.genre === '' || 
                data.description === '' || 
                data.language === ''
            ){
                alert('Please fill all the fields');
            } else{
                const response = await axios.post(
                    'http://localhost:1000/addBook', 
                    data, 
                    {headers}
                );
                
                setData({
                    url: '',
                    title: '',
                    author: '',
                    genre: '',
                    description: '',
                    language: '',
                });
                alert(response.data.message);
            } 
        }catch (error) {
        alert(error.response.data.message);
        }
    }


  return (
    <div className='h-[100%] lg:mr-10 p-0 md:p-10 md:pl-0 md:pt-0'>
        <h1 className='text-3xl md:text-4xl font-semibold text-[#08312a] mb-3'>
            Add a Book
        </h1>
        <div className='p-4 px-8 pt-3 bg-[#08312a] rounded'>
            <div>
                <label htmlFor='url' className='text-green-100'>Image URL</label>
                <input
                    type='text'
                    name='url'
                    value={data.url}
                    onChange={change}
                    placeholder='Enter Image URL'
                    className='w-full mt-1 p-1  outline-none border bg-green-100 text-gray-900 border-gray-300 rounded-sm'
                />
            </div>
            
            <div className='mt-3'>
                <label htmlFor='title' className='text-green-100'>Book Title</label>
                <input
                    type='text'
                    name='title'
                    value={data.title}
                    onChange={change}
                    placeholder='Enter Title'
                    className='w-full mt-1 p-1 outline-none border bg-green-100 text-gray-900 border-gray-300 rounded-sm'
                />
            </div>
            <div className='mt-3'>
                <label htmlFor='author' className='text-green-100'>Author</label>
                <input
                    type='text'
                    name='author'
                    value={data.author}
                    onChange={change}
                    placeholder='Enter Author'
                    className='w-full mt-1 p-1 outline-none border bg-green-100 text-gray-900 border-gray-300 rounded-sm'
                />
            </div>
            <div className='mt-3 flex gap-4'>
                <div >
                <label htmlFor='genre' className='text-green-100'>Genre</label>
                <select
                    id="genre"
                    name="genre"
                    value={data.genre}
                    className="w-full mt-1 p-1.5 border bg-green-100 text-gray-900 border-gray-300 rounded-sm outline-none"
                    onChange={change}
                >
                    <option value="">Choose a genre</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Novel">Novel</option>
                    <option value="Science">Science</option>
                </select>
                </div>
                <div className='w-3/6'>
                    <label htmlFor='language' className='text-green-100'>Language</label>
                    <input
                        type='text'
                        name='language'
                        value={data.language}
                        onChange={change}
                        required
                        placeholder='Enter Language'
                        className='w-full mt-1 p-1 outline-none border bg-green-100 text-gray-900 border-gray-300 rounded-sm'
                    />
                </div>
            </div>
            <div className='mt-3'>
                <label htmlFor='description' className='text-green-100'>Description</label>
                <textarea
                    name='description'
                    value={data.description}
                    onChange={change}
                    required
                    placeholder='Enter Description'
                    className='w-full mt-1 p-1 outline-none border bg-green-100 text-gray-900 border-gray-300 rounded-sm'
                />
            </div>
            <button 
                className='bg-[#096354] text-white px-3 py-1 font-semibold hover:text-green-200 hover:bg-[#0c493f] rounded-md mt-2'
                onClick={handleSubmit}
            >
                Add Book
            </button>
        </div>
    </div>
  )
}

export default AddBook