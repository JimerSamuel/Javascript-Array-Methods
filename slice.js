// slice() method
// retuns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) Where start and end represent the index of items in that array. The original array will not be modified.

const sliceDemoArr = [10, 20, 30, 40, 50];
const sliced1 = sliceDemoArr.slice(2, 4);
console.log(sliced1);
