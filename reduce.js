// reduce () method
//Executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return valur from the calculation on the preceding element

//The final result of running the reducer across all element of the array is a single value

const reduceDemoArr = [10, 20, 30, 40, 50];
const sum1 = reduceDemoArr.reduce((accumulator, currentVal) => {
  return accumulator + currentVal;
});
console.log(sum1);
