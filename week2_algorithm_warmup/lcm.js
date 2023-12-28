import { gcd } from "./gcd.js";

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

console.log(lcm(30, 40));
console.log(lcm(761457, 614573));