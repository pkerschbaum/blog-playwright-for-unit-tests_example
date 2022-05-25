import * as mathModule from "./math-module";

type Quotient = number;

function divide(
  dividend: number,
  divisor: number,
  stripFractionalDigits?: boolean
): Quotient {
  let result = dividend / divisor;

  if (stripFractionalDigits) {
    result = mathModule.stripFractionalDigits(result);
  }

  return result;
}

type HeavyCalculationResult = "DONE";

async function doHeavyCalculation(): Promise<HeavyCalculationResult> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("DONE"), 1000);
  });
}

export const calculator = {
  divide,
  doHeavyCalculation,
};
