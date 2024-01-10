function merge_sort(nums, l, r) {
    if (l === r) {
        return [nums[l]];
    }
    let mid = Math.floor((l + r) / 2);

    let left = merge_sort(nums, l, mid);
    let right = merge_sort(nums, mid + 1, r);

    let mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    for (let i = 1; i <= left.length + right.length; i++) {
        if (leftIndex === left.length) {
            for (let j = rightIndex; j < right.length; j++) {
                mergedArray.push(right[j]);
            }
            break;
        }

        if (rightIndex === right.length) {
            for (let j = leftIndex; j < left.length; j++) {
                mergedArray.push(left[j]);
            }
            break;
        }

        if (left[leftIndex] <= right[rightIndex]) {
            mergedArray.push(left[leftIndex]);
            leftIndex++;
        } else if (right[rightIndex] < left[leftIndex]) {
            mergedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return mergedArray;
}

console.log(merge_sort([2, 3, 9, 2, 9], 0, 4));