/**
 * 
 * @param {*} n 
 * @returns number
 * given a number n, function returns the last digit
 *  of a fibonacci number
 */

function last_digit_of_fibonacci_number(n) {
    let fib_nums = [];
    fib_nums.push(0)
    fib_nums.push(1)
    for (let i = 2; i <= n; i++) {
        const lastDigit = (fib_nums[i - 1] + fib_nums[i - 2]) % 10;
        fib_nums.push(lastDigit);
    }
    console.log(`Last digit of ${n}th fibo number is: ${fib_nums[n]}`);
    return fib_nums[n];
}

last_digit_of_fibonacci_number(3);
last_digit_of_fibonacci_number(139);
last_digit_of_fibonacci_number(91239);

function runTest() {
    for (let i = 1; i <= 100; i++) {
        last_digit_of_fibonacci_number(i);
    }
}

export { last_digit_of_fibonacci_number };


