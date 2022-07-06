// every() method
// tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean Value

const everyDemoArr1 = [10, 20, 30, 40, 50];
const theAllPassTheTest1 = everyDemoArr1.every((val) => {
  return typeof val === "number";
});
console.log(theAllPassTheTest1);
