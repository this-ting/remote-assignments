/*
Summer 2019 / Web Class 
Remote Learning Assignment - Week 2
Assignment 1: Function and Array
Complete the function below to find the ​max number​ of passing numbers. 
You may refer to this ​MDN document​ about rest parameters of the function.
Reminder:​ you ​cannot​ use Math.max() to complete this assignment
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters


function max(...numbers){
    // your code here, for-loop method preferred
}

max(1, 2, 4, 5);​ // result to 5
max(5, 2, 7, 1, 6); ​// result to 7
*/


function max(arg){
    var greater = 0;
    for (var i = 0 ; i < arg.length; i ++ ) {
        if (arg[i] > greater) {
            greater = arg[i];
        } 
    }
    console.log(greater);
}

max([5, 2, 7, 1, 6]);
max([1, 2, 4, 5]);
