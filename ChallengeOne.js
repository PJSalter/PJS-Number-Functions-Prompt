//1️⃣ Write a function which accepts two numbers as arguments. The function should return the sum of the two numbers.

//Attempt 1 

//ES5 solving

function twoNumsAdded(num1, num2){
    return num1 + num2;
  };
  
  console.log(twoNumsAdded(22,3));
  // Outputs to the console: 25
  
  //ES6 Solving
  
  const addTwoNumbers = (num1, num2) => num1 + num2;
  
  //For example:
  console.log(addTwoNumbers(4,6));
  // Outputs to the console: 10
  
  let result = addTwoNumbers(5, 15);
  console.log(result);
  // Outputs to the console: 20
  
  let newNum = 12;
  console.log(addTwoNumbers(result, newNum));
  // Outputs to the console: 32;
  
  //Attempt 2 - ES6 with Reduce (Higher Order Function)
  
  const addingBothSums = (...num) => num.reduce((value,addingBothSums) => addingBothSums += value);
  
  //For example:
  console.log(addingBothSums(22,10));
  // Outputs to the console: 32
  
  let totalResult = addingBothSums(55, 25);
  console.log(totalResult);
  // Outputs to the console: 80
  
  let newNumber = 46;
  console.log(addingBothSums(totalResult, newNumber));
  // Outputs to the console: 126;