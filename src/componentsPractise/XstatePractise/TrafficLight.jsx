import React from "react";
import { useMachine } from "@xstate/react";
import { trafficMachine } from "./Machine/trafficMachine";

const TrafficLight = () => {
  const [state, send] = useMachine(trafficMachine);
  console.log(state);

  return (
    <div>
      <div
        style={{
          backgroundColor: state.matches("red") ? "red" : "gray",
          height: "100px",
          width: "100px",
          borderRadius: "50%",
        }}
      />
      <br />
      <div
        style={{
          backgroundColor: state.matches("yellow") ? "yellow" : "gray",
          height: "100px",
          width: "100px",
          borderRadius: "50%",
        }}
      />
      <br />
      <div
        style={{
          backgroundColor: state.matches("green") ? "green" : "gray",
          height: "100px",
          width: "100px",
          borderRadius: "50%",
        }}
      />
      <br />
      <h1>Initial state of the Machine was :{state.machine.initial}</h1>
      <h1>Current light is :{state.value}</h1>
      <br />
      <button onClick={() => send("NEXT")}>Change</button>
    </div>
  );
};

export default TrafficLight;
