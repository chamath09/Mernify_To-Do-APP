import React, { useEffect, useState } from 'react';

const DateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-60 mx-auto p-2 border border-gray-300 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-white text-sm font-semibold text-center">
        {currentDateTime.toLocaleDateString()} {currentDateTime.toLocaleTimeString()}
      </h2>
    </div>
  );
};

export default DateTime;
