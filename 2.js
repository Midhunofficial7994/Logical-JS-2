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

// Harshad Number 

var sumOfTheDigitsOfHarshadNumber = function(x) {
    const res = x.toString().split('').reduce((sum, digit) => sum + Number(digit), 0); 
    if (x%res===0) {
        return res
    }
    else{
        return -1
    }
};

// Longest Common prefix 

function longestCommonPrefix(strs) {
    if (strs.length === 0) return ""; 
    
    let prefix = strs[0]; 
    for (let i = 1; i < strs.length; i++) {
       
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);  
            if (prefix === "") return "";  
        }
    }
    
    return prefix;  
}


console.log(longestCommonPrefix(["flower", "flow", "flight"])); 
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    

