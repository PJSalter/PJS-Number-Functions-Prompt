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