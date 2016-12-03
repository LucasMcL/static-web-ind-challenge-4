// Challenge #4

// What is the smallest number that can be divided by each of the
// numbers from 1 to 10 without any remainder?

var foundSolution = false;
var num = 10; // Start search at 10


while (foundSolution === false) {
  var allTenSuccessful = true;

  //Loop through numbers 1 - 10
  //Check to see if every one is even divisor
  //If not, break loop and set tester variable to false
  for(var i = 1; i <= 10; i++) {
    if(num % i != 0) {
      allTenSuccessful = false;
      break;
    }
  }

  //If all ten numbers divided evenly, we have a solution
  if (allTenSuccessful === true) {
    console.log("The solution is " + num);
    foundSolution = true;
  }
  num++;
}
