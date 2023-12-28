/**
 * 
 * @param {number} money 
 * minimum number of coins required
 * to change the money using denominations
 * 1, 5 and 10
 */

function money_change(money) {
    let num_tens = (money - (money % 10)) / 10;
    money = money % 10;

    let num_fives = (money - (money % 5)) / 5;
    money = money % 5;

    return num_tens + num_fives + money;

}

console.log(money_change(2));
console.log(money_change(28));
console.log(money_change(0));
console.log(money_change(40));
console.log(money_change(45));
