import './App.css';
import { useRef, useState } from 'react';

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  const times = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  const divide = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult((prevVal) => prevVal * 0);
  };

  return (
    <div className = "App">
      <div>
        <h1>Simple Working Calculator</h1>
      </div>
      <form>
        <p ref = {resultRef}>{result}</p>
        <input 
          id = "input"
          pattern = "[0-9]"
          ref = {inputRef}
          type = "number"
          placeholder = "Type a number"
        /><br/>
        <button id = "operator" onClick =  {plus}>Add</button>
        <button id = "operator" onClick = {minus}>Subtract</button>
        <button id = "operator" onClick = {times}>Multiply</button>
        <button id = "operator" onClick = {divide}>Divide</button>
        <button id = "reset" onClick = {resetInput}>Reset Input</button>
        <button id = "reset" onClick = {resetResult}>Reset Result</button>
      </form>
    </div>
  ); 
}

export default App;