import { expect, test } from "@playwright/test";

import { calculator } from "./calculator";

test.describe("calculator", () => {
  test('divide without "stripFractionalDigits"', () => {
    expect(calculator.divide(20, 5)).toEqual(4);
  });

  test('divide with "stripFractionalDigits"', () => {
    expect(calculator.divide(5, 4, true)).toEqual(1);
  });
});
