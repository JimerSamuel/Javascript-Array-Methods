// filter() method
//the filter() method creates a new array with all elements that pass the test implemented by the provided function

const filterDemoArr = [10, 20, 30, 40, 50];
const newFilterDemoArr = filterDemoArr.filter((val) => {
  return val > 25;
});
// i.e., if a number in filterDemoArr is greater that 25,
// then add it to newFilterDemoArr

console.log(newFilterDemoArr);
