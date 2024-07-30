import React, { useEffect } from 'react';

const Toast = ({ type, message, onClose }) => {
   
  const iconDetails = {
    success: {
      color: 'text-green-500',
      bgColor: 'bg-green-100',
      darkBgColor: 'dark:bg-green-800',
      darkTextColor: 'dark:text-green-200',
      path: 'M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z',
      srText: 'Check icon',
    },
    error: {
      color: 'text-red-500',
      bgColor: 'bg-red-100',
      darkBgColor: 'dark:bg-red-800',
      darkTextColor: 'dark:text-red-200',
      path: 'M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z',
      srText: 'Error icon',
    },
    warning: {
      color: 'text-orange-500',
      bgColor: 'bg-orange-100',
      darkBgColor: 'dark:bg-orange-700',
      darkTextColor: 'dark:text-orange-200',
      path: 'M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z',
      srText: 'Warning icon',
    },
  };

  const icon = iconDetails[type] || iconDetails.success;

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-12 left-1/2 transform -translate-x-1/2 mt-4 ">
      <div className={`flex items-center w-full max-w-xs p-4 gap-2 px-6 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 ${icon.darkBgColor} ${icon.darkTextColor}`} role="alert">
        <div className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 ${icon.color} ${icon.bgColor} rounded-lg`}>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d={icon.path} />
          </svg>
          <span className="sr-only">{icon.srText}</span>
        </div>
        <div className="ms-3 text-sm font-normal">{message}</div>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          aria-label="Close"
          onClick={onClose}
        >
          <span className="sr-only">Close</span>
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;
