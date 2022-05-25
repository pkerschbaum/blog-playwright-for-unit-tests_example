import { expect } from "@playwright/test";

import { calculator } from "./calculator";
import { test } from "./globals";

test.describe("calculator", () => {
  test('divide without "stripFractionalDigits"', () => {
    expect(calculator.divide(20, 5)).toEqual(4);
  });

  test('divide with "stripFractionalDigits"', () => {
    expect(calculator.divide(5, 4, true)).toEqual(1);
  });

  test("doHeavyCalculation", async ({ fakeClock }) => {
    const promise = calculator.doHeavyCalculation();
    fakeClock.tick(1000);
    const result = await promise;
    expect(result).toEqual("DONE");
  });
});
