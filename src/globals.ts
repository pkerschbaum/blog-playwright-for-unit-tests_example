import { test as base } from "@playwright/test";
import * as sinon from "sinon";

export const test = base.extend<{
  _autoSnapshotSuffix: void;
  fakeClock: sinon.SinonFakeTimers;
}>({
  _autoSnapshotSuffix: [
    async ({}, use, testInfo) => {
      testInfo.snapshotSuffix = "";
      await use();
    },
    { auto: true },
  ],

  fakeClock: [
    async ({}, use) => {
      const clock = sinon.useFakeTimers();
      await use(clock);
      clock.restore();
    },
    { scope: "test" },
  ],
});
