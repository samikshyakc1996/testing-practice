// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function sum(num1 = 0, num2 = 0) {
  return num1 + num2;
}
function difference(num1 = 0, num2 = 0) {
  return num1 - num2;
}
function multiply(num1 = 0, num2 = 1) {
  return num1 * num2;
}
function divide(num1 = 0, num2 = 1) {
  return num1 / num2;
}

function calc(operation, num1, num2) {
  switch (operation) {
    case "add":
      return sum(num1, num2);
    case "subtract":
      return difference(num1, num2);
    case "multiply":
      return num1 * num2;
    case "divide":
      return num1 / num2;
    default:
      console.log("Operation not supported.");
  }
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the correct sum when the user provides: 'add', 1, 1.
  var result = calc("add", 1, 1);
  console.log("The answer of calc('add', 1, 1) is: " + result);
  if (result !== 2)
    throw new Error('Expected calc("add", 1, 1) to be 2. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return the correct difference when the user provides: 'subtract', 20, 10.
  var result = calc("subtract", 20, 10);
  console.log("The answer of calc('subtract', 20, 10) is: " + result);
  if (result !== 10)
    throw new Error(
      'Expected calc("subtract", 20, 10) to be 10. Received: ' + result
    );

  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should return the correct product when the user provides: 'multiply', 9, 9.
  var result = calc("multiply", 9, 9);
  console.log("The answer of calc('multiply', 9, 9) is: " + result);
  if (result !== 81)
    throw new Error(
      'Expected calc("multiply", 9, 9) to be 10. Received: ' + result
    );
  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // It should return the correct quotient when the user provides: 'divide', 9, 3.
  var result = calc("divide", 9, 3);
  console.log("The answer of calc('divide', 9, 3) is: " + result);
  if (result !== 3)
    throw new Error(
      'Expected calc("divide", 9, 3) to be 3. Received: ' + result
    );
  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // It should return the message 'Operation not supported.' when the user provides: exponent, 2, 8.
  var result = calc("exponent", 2, 8);

  // ==================================================
  // PRINT ERRORS
  // ==================================================
} catch (e) {
  console.warn("Whoops, the following test did not pass:");
  console.error(e.message);
}
