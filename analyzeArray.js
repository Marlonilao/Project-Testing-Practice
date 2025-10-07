export function analyzeArray(array) {
  function getAverage(array) {
    const sum = array.reduce((a, b) => a + b, 0);
    return sum / array.length;
  }

  function getMin(array) {
    return array.reduce((a, b) => Math.min(a, b));
  }

  function getMax(array) {
    return array.reduce((a, b) => Math.max(a, b));
  }
  return {
    average: getAverage(array),
    min: getMin(array),
    max: getMax(array),
    length: array.length,
  };
}
