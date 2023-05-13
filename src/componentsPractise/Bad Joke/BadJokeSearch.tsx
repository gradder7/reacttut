import React from "react";
import "./style.css";
import { useMachine } from "../../../node_modules/@xstate/react/lib/index";
import { jokesMachine } from "./jokeMachine";
export default function BadJokeSearch() {
  const [state, send] = useMachine(jokesMachine);
  console.log(state);
  const { matches } = state;
  const { results, input, error } = state.context;

  return (
    <div>
      <h1>Dad Joke Search</h1>
      <div className="search-bar">
        <input
          className="inpt"
          type="text"
          name="name"
          value={input}
          onChange={(e) => send({ type: "TYPE", value: e.target.value })}
        />
        <button
          className="btn"
          disabled={matches("searching")}
          onClick={() => send("SEARCH")}
        >
          Search
        </button>
      </div>
      {matches("error") && <div>{error}</div>}
      <ul className="results">
        {results.map(({ joke, id }, index) => (
          <li className="result-item" key={id}>
            {joke}
            {index !== results.length ? <hr /> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
