import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [themeColor, setThemeColor] = useState('hsl(241, 84%, 64%)'); // Default theme color

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
    } else {
      setDisplay(display + value);
    }
  };

  const changeTheme = (color) => {
    setThemeColor(color);
  };

  return (
    <div className="calculator-container">
      <div className="header">
        <h1>CalcU</h1>
        <div className="theme-buttons">
          <button onClick={() => changeTheme('hsl(241, 84%, 64%)')} style={{ background: 'hsl(241, 84%, 64%)' }}>Theme 1</button>
          <button onClick={() => changeTheme('hsl(120, 60%, 50%)')} style={{ background: 'hsl(120, 60%, 50%)' }}>Theme 2</button>
          <button onClick={() => changeTheme('hsl(0, 80%, 60%)')} style={{ background: 'hsl(0, 80%, 60%)' }}>Theme 3</button>
        </div>
      </div>
      <div className="calculator" style={{ borderColor: themeColor }}>
        <div className="display-container">
          <Display value={display} />
        </div>
        <div className="buttons-container">
          <div className="buttons">
            {['7', '8', '9', '/'].map(val => (
              <Button key={val} value={val} onClick={() => handleClick(val)} themeColor={themeColor} />
            ))}
            {['4', '5', '6', '*'].map(val => (
              <Button key={val} value={val} onClick={() => handleClick(val)} themeColor={themeColor} />
            ))}
            {['1', '2', '3', '-'].map(val => (
              <Button key={val} value={val} onClick={() => handleClick(val)} themeColor={themeColor} />
            ))}
            {['0', '.', '=', '+'].map(val => (
              <Button key={val} value={val} onClick={() => handleClick(val)} themeColor={themeColor} />
            ))}
            <Button className="clear" value="C" onClick={() => handleClick('C')} themeColor={themeColor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;