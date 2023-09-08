function isPowerOfTwo(number) {
  // Check if the number is greater than 0 and has only one set bit (binary representation contains a single '1')
  return number > 0 && (number & (number - 1)) === 0;
}

// Test cases
console.log(isPowerOfTwo(1024)); // Output: true
console.log(isPowerOfTwo(100));  // Output: false
console.log(isPowerOfTwo(0));    // Output: false
console.log(isPowerOfTwo(-2));   // Output: false
