// map() method
// The map() method creates a new populated with the results of calling a provided function on every element in the calling array

const mapDemoArr = [10, 20, 30, 40, 50];
const newMapDemoArr = mapDemoArr.map((val) => {
  return val + 5;
});
console.log(newMapDemoArr);
