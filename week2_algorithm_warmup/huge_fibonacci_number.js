/**
 * 
 * @param {*} n 
 * @param {*} m 
 * given n and m return nth fibonacci number modulo m
 */

function fibonacci_number_modulo(n, m) {
    let fib_nums = [];
    fib_nums.push(0)
    fib_nums.push(1)
    for (let i = 2; i <= n; i++) {
        const num = fib_nums[i - 1] + fib_nums[i - 2];
        fib_nums.push(num % m);
    }
    console.log(`Fibo number ${n} % ${m} is ${fib_nums[n]}`);
    return fib_nums[n];
}

function test() {
    for (let i = 2; i <= 30; i++) {
        fibonacci_number_modulo(i, 51);
    }
}

test();