import React from 'react';
import './errorMessage.scss';

const ErrorMessage = ({ errorType, errorMessage }) => {
  return <p className="errorMessage">{errorMessage}</p>;
};

export default ErrorMessage;
