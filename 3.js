// Power of 3 
function isPowerOfThree(n) {
    if (n <= 0) return false; 
    
  
    while (n % 3 === 0) {
        n /= 3;
    }

    return n === 1;
}