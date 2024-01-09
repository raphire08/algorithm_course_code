function majority_element(nums, l, r) {
    if (l === r) {
        return nums[l];
    }

    let mid = Math.floor((l + r) / 2);

    let leftMajority = majority_element(nums, l, mid);
    let rightMajority = majority_element(nums, mid + 1, r);

    if (leftMajority === rightMajority) {
        return leftMajority;
    }

    let leftCount = countFrequency(nums, leftMajority, l, r);
    let rightCount = countFrequency(nums, rightMajority, l, r);

    if (leftCount > (r - l + 1) / 2) {
        return leftCount;
    } else if (rightCount > (r - l + 1) / 2) {
        return rightCount;
    } else {
        return -1;
    }
}

function countFrequency(nums, value, l, r) {
    let count = 0;
    for (let i = l; i <= r; i++) {
        if (nums[i] === value) {
            count++;
        }
    }
    return count;
}

function majority_check(nums) {
    let majority = majority_element(nums, 0, nums.length - 1);
    return majority === -1 ? 0 : 1;
}

console.log(majority_check([2, 3, 9, 2, 2]));
console.log(majority_check([1, 1, 1, 0, 0, 0, 0]));  