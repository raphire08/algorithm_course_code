/**
 * 
 * @param {number} nums 
 * @param {number} n 
 * given a sorted array of nums find the index of n
 * or else return -1;
 */
function find_element(nums, n) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const middle = Math.floor((left + right) / 2);
        if (nums[middle] === n) {
            return middle;
        } else if (nums[middle] < n) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return -1;
}

console.log(find_element([1, 2, 5, 8, 34, 45], 67));