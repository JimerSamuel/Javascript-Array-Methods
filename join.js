// join() method
// Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string, if the array has only one item, the that item will be returned without using the separator.

const joinDemoArr = [10, 20, 30, 40, 50];
console.log(joinDemoArr.join());
console.log(joinDemoArr.join(""));
console.log(joinDemoArr.join(" "));
console.log(joinDemoArr.join("-"));
