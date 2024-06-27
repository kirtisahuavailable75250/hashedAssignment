import React, { useState } from 'react';
import "./Styles.css";

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const handleSubtraction = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  const handleMultiplication = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  const handleDivision = () => {
    if (parseFloat(num2) === 0) {
      setResult('Cannot divide by zero!');
    } else {
      setResult(parseFloat(num1) / parseFloat(num2));
    }
  };

  return (

	<>
	<div className="calculator">
		<h1>Calculator</h1>
      <input
        className="input-field"
        type="number"
        placeholder="Enter number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        className="input-field"
        type="number"
        placeholder="Enter number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />
      <button className="operation-button" onClick={handleAddition}>+</button>
      <button className="operation-button" onClick={handleSubtraction}>-</button>
      <button className="operation-button" onClick={handleMultiplication}>*</button>
      <button className="operation-button" onClick={handleDivision}>/</button>
      <br />
      <div className="result">Result: {result}</div>
    </div>


		{/* <p>Note: I have designed this calculator as a mini-project as per Requirement given inn the question.</p> */}
	
	</>
  );
}

export default Calculator;
