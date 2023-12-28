
function fibonacci_number(n) {
    let fib_nums = [];
    fib_nums.push(0)
    fib_nums.push(1)
    for (let i = 2; i <= n; i++) {
        const num = fib_nums[i - 1] + fib_nums[i - 2];
        fib_nums.push(num);
    }
    return fib_nums[n];
}

console.log(fibonacci_number(1));
console.log(fibonacci_number(2));
console.log(fibonacci_number(10));
console.log(fibonacci_number(15));
console.log(fibonacci_number(45));