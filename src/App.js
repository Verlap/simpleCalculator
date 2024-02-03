import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(0);

  function handleButton(input, resultado) {
    setResult(resultado);
    input.value = "";
    input.focus();
  }

  function resetInput() {
    let input = document.querySelector(".numberInput");
    input.value = "";
    input.focus();
  }
  function resetResult() {
    let input = document.querySelector(".numberInput");
    handleButton(input, 0);
  }
  function add() {
    let input = document.querySelector(".numberInput");
    if (input.value !== "") {
      let resultado = parseFloat(input.value) + parseFloat(result);
      handleButton(input, resultado);
    }
  }
  function minus() {
    let input = document.querySelector(".numberInput");
    if (input.value !== "") {
      let resultado = parseFloat(result) - parseFloat(input.value);
      handleButton(input, resultado);
    }
  }
  function multiply() {
    let input = document.querySelector(".numberInput");
    if (input.value !== "") {
      let resultado = parseFloat(input.value) * parseFloat(result);
      handleButton(input, resultado);
    }
  }
  function divide() {
    let input = document.querySelector(".numberInput");
    if (input.value !== "") {
      let resultado = parseFloat(result) / parseFloat(input.value);
      handleButton(input, resultado);
    }
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="screen">
          <span className="result">{result}</span>
          <input
            className="numberInput"
            name="numberInput"
            type="number"
            autoFocus
          />
        </div>
        <div className="buttons">
          <button className="reset-button" onClick={resetInput}>
            Reset input
          </button>
          <button className="reset-button" onClick={resetResult}>
            Reset result
          </button>
          <button className="action-button" onClick={add}>
            +
          </button>
          <button className="action-button" onClick={minus}>
            &minus;
          </button>
          <button className="action-button" onClick={multiply}>
            &times;
          </button>
          <button className="action-button" onClick={divide}>
            &divide;
          </button>
        </div>
      </div>
      <div className="sign">
        <span>This project was made by Maria Mesa Rojas</span>
      </div>
    </div>
  );
}

export default App;
