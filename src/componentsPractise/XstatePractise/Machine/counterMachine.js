import { assign, createMachine } from "xstate";

//one way
// export const counterMachine = createMachine({
//   /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAYgEkA5AYQCUBRAWTooBUBtABgF1FQAHAPaxcAF1wD8vEAA9EAFgCsAOgDMATgAccuQCYdCgOwA2DgpUBGADQgAnoh0cjSuSrkcdBneaMa1HOUYAvoHWaFh4hKQAInS0jMzs3FKCwmISUrII5jrWdlkcakpeBhzmKiZaijoqwaEYOATEJPQAynSJPEggKaLikl2ZRipK5sZe2gZqBipmRrmI2cEhIPgCEHBSYQ2RyUK96QOICspyauo6Rg4aZQajCvMIKhwaSkYK5v7P+iozBkuBQA */
//   context: {
//     count: 0,
//   },
//   on: {
//     INCREMENT: {
//       actions: assign({
//         count: (context) => context.count + 1,
//       }),
//     },
//     DECREMENT: {
//       actions: assign({
//         count: (context) => context.count - 1,
//       }),
//       cond: (context) => context.count > 0,
//     },
//     RESET: {
//       actions: assign({
//         count: (context) => (context.count = 0),
//       }),
//     },
//   },
// });

//second way

export const counterMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QGMD2BXAdgFzAJwDoBDZbASwDcwBiASQDkBhAJQFEBZV+gFQG0AGALqJQAB1Swy5VJhEgAHogCM-ACwElAdn5LVANgCcqgExKAzAA49mgDQgAnsovGCqs8eMWDS42YCs-kp6AL7BdmhYuIQk5FTUACKsLBxcfEJy4pLSskgKiCZ2jgjmSgQGevz81pqqBvy+qqqh4Rg4+MSklDRsAMqsacK5mVJkMnKKxcbqFn5Kfnp6ZrqGmsa2DogWpaoWmhb6ZjWzWsahYSCYqBBwchFteBkSI2O5EwC0eoWIH80gd1EdWJgR5ZUY5UATJRKCwEfiHMxmKprRq6L4IXyaMpqWZqAwWNR6CwWM7BIA */
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
      incrementCount: assign({count:(context) => 
        context.count+1
      
      }),
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
