export const analyzeArray = (array) => {
  const sortedArr = array.sort((a, b) => a - b);
  const average = array.reduce((acc, curr) => acc + curr, 0) / array.length;
  const length = array.length;
  const min = sortedArr[0];
  const max = sortedArr[sortedArr.length -1];

  const result = { average, min, max, length };
  return result;
};
