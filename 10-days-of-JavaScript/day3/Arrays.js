/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    let largest_num=0;
    let second_largest_num=0;
    
    nums.map( function(item) {
        if(largest_num<item) {
           largest_num = item;
        }
    });
    
    nums.map( function(item) {
        if(second_largest_num<item && largest_num>item) {
           second_largest_num = item;
        }
    });
    
    return second_largest_num;
}