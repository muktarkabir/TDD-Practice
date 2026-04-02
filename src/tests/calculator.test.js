import { calculator } from "../utilities/calculator.js";

test("functions for add, subtract, divide, and multiply. Each should take two numbers and return the correct calculation.", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(4, 2)).toBe(2);
  expect(calculator.divide(9, 3)).toBe(3);
  expect(calculator.multiply(8, 2)).toBe(16);
});
