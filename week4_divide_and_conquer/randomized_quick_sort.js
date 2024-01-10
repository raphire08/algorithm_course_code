/**
 * 
 * @param {Array<number>} nums 
 * an integer array with duplicates elemements
 * sort the array using randomized quick sort in nlogn time
 */
function randomizedQuickSort(nums) {
    if (nums.length === 1) {
        return nums;
    }
    if (nums.length === 0) {
        return [];
    }
    let randomIndex = findRandomNumber(nums.length);
    let randomNumber = nums[randomIndex];
    console.log(randomNumber);

    let smallerNumbers = [];
    let largerNumbers = [];
    let sameNumbers = [];
    console.log(`nums: ${nums}`);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < randomNumber) {
            smallerNumbers.push(nums[i]);
        } else if (nums[i] > randomNumber) {
            largerNumbers.push(nums[i]);
        } else {
            sameNumbers.push(nums[i]);
        }
    }
    smallerNumbers = randomizedQuickSort(smallerNumbers);
    largerNumbers = randomizedQuickSort(largerNumbers);
    let sortedArray = [...smallerNumbers, ...sameNumbers, ...largerNumbers];
    console.log((smallerNumbers));
    console.log((sameNumbers));
    console.log((largerNumbers));
    console.log(sortedArray);
    console.log("\n");
    return sortedArray;
}

function findRandomNumber(value) {
    return Math.floor(Math.random() * value);
}

console.log(randomizedQuickSort([2, 3, 9, 2, 2, 10, 11, 1, 0, 0, 0, 0, 1]));