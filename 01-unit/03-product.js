// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function product(num1, num2) {
  return num1 * num2;
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the product of two numbers.
  var result = product(2, 2);
  console.log("The product of product(2,2) is: " + result);
  if (result !== 4)
    throw new Error("Expected product(2, 2) to be 4. Received: " + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return 0 when either of the numbers are 0.
  var result = product(2, 0);
  var result = product(0, 2);
  console.log("The product of product(0,2) is: " + result);
  console.log("The product of product(2,0) is: " + result);
  if (result !== 0)
    throw new Error("Expected product(2, 0) to be 0. Received: " + result);

  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should ignore additional numbers.
  var result = product(2, 3, 4, 5);
  console.log("The product of product(2,3,4,5) is: " + result);
  if (result !== 6)
    throw new Error("Expected product(2, 3,4,5) to be 6. Received: " + result);

  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.

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
