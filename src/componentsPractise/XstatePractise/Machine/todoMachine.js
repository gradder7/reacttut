import { actions, createMachine } from "xstate";

export const todoMachine = createMachine(
  {
    context: {
      todos: [],
    },
    on: {
      ADD_TODO: {
        actions: "addTODO",
      },
    },
  },
  {
    actions: {
      addTODO: (context, event) => {
        context.todos = [...context.todos, event.todo];
      },
    },
  }
);
