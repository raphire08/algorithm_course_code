

/**
 * 
 * @param {Number} n 
 * @param {Array<Array<Number>>} coordinates 
 * given n lines and starting and ending
 * points for those lines as coordinates
 * find the min points required to touch all lines
 */
function min_points(n, coordinates) {
    let num_points = 0;
    let points = [];
    while (coordinates.length > 0) {
        let min_end_point = find_smallest_end_point(coordinates);
        let rem_coordinates = [];
        for (let i = coordinates.length - 1; i > 0; i--) {
            if (!line_in_point(min_end_point, coordinates[i])) {
                rem_coordinates.push(coordinates[i]);
            }
        }
        coordinates = rem_coordinates;
        num_points++;
        points.push(min_end_point);
    }
    console.log(`Min Points: ${num_points}`);
    console.log(`Points: ${points}`);
}

function find_smallest_end_point(coordinates) {
    let min_end_point = Infinity;
    for (let coordinate of coordinates) {
        if (coordinate[1] < min_end_point) {
            min_end_point = coordinate[1];
        }
    }
    return min_end_point;
}

function line_in_point(end_point, coordinate) {
    return end_point >= coordinate[0];
}


const n = 4;
const coordinates = [[4, 7], [1, 3], [2, 5], [5, 6]];
min_points(n, coordinates);