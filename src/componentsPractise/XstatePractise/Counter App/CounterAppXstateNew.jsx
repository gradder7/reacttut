import { useMachine } from "@xstate/react";
import React from "react";
import { counterMachine } from "../Machine/counterMachine";

export default function CounterAppXstateNew() {
  const [state, send] = useMachine(counterMachine);
  console.log(state);
  console.log(send);
  const { count } = state.context;
  console.log(count);

  return (
    <div>
      <h1>Count:{count}</h1>
      <button
        onClick={() => {
          send("INCREMENT");
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          send("DECREMENT");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          send("RESET");
        }}
      >
        Reset
      </button>
    </div>
  );
}
