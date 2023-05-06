import React from "react";
import { useMachine } from "@xstate/react";
import counterMachine from "../machines/counterMachine";
import "../css/CounterApp.css";

export default function CounterApp() {
  const [state, send] = useMachine(counterMachine);

  const { count } = state.context;

  return (
    <div className="counterDiv">
      <div className="count">{count}</div>
      <div className="buttons">
        <button className="btn1" onClick={() => send("INCREMENT")}>
          Increment(+)
        </button>
        <button className="btn2" onClick={() => send("DECREMENT")}>
          Decrement(-)
        </button>
        <button className="btn3" onClick={() => send("RESET")}>
          Reset(0)
        </button>
      </div>
    </div>
  );
}
