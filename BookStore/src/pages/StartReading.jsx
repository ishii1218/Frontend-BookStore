import React from 'react';
import { Document, Page } from 'react-pdf';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const headers = {
  id: localStorage.getItem('id'),
  authorization:  `Bearer ${localStorage.getItem('token')}` ,
};


const StartReading = () => {
  const {id}= useParams();

  const handleFinishReading = async () => {
    try {
      const res = await axios.put(`http://localhost:1000/updateOrderStatus/${id}`,
        {status: 'Finished'},
        { headers },
        );
        console.log('res',res);
    } catch (err) {
      console.error('Failed to start reading', err);
    }
  };

//  const pdfURL = '/Pdf/pdf book.pdf';
  return (
    <div className='mt-12 bg-green-100'>
    <div className='p-4 '>
      <h1 className='text-start pl-6 font-bold pt-4 text-2xl'>Start Reading</h1>
      <div className='w-3/5 mx-auto p-5 '>
        <iframe src='https://drive.google.com/file/d/1CB_Jee2ktPTXesZ3RwlNgfP5bUZ3CEMN/preview' className='w-full h-[550px]' />
      </div>


        {/* <div>
            <Document file={pdfURL}>
            <Page pageNumber={1} />
            </Document>
        </div> */}
      <button
        className='bg-green-500 text-white p-2 rounded-md hover:bg-green-700'
        onClick={handleFinishReading}
        >
          Finish reading
      </button>
    </div>
    </div>
  );
};

export default StartReading;
