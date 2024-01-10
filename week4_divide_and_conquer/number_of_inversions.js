/**
 * Given an array of integers
 * find the number of inversions
 * count of i < j and ai > aj
 */
function inversions(nums, l, r) {
    if (l === r) {
        const numInversions = 0;
        return { mergedArray: [nums[l]], numInversions };
    }
    let mid = Math.floor((l + r) / 2);

    let { mergedArray: left, numInversions: leftInversions } = inversions(nums, l, mid);
    let { mergedArray: right, numInversions: rightInversions } = inversions(nums, mid + 1, r);

    let mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    let numInversions = 0;
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
            numInversions += left.length - leftIndex;
            mergedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return {
        mergedArray, numInversions: leftInversions + rightInversions + numInversions
    };
}

const { _, numInversions } = inversions([2, 3, 9, 2, 9], 0, 4);
console.log(numInversions);