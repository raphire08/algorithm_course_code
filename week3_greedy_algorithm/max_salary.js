/**
 * 
 * @param {Array<number>} numbers 
 * given a sequence of positive integers find the
 * largest integer by concatenating them
 */
function max_salary(numbers) {
    let stringifiedNums = numbers.map((e) => e.toString());
    stringifiedNums.sort((a, b) => b - a);
    let largestNum = stringifiedNums.reduce((prev, curr) => prev.concat(curr));
    return parseInt(largestNum);
}

console.log(max_salary([91, 204565]));
