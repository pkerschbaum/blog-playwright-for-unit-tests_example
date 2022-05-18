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

export const calculator = {
  divide,
};
