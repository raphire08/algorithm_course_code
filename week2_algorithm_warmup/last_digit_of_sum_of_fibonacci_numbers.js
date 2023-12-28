/**
 * 
 * @param {*} n 
 * given a number n return the last 
 * digit of sum of fibonacci numbers upto n
 */

function last_digit_sum_of_fibo_numbers(n) {
    let last_digits = [];
    last_digits.push(0);
    last_digits.push(1);
    let last_digit_sum = 0;
    let sum = 1;
    if (n === 0) {
        last_digit_sum = 0;
    }
    if (n === 1) {
        last_digit_sum = 1;
    }
    for (let i = 2; i <= n; i++) {
        const lastDigit = (last_digits[i - 1] + last_digits[i - 2]) % 10;
        last_digits.push(lastDigit);
        last_digit_sum = (sum + lastDigit) % 10;
        sum = last_digit_sum;
    }
    console.log(`Last digit of sum of ${n} fibo numbers is ${last_digit_sum}`);
    return last_digit_sum;
}

function test() {
    // for (let i = 0; i <= 20; i++) {
    //     last_digit_sum_of_fibo_numbers(i);
    // }
    last_digit_sum_of_fibo_numbers(3);
    last_digit_sum_of_fibo_numbers(100);
    last_digit_sum_of_fibo_numbers(10099);
    //last_digit_sum_of_fibo_numbers(5454543423);
}

//test();

export { last_digit_sum_of_fibo_numbers };