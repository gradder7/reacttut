import React from "react";
import "./traffic.css";
import { useMachine } from "../../../node_modules/@xstate/react/lib/useMachine";
import { trafficMachineTyprScript } from "./TrafficLightMachine";

export default function TrafficLightTypeScript() {
  const [state, send] = useMachine(trafficMachineTyprScript);
  console.log(state.value);
  

  return (
    <div className="container">
      <div className="pole" />
      <div className="traffic-light">
        <input
          type="radio"
          readOnly
          className="light red"
          checked={state.matches("red")}
        />
        <input
          type="radio"
          readOnly
          className="light yellow"
          checked={state.matches("yellow")}
        />
        <input
          type="radio"
          readOnly
          className="light green"
            checked={state.matches("green")}
        />
        <button
          onClick={() => {
            send("NEXT");
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
