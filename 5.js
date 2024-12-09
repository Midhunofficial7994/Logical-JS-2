// Students Homework 

var busyStudent = function(startTime, endTime, queryTime) {
    return startTime.filter((t, i) => queryTime >= t &&
     queryTime <= endTime[i]).length;  
  };



  // Relative Sorted Array    

var relativeSortArray = function(arr1, arr2) {
    arr1.sort((a,b)=>a-b);
    let newArr=[...arr2];
    for(let i=0;i<arr1.length;i++){
        if(newArr.indexOf(arr1[i]) ==-1){
            newArr.push(arr1[i]);   
        }else{
        newArr.splice(newArr.indexOf(arr1[i]),0,arr1[i]) 
        } 
    }
    for(let i=0;i<arr2.length;i++){
        newArr.splice(newArr.indexOf(arr2[i]),1)
    }
    return newArr;
};

// Maximum Balloons 

function maxNumberOfBalloons(text) {
   
    let charCount = {}
 
    for (const char of text) {
       charCount[char] = charCount[char] || 0
       charCount[char] += char === 'l' || char === 'o' ? 0.5 : 1
    }
 
    let minCount = Number.POSITIVE_INFINITY
 
    for (const char of 'balon') {
       minCount = Math.min(minCount, charCount[char] || 0)
    }
 
    return Math.floor(minCount)
 } 

 // PANGRAM

 checkIfPangram = sentence => new Set(sentence).size === 26

 


//  Reverse of String 


var reverseString = function(s) {
    return s.reverse('')
 };   


//  Maximum number of words in a sentence 

var mostWordsFound = function(sentences) {
    let max = 0;
    for (let sentence of sentences) {
        let words = sentence.split(' ');
        max = Math.max(max, words.length)
    }
    return max;    

}; 

// Squares of a sorted array 

var sortedSquares = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let idx = end;
    let sortPowArr = [];

    while (idx > -1) {
        if (Math.abs(nums[start]) > Math.abs(nums[end])) {
            sortPowArr[idx--] = nums[start] * nums[start];
            start++;
        } else {
            sortPowArr[idx--] = nums[end] * nums[end];
            end--;
        }
    }
    return sortPowArr;
};
   

// Split the array 

var isPossibleToSplit = function(nums) {
    const count = {};
    for (const num of nums) {
        count[num] = (count[num] || 0) + 1;
    }

    const n = nums.length / 2;
    const used = new Set();

    for (const num in count) {
        if (count[num] > 2) {
            return false;
        }
        if (count[num] === 2) {
            if (used.size === n) {
                return false;
            }
            used.add(num);
        }
    }
 
    return true;
}; 

// Find all numbers disappeared in an a Array

var findDisappearedNumbers = function(nums) {
    let obj={}
    for(let n of nums){
        obj[n]=1
    }     
    let arr=[]
    for(let i=1;i<=nums.length;i++){
        if(!obj[i]) arr.push(i)
    }
    return arr
};