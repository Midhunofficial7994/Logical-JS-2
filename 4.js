// Missing Number 

var missingNumber = function(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
};
    

// Flower bed 
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;

    for (let i=0; i<flowerbed.length; i++) {
        let prev = flowerbed[i - 1] || 0;
        let curr = flowerbed[i];
        let next = flowerbed[i + 1] || 0;

        if (prev === 0 && curr !== 1 && next === 0) {
            count++;
            flowerbed[i] = 1;
        } 
    }

       return count >= n;
};    