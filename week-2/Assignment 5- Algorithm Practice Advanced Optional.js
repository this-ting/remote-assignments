/*
Assignment 5: Algorithm Practice (Advanced Optional)
Given an array of integers, return indices of the two numbers such that they 
add up to aspecific target. You may assume that each input would have exactly 
one solution, and you may not use the same element twice.

function twoSum(nums, target){
    // your code here
}

//For example:
    twoSum([2, 7, 11, 15], 9);
Should returns:
    [0, 1]
Because:
    nums[0]+nums[1] is 9
    
*/

function twoSum(nums, target){
    for (i = 0 ; i < nums.length ; i++) {  
        for (b = i + 1 ; b < nums.length ; b++) {
            if (nums[i] + nums[b] === target) {
                console.log('['+ i + ',' + b + ']');
            } 
        } 
    }
    
}

twoSum([2, 7, 11, 15], 9);
