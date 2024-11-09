// function findWordsContaining(words, x) {
//     let result = [];
    
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].includes(x)) {
//             result.push(i);
//         }
//     }
    
//     return result;
// }


// console.log(findWordsContaining(["leet","code"],"e"));



// Contains Duplicate 


// function containsDuplicate(nums) {

//     let result = new Set();
    
   
//     for (let num of nums) {
     
//         if (result.has(num)) 
//             return true;
//         }
       
//         result.add(num);
//     }
    
   
//     return false;



// Sqrt 

// function mySqrt(x) {
//     if (x === 0 || x === 1) {
//         return x;
//     }
    
//     let left = 0;
//     let right = x;
    
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         let square = mid * mid;
        
//         if (square === x) {
//             return mid; 
//         } else if (square < x) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
    
//     return right; 
// }


// -------------------------------------------------------

// function mySqrt(x) {
  
//     return Math.floor(Math.pow(x, 0.5));
// }
