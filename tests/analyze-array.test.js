import { analyzeArray } from "../utilities/analyze-array.js";

test("Return an object containing min,max,average and lenght of numbers in an array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });

  expect(analyzeArray([12, 7, 25, 3, 18, 10, 30, 5])).toEqual({
    average: 13.75,
    min: 3,
    max: 30,
    length: 8,
  });
});
