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