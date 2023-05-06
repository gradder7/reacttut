import { createMachine } from "../../../node_modules/xstate/lib/Machine";

type TrafficLightEvents = { type: "NEXT" };

type TrafficLightState =
  | { value: "green"; context: undefined }
  | { value: "yellow"; context: undefined }
  | { value: "red"; context: undefined };

// it takes three paramenters context,events,states
export const trafficMachineTyprScript = createMachine<
  undefined,
  TrafficLightEvents,
  TrafficLightState
>({
  /** @xstate-layout N4IgpgJg5mDOIC5QFsCGBjAFgSwHZgBU4AXAOgCdIBiAOQFEANAgbQAYBdRUABwHtZsxbL1xcQAD0QBaAEwBGAOylWANgAcAFhVaVAVl0yNChQBoQAT0QzdATlILdcvXLUBmW7oe6Avt7NosPEISUnMwABtw3gB3WkYWDjE+ASERMUkEOWtSTRVWDVcFVycC1xUzSwRXGVdSFSd63VUFOWqNDV9-DBx8IlgyKEowXDimNk4kEGTBYVFJjJqlDSdWXRUZNUddLQ0KxEUZUjlWVjU5G1KFGzKfTpBcXgg4MQCe4P6k-hm0+ekZFRUdRUNjkTTUCmsoN2FkQmjqWRsalYCg0yJRZTuryCfQGQzmPC+qXxEis7hyoMKJwUZ20pz2CBqh2Op3Ol2uekx3WxIUoEE+KVm6T+LiBILBEK2ZXp5yU-xkqjkisRLlYck5gV6ITCkRi-O+xIWdXaKhaxQUAJk8rk9Oqh0KLlRGxsKOpCl8viAA */
  id: "machineTest",
  initial: "red",
  states: {
    green: {
      on: {
        NEXT: "red",
      },
      after: {
        3000: "red",
      },
    },
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
  },
});
