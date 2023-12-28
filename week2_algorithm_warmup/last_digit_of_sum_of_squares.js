function last_digit_of_sum_of_squares(n) {
    let fib_nums = [];
    fib_nums.push(0)
    fib_nums.push(1)
    for (let i = 2; i <= n + 1; i++) {
        const lastDigit = (fib_nums[i - 1] + fib_nums[i - 2]) % 10;
        fib_nums.push(lastDigit);
    }
    let last_digit = (fib_nums[n] * fib_nums[n + 1]) % 10;
    console.log(`Last digit of sum of squares ${n} fibo numbers is: ${last_digit}`);
    return last_digit;
}

last_digit_of_sum_of_squares(5);
last_digit_of_sum_of_squares(7);
last_digit_of_sum_of_squares(73);