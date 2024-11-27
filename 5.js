// Students Homework 

var busyStudent = function(startTime, endTime, queryTime) {
    return startTime.filter((t, i) => queryTime >= t &&
     queryTime <= endTime[i]).length;  
  };