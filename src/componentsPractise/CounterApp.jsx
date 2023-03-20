import React, { useState } from "react";
import "../css/CounterApp.css";

export default function CounterApp() {
  const [count, setCount] = useState(0);
  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  let resetCount = () => {
    setCount(0);
  };
  return (
    <div className="counterDiv">
      <div className="count">{count}</div>
      <div className="buttons">
        <button className="btn1" onClick={incrementCount}>
          Increament(+)
        </button>
        <button className="btn2" onClick={decrementCount}>
          Decreament(-)
        </button>
        <button className="btn3" onClick={resetCount}>
          reset(0)
        </button>
      </div>
    </div>
  );
}
