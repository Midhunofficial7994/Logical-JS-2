// Number of steps to reduce a number 

function numberOfSteps(num) {
    let steps = 0;

  
    while (num > 0) {
        if (num % 2 === 0) {
            
            num /= 2;
        } else {
           
            num -= 1;
        }
     
        steps++;
    }

    return steps;
}

const num = 14;
console.log(numberOfSteps(num)); 



// Reverse words in a string 

reverseWords = function(s) {
    return s.split(' ').map((a)=>a.split('').reverse().join('')).join(' ')
};
