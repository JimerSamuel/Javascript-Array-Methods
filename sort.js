// short() method
// sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon coverting the elements info stringsm the comparing their sequences of UTF-16 code units values

const sortDemoArr2 = [100, 50, 32, 2000, 4];
sortDemoArr2.sort((a, b) => {
  return a - b;
});
console.log(sortDemoArr2);

// [2, 32, 50, 100, 2000]  note that the numbers have
// been sorted into ascending order
