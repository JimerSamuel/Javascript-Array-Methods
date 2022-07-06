// find() method
// Returns the first element in the provided array that satisfies the provided testing function
// If no values satisfy the testing function, undefined id returned

const findDemoArr = [11, 20, 31, 30, 51];
const valFound = findDemoArr.find((val) => {
  return val % 2 === 0;
});
console.log(valFound);
