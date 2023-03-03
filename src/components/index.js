import React, { useState } from 'react';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  function handleDigitPress(digit) {
    if (displayValue === '0') {
      setDisplayValue(digit.toString());
    } else {
      setDisplayValue(displayValue + digit.toString());
    }
  }

  function handleOperatorPress(nextOperator) {
    const inputValue = parseFloat(displayValue);

    if (operator === null) {
      setPreviousValue(inputValue);
      setDisplayValue('0');
      setOperator(nextOperator);
    } else {
      const result = performCalculation();
      setPreviousValue(result);
      setDisplayValue(result.toString());
      setOperator(nextOperator);
    }
  }

  function handleDecimalPress() {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  }

  function handleClearPress() {
    setDisplayValue('0');
    setPreviousValue(null);
    setOperator(null);
  }

  function performCalculation() {
    const inputValue = parseFloat(displayValue);

    if (operator === '+') {
      return previousValue + inputValue;
    } else if (operator === '-') {
      return previousValue - inputValue;
    } else if (operator === 'x') {
      return previousValue * inputValue;
    } else if (operator === '/') {
      return previousValue / inputValue;
    } else {
      return inputValue;
    }
  }

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <button onClick={() => handleDigitPress(7)}>7</button>
      <button onClick={() => handleDigitPress(8)}>8</button>
      <button onClick={() => handleDigitPress(9)}>9</button>
      <button onClick={() => handleOperatorPress('/')}>/</button>
      <button onClick={() => handleDigitPress(4)}>4</button>
      <button onClick={() => handleDigitPress(5)}>5</button>
      <button onClick={() => handleDigitPress(6)}>6</button>
      <button onClick={() => handleOperatorPress('x')}>x</button>
      <button onClick={() => handleDigitPress(1)}>1</button>
      <button onClick={() => handleDigitPress(2)}>2</button>
      <button onClick={() => handleDigitPress(3)}>3</button>
      <button onClick={() => handleOperatorPress('-')}>-</button>
      <button onClick={() => handleDigitPress(0)}>0</button>
      <button onClick={() => handleDecimalPress()}>.</button>
      <button onClick={() => handleOperatorPress('+')}>+</button>
      <button onClick={() => handleClearPress()}>AC</button>
      <button onClick={() => handleOperatorPress('=')}>=</button>
    </div>
  );
}

export default Calculator;
