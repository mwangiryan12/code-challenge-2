function isPrime(num) {
    // If the number is less than 2, it's not prime
    if (num < 2) {
      return false;
    }
    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function filterPrimes(arr) {
    // Filter out prime numbers from the array
    return arr.filter(num => isPrime(num));
  }
  
  // Test the function
  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(filterPrimes(inputArray)); // Output: [2, 3, 5, 7]
  