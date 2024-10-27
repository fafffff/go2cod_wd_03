import React, { useState } from 'react';
import './Calculator.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isNightMode, setIsNightMode] = useState(false);

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      // Replace trigonometric functions for evaluation
      const formattedInput = input
        .replace(/sin/g, 'Math.sin')
        .replace(/cos/g, 'Math.cos')
        .replace(/tan/g, 'Math.tan')
        .replace(/π/g, 'Math.PI'); // Replace π with Math.PI

      const calculatedResult = eval(formattedInput);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleToggleNightMode = () => {
    setIsNightMode((prev) => !prev);
  };

  return (
    <div className={`calculator-app ${isNightMode ? 'night-mode' : ''}`}>
      <header className="header fixed-top">
        <h3>Scientific Calculator</h3>
        <button onClick={handleToggleNightMode} className="night-mode-toggle">
          {isNightMode ? (
            <i className="fas fa-sun"></i> // Sun icon for day mode
          ) : (
            <i className="fas fa-moon"></i> // Moon icon for night mode
          )}
        </button>
      </header>
      <div className="calculator-container mt-5 pb-2 mb-0">
        <div className="calculator-display">
          <input type="text" value={input}  />
          <div className="result">{result}</div>
        </div>
        <div className="button-grid">
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')}>+</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')}>*</button>
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleClick('/')}>/</button>
          <button onClick={() => handleClick('sin(')}>sin</button>
          <button onClick={() => handleClick('cos(')}>cos</button>
          <button onClick={() => handleClick('tan(')}>tan</button>
          <button onClick={() => handleClick('π')}>π</button>
          <button onClick={() => handleClick(')')}>)</button>
        </div>
      </div>
      <footer className="footer fixed-bottom mt-5">
        <p>Calculator Footer Content</p>
      </footer>
    </div>
  );
};

export default Calculator;
