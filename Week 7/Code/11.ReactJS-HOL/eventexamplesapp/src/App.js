import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(prev => prev + 1);
  };

  const decrementCounter = () => {
    setCounter(prev => prev - 1);
  };

  const sayWelcome = () => {
    alert("Welcome!");
  };
  const handleClick = () => {
    alert("I was clicked");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Event Examples</h1>

      <h2>Counter: {counter}</h2>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>

      <hr />

      <button onClick={sayWelcome}>Say Welcome</button>

      <hr />

      <button onClick={handleClick}>OnPress</button>

      <hr />

      {/* Currency Convertor */}
      <CurrencyConvertor />
    </div>
  );
}

export default App;
