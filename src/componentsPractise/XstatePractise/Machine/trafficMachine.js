import { createMachine } from "xstate";

export const trafficMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOgCdIBiAOQFEANAFQG0AGAXUVAAcB7WXABdcvfFxAAPRAEYArACYSADgBsS1gBZpATm3zpSgOyyANCACeiea0Xz5AZm2zDrFdMMrjSgL7ezaLDxCUnMwABsw3gB3GgYWDnE+AWFRcSkEe1klEm03D21pTVZWRzNLBGtbBycXPM8s338MHAJiEigKMHxYpjZOJBAkoRExAfTM7Nz3FQKiku0yxCVpEg0jJQ0Ve0MNWWl3eV8-EHxeCDhxAJbgxP5h1LHEAFoVRYQXxpAroLaKCFvkiM0ogNPI3kYSLIVKwPPZNPtDEpHJ9vq0QuFIlEAfdRqB0vJZPYSKxtNt5IZ9gZpCoNG9KiQKQoPBTlo4VLIUc0fqQOmAutiUrjJCDZNoSAYdrJQQ4tvIlG9tKxidDYfD3EjtEdvEA */
  initial: "red",
  states: {
    red: {
      on: {
        NEXT: {
          target: "yellow",
        },
      },
    },
    yellow: {
      on: {
        NEXT: {
          target: "green",
        },
      },
    },
    green: {
      on: {
        NEXT: {
          target: "red",
        },
      },
    },
  },
});
