import { test as base } from "@playwright/test";
import * as sinon from "sinon";

export const test = base.extend<{
  fakeClock: sinon.SinonFakeTimers;
}>({
  fakeClock: [
    async ({}, use) => {
      const clock = sinon.useFakeTimers();
      await use(clock);
      clock.restore();
    },
    { scope: "test" },
  ],
});
