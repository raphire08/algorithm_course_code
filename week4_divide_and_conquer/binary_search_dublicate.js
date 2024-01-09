/**
 * 
 * @param {number} nums 
 * @param {number} n 
 * given a sorted array of nums with repeated integers find the index of n
 * or else return -1;
 */
function find_element(nums, n) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        console.log(middle);
        if (nums[middle] === n && (nums[middle] === 0 || nums[middle - 1] != nums[middle])) {
            return middle;
        } else if (nums[middle] >= n) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}

console.log(find_element([2, 4, 4, 4, 7, 7, 9], 9));