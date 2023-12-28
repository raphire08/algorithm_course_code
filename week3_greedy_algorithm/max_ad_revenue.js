/**
 * 
 * @param {Array<Number>} prices 
 * @param {Array<Number>} clicks 
 * given number of clicks per day in ad slot
 * and prices per click by diff adv
 * returns max revenue possible
 */

function max_revenue(prices, clicks) {
    prices.sort((a, b) => a - b);
    clicks.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < prices.length; i++) {
        sum += prices[i] * clicks[i];
    }
    return sum;
}

console.log(max_revenue([23], [39]));
console.log(max_revenue([2, 3, 9], [7, 4, 2]));

