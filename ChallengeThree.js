//Write a function which accepts two numbers. The function should return the larger number.

//Attempt 1 - ES5

function checkLarger(n1, n2) {
    if(n1 > n2) {
      return n1;
    } else {
      return n2
    }
  };
  
  //Examples:
  console.log(checkLarger(1,2));
  // Outputs 2
  
  console.log(checkLarger(44,33));
  // Returns 44
  
  console.log(checkLarger(28, 54));
  // returns 54

  //Attempt 2 - ES6

const validateBiggerNums = (num1, num2) => num1 > num2 ? num1 : num2;

console.log(validateBiggerNums(3,4));
// Outputs 4

console.log(validateBiggerNums(84,22));
// Returns 84

console.log(validateBiggerNums(16, 49));
// returns 49
