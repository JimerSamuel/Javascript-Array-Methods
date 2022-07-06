// findIndex() method
// returns the index of the first element in the array that satisfies the provided testing function Otherwise, It returns -1, indicating that no element passed the test

const findIndexDemoArr = [10, 20, 30, 40, 50];
const indexFound = findIndexDemoArr.findIndex((val) => {
  return val > 32;
});
console.log(indexFound);
