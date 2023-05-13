import { type } from "os";
import { createMachine } from "../../../node_modules/xstate/lib/Machine";

type TrafficLightEvents =
  | { type: "NEXT" }
  | { type: "TURN_OFF" }
  | { type: "TURN_ON" };


type TrafficLightState =
  | { value: {ON:"green"}; context: undefined }
  | { value: {ON:"yellow"}; context: undefined }
  | { value: {ON:"red"}; context: undefined }
  | { value: "OFF"; context: undefined }
  

// it takes three paramenters context,events,states
export const trafficMachineTyprScript = createMachine<
  undefined,
  TrafficLightEvents,
  TrafficLightState
>({
  /** @xstate-layout N4IgpgJg5mDOIC5QFsCGBjAFgSwHZgBU4AXAOgCdIBiAOQFEANAgbQAYBdRUABwHtZsxbL1xcQAD0QBaAEwBGAOylWANgAcAFhVaVAVl0yNChQBoQAT0QzdATlILdcvXLUBmW7oe6Avt7NosPEISUnMwABtw3gB3WkYWDjE+ASERMUkEOWtSTRVWDVcFVycC1xUzSwRXGVdSFSd63VUFOWqNDV9-DBx8IlgyKEowXDimNk4kEGTBYVFJjJqlDSdWXRUZNUddLQ0KxEUZUjlWVjU5G1KFGzKfTpBcXgg4MQCe4P6k-hm0+ekZFRUdRUNjkTTUCmsoN2FkQmjqWRsalYCg0yJRZTuryCfQGQzmPC+qXxEis7hyoMKJwUZ20pz2CBqh2Op3Ol2uekx3WxIUoEE+KVm6T+LiBILBEK2ZXp5yU-xkqjkisRLlYck5gV6ITCkRi-O+xIWdXaKhaxQUAJk8rk9Oqh0KLlRGxsKOpCl8viAA */
  id: "machineTest",
  initial: "OFF",
  states: {
    ON: {
        initial:'red',
      on: {
        TURN_OFF: {
          target: "OFF",
        },
      },
      states: {
          red: {
            on: {
              NEXT: "yellow",
            },
            after: {
              3000: "yellow",
            },
          },
          yellow: {
            on: {
              NEXT: "green",
            },
            after: {
              3000: "green",
            },
          },
        green: {
          on: {
            NEXT: "red",
          },
          after: {
            3000: "red",
          },
        },
      },
    },
    OFF: {
      on: {
        TURN_ON: {
          target: "ON",
        },
      },
    },
  },
});
