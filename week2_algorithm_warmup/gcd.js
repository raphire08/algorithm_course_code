function gcd(a, b) {
    let lower_number;
    let higher_number;
    if (a === b) {
        return a;
    } else if (b === 0) {
        return a;
    } else if (a < b) {
        lower_number = a;
        higher_number = b;
    } else {
        lower_number = b;
        higher_number = a;
    }

    return gcd(lower_number, higher_number % lower_number);
}

console.log(gcd(15, 6));
console.log(gcd(40, 30));
console.log(gcd(30, 40));
console.log(gcd(28851538, 1183019));

export { gcd }