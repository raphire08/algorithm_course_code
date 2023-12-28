/**
 * 
 * @param {number} n 
 * @param {number} W 
 * @param {Array<number>} weights 
 * @param {Array<number>} values
 * find the maximum value given capacity W
 * and weights and values of items
 */
function max_value_of_loot(n, W, weights, values) {
    let items = [];
    for (let i = 0; i < n; i++) {
        const item = {
            'weight': weights[i],
            'value': values[i],
            'per_unit': values[i] / weights[i]
        }
        items.push(item);
    }
    items.sort((a, b) => b['per_unit'] - a['per_unit']);

    let avail_weight = W;
    let max_value = 0;
    for (let item of items) {
        if (avail_weight <= item['weight']) {
            max_value += item['per_unit'] * avail_weight;
            break;
        } else {
            max_value += item['value'];
            avail_weight -= item['weight'];
        }
    }
    return max_value;
}

const n = 3;
const W = 50;
const weights = [20, 50, 30];
const values = [60, 100, 120];

console.log(max_value_of_loot(n, W, weights, values));