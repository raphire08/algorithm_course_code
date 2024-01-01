/**
 * 
 * @param {number} n 
 * given a positive integer n
 * find out the maximum k such that
 * a1+a2+...+ak = n
 * a1,a2,...,ak are distinct
 */
function max_num(n) {
    let increment = 1;
    let k = 0;
    let nums = [];
    while (n > 0) {
        if (n >= increment) {
            k++;
            n -= increment;
            nums.push(increment);
            increment++;
        } else {
            let last_num = nums.pop();
            nums.push(last_num + n);
            n -= increment;
            increment++;
        }
    }
    console.log(`Max num: ${k}`);
    console.log(`nums: ${nums}`);
}

max_num(136);
