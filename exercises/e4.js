// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
  let minVal = Number.MAX_SAFE_INTEGER;
  for (let num of array) {
    if (num < minVal) {
      minVal = num;
    }
  }
  return minVal;
}

export function findMaxValueInArray(array) {
  let maxVal = Number.MIN_SAFE_INTEGER;
  for (let num of array) {
    if (num > maxVal) {
      maxVal = num;
    }
  }
  return maxVal;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
