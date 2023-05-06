import { createMachine } from "xstate";
const counterMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QGMD2BXAdgFzAJwDoBDZbASwDcwBiASQDkBhAJQFEBZV+gFQG0AGALqJQAB1Swy5VJhEgAHogAcSggFYA7GrUAmAMx6NANgAsppSYA0IAJ6IdWggE4dARiVGNh-kf5qTGgC+gdZoWLiEJORU1AAirCwcXHxCcuKS0rJICogmOtZ2CK4aqhr8JkpqRkoaOtoewaEYOPjEpJQ0bADKrCnC2elSZDJyikX8OgRGTiYmekpOenM6RsUFyq4EFSVmhiZqrsU6wSEgmKgQcHJhLXhpEkMj2WMAtEbrCG+NIDcRbdFge4ZYZZUBjQ4adQ6fhKHSwgL8Mp6VwfQyqVzzGolapGXRLE6BIA */
    id: "counter",
    initial: "active",
    context: {
      count: 0,
    },
    states: {
      active: {
        on: {
          INCREMENT: {
            actions: "incrementCount",
          },
          DECREMENT: {
            cond: "canDecrement",
            actions: "decrementCount",
          },
          RESET: {
            actions: "resetCount",
          },
        },
      },
    },
  },
  {
    actions: {
      incrementCount: (context) => {
        context.count++;
      },
      decrementCount: (context) => {
        context.count--;
      },
      resetCount: (context) => {
        context.count = 0;
      },
    },
    guards: {
      canDecrement: (context) => context.count >= 1,
    },
  }
);

export default counterMachine;
