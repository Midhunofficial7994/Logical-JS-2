// Power of 3 
function isPowerOfThree(n) {
    if (n <= 0) return false; 
    
  
    while (n % 3 === 0) {
        n /= 3;
    }

    return n === 1;
} 

// Apply Transform over each Element in an array 

function map(arr, fn) {
    const result = []; 
    for (let i = 0; i < arr.length; i++) {
      result.push(fn(arr[i], i)); 
    }
    return result; 
  }
  const arr = [1, 2, 3];
  const fn = function plusone(n) {
    return n + 1;
  };
  
  const output = map(arr, fn);
  console.log(output); 

  
  // Buy 2 Chocolates   

  var buyChoco = function(prices, money) {
    prices.sort((a,b) => (a-b));
    if(money - (prices[0]+prices[1]) < 0) return money;
    return money - (prices[0]+prices[1]);
};