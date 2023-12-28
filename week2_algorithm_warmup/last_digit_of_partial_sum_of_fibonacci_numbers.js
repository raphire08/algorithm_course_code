
import { last_digit_sum_of_fibo_numbers } from "./last_digit_of_sum_of_fibonacci_numbers.js";

function last_digit_of_sum_of_partial_numbers(m, n) {
    let last_digit = last_digit_sum_of_fibo_numbers(n) - last_digit_sum_of_fibo_numbers(m - 1);
    if (last_digit < 0) {
        last_digit = 10 + last_digit;
    }
    console.log(`last digit of fobo numbers from ${m} to ${n} is ${last_digit}`);
    return last_digit;
}

last_digit_of_sum_of_partial_numbers(10, 10);
last_digit_of_sum_of_partial_numbers(3, 7);