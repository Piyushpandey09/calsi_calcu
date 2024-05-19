import React from 'react';
import './Button.css';

const Button = ({ value, onClick, themeColor }) => {
  return (
    <button onClick={() => onClick(value)} style={{ background: themeColor }}>
      {value}
    </button>
  );
};

export default Button;