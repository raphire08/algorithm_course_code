/**
 * 
 * @param {Array<number>} numbers 
 * given a sequence of positive integers find the
 * largest integer by concatenating them
 */
function max_salary(numbers) {
    numbers.sort((a, b) => compare(b, a));
    let stringifiedNums = numbers.map((e) => e.toString());
    let largestNum = stringifiedNums.reduce((prev, curr) => prev.concat(curr));
    return parseInt(largestNum);
}

/**
 * 
 * @param {number} a 
 * @param {number} b
 * return negative if a is earlier than b
 * a is earlier than b if it has lower leading integer
 */
function compare(a, b) {
    let aDigits = getDigits(a);
    let bDigits = getDigits(b);
    let swap = false;
    if (aDigits.length > bDigits.length) {
        let tempDigits = aDigits;
        aDigits = bDigits;
        bDigits = tempDigits;
        swap = true;
    }
    for (let index = 0; index < aDigits.length; index++) {
        if (aDigits[index] > bDigits[index]) {
            return swap ? -1 : 1;
        } else if (aDigits[index] < bDigits[index]) {
            return swap ? 1 : -1;
        }
    }
    for (let index = aDigits.length; index < bDigits.length; index++) {
        if (bDigits[index] > bDigits[index - 1]) {
            return swap ? 1 : -1;
        } else if (bDigits[index] < bDigits[index - 1]) {
            return swap ? -1 : 1;
        }
    }
    return 0;
}

function getDigits(a) {
    let digits = [];
    while (a > 1) {
        let rem = a % 10;
        digits.unshift(rem);
        a /= 10;
        a = Math.floor(a);
    }
    return digits;
}

console.log(max_salary([26, 2234, 2222]));
