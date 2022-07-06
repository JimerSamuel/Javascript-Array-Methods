// some() method
// Test whether at least one element in the array passes the test implemented by the provider function. It returns true if, in the array, it finds an element for which the procided function returns true; otherwise if returns false. It doesn's modify the array

const someDemoArr = [10, 20, 30, 40, 50];
const thereIsAtLeasOne = someDemoArr.some((val) => {
  return val > 12 && val < 28;
});
console.log(thereIsAtLeasOne);
