import React from 'react';

const ErrorMessage = ({ message }) => (
  <div className="text-center text-red-500 py-4">
    <p>{message}</p>
  </div>
);

export default ErrorMessage;
