//Write a function that accepts four arguments, each will be a number. The function should add the first two numbers together; add the third and fourth numbers; and return the result of multiplying both sums together.

//Attempt 1 - ES5

function addAndMultiply(n1, n2, n3, n4){

    let additionalMaths = n1 + n2;
  
    let additionalMathsTwo = n3 + n4;
  
    let timesTheseNums = additionalMaths * additionalMathsTwo;
  
    //console.log(timesTheseNums)
  
    return timesTheseNums;
      
  };
  
  //Examples:
  let result = addAndMultiply(2,3,4,5);
  console.log(result);
  // Logging result outputs 45
  
  console.log(addAndMultiply(1,1,1,1));
  
  // Logs 4