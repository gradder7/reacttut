import React from "react";
import "./traffic.css";
import { useMachine } from "../../../node_modules/@xstate/react/lib/useMachine";
import { trafficMachineTyprScript } from "./TrafficLightMachine";

export default function TrafficLightTypeScript() {
  const [state, send] = useMachine(trafficMachineTyprScript);
  console.log(state);

  return (
    <>
      <div className="container">
        <div className="pole" />
        <div className="traffic-light">
          <input
            type="radio"
            readOnly
            className="light red"
            checked={state.matches({ ON: "red" })}
          />
          <input
            type="radio"
            readOnly
            className="light yellow"
            checked={state.matches({ ON: "yellow" })}
          />
          <input
            type="radio"
            readOnly
            className="light green"
            checked={state.matches({ ON: "green" })}
          />
          <button
            onClick={() => {
              send("NEXT");
            }}
          >
            NEXT
          </button>
          <button
            onClick={() => {
              send("TURN_OFF");
            }}
          >
            TURN_OFF
          </button>
          <button
            onClick={() => {
              send("TURN_ON");
            }}
          >
            TURN_ON
          </button>
        </div>
        <h1>Current State of machine:{JSON.stringify(state?.value)}</h1>
      </div>
    </>
  );
}
