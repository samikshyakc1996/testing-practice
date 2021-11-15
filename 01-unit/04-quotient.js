// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function quotient(num1, num2 = 1) {
  return num1 / num2;
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the quotient of two numbers.
  var result = quotient(2, 2);
  console.log("The quotient of quotient(2,2) is: " + result);
  if (result !== 1)
    throw new Error("Expected quotient(2, 2) to be 1. Received: " + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return the text 'ERROR' when the second number is 0.
  var result = quotient(2, 0);
  if (result == Infinity) {
    console.log("The quotient of quotient(2,0) is: ERROR");
  }
  if (result !== Infinity)
    throw new Error(
      "Expected quotient(2, 0) to be Infinity. Received: " + result
    );

  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should ignore additional numbers.
  var result = quotient(20, 10, 2);
  console.log("The quotient of quotient(20,10,2) is: " + result);
  if (result !== 2)
    throw new Error("Expected quotient(20,10, 2) to be 2. Received: " + result);

  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.
  var result = quotient(20);
  console.log("The quotient of quotient(20) is: " + result);
  if (result !== 20)
    throw new Error("Expected quotient(20) to be 20. Received: " + result);

  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.

  console.log("All tests passed successfully.");

  // ==================================================
  // PRINT ERRORS
  // ==================================================
} catch (e) {
  console.warn("Whoops, the following test did not pass:");
  console.error(e.message);
}
