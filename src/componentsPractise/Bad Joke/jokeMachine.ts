import {
  DoneInvokeEvent,
  assign,
  createMachine,
} from "../../../node_modules/xstate/lib/index";
// events
type TypeEvent = { type: "TYPE"; value: string };
type SearchEvent = { type: "SEARCH" };
type JokesEvent = TypeEvent | SearchEvent;

type JokesState =
  | { value: "ready"; context: JokesContext }
  | { value: "searching"; context: JokesContext }
  | { value: "error"; context: JokesContext & { error: string } };

type JokesContext = {
  input: string;
  results: Joke[];
  error?: string;
};

interface Joke {
  id: string;
  joke: string;
}

// const fetchJoke = async (input: string): Promise<Joke[]> => {
//   const response = await fetch(
//     `https://icanhazdadjoke.com/search?term=${input}&limit=5`,
//     { headers: { Accept: "application/json" } }
//   );
//   return response.json();
// };
const fetchJoke = async (input: string) => {
  const response = await fetch(
    `https://icanhazdadjoke.com/search?term=${input}&limit=5`,
    {
      headers: { Accept: "application/json" },
    }
  );
  return response.json();
};

export const jokesMachine = createMachine<JokesContext, JokesEvent, JokesState>(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QCsD2BrMBZAhgYwAsBLAOzAGIAVATQAUBRAbQAYBdRUAB1ViIBciqEhxAAPRABYATABoQAT0QAOAIwA6CUoDsSgKxTmErSoCcWgMwqAvlblpMuQqTBqATmBwR55AMr0AggBKAMIAEizsSCDcvAJCIuIIUgBs5mrmSpl6yUbmEsy6EnKKCKoa2noGRqYW1jZyJKgQcCL22PjEZCIx-ILCUYkAtMnFiMP1IG2OnS7uniVcPL3xA4gqEhJqKtq6zBm6KsZaJiMKyupmJocqyaa6t8m6E1MdzmqwHq5OJFDdS3H9UCJDJKLY1Cz6bTmY5FM6lC7Ha63Ez3G5aGw2IA */
    id: "jokeMachine",
    initial: "ready",
    context: {
      input: "",
      results: [],
    },
    states: {
      ready: {
        on: {
          SEARCH: {
            target: "searching",
          },
        },
      },
      error: {
        on: {
          SEARCH: {
            target: "searching",
          },
          TYPE: {
            target: "ready",
          },
        },
      },
      searching: {
        invoke: {
          id: "fetchJokes",
          src: (context) => fetchJoke(context.input),
          onDone: {
            // data fetched
            target: "ready",
            actions: assign(
              (context, event) => (context.results = event.data.results)
            ),
          },
          onError: {
            target: "ready",
            actions: assign(
              (context, event) => (context.error = event.data.message)
            ),
          },
        },
      },
    },
    on: {
      TYPE: {
        actions: "typingAction",
      },
    },
  },
  {
    actions: {
      typingAction: assign((context, e) => ({ input: (e as TypeEvent).value })),
    },
  }
);
