import { useMachine } from "@xstate/react";
import React, { useState } from "react";
import { todoMachine } from "./Machine/todoMachine";

export default function TodoApp() {
  const [newtodo, setTodo] = useState();
  const [state, send] = useMachine(todoMachine);
  //   console.log(state);

  const { todos } = state.context;
  const submitTodo = () => {
    if (newtodo) {
      send("ADD_TODO", { todo: newtodo });
    }
    setTodo("");
  };

  return (
    <div>
      <h1>Hello Todo</h1>
      <input
        type="text"
        placeholder="Enter task"
        value={newtodo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <br />
      <button onClick={submitTodo}>Add Todo</button>
      <br />
      <h1>TODOS</h1>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    </div>
  );
}
