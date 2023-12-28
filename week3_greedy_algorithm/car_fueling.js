/**
 * 
 * @param {Number} d 
 * @param {Number} m 
 * @param {Array<Number>} stops 
 * d is the distance between cities
 * m is the max miles on full tanl
 * stops is the array of numbers representing distance at 
 * which fuel stations are located
 * find the mnimum number of refills required
 */
function min_stops(d, m, stops) {
    let refillCount = 0;
    let remainingCapacity = m;
    let remainingDistance = d;
    const numStops = stops.length;
    for (let i = 1; i < numStops; i++) {
        remainingCapacity -= stops[i] - stops[i - 1];
        remainingDistance -= stops[i];
        let nextStopDistance = i === numStops - 1 ? d - stops[i] : stops[i + 1] - stops[i];
        if (remainingCapacity < 0) {
            refillCount = -1;
            break;
        }
        if (nextStopDistance > remainingCapacity) {
            refillCount++;
            remainingCapacity = m;
        }
    }
    return refillCount;
}

console.log(min_stops(950, 400, [0, 200, 375, 550, 750]));
console.log(min_stops(10, 3, [0, 1, 2, 5, 9]));
console.log(min_stops(200, 250, [0, 100, 150]));