//Write a function that takes an array and uses the reduce() method to return an object with the highest, lowest, second highest and second lowest numbers.

var numbers = [5, 50, 500, 1000, 1500, 1500, 1000, 800, 700, 600, 300, 100, -100, 75, 250];

function compute (array) {
    var result = {
        highest: -Infinity,
        secondHighest: -Infinity,
        secondLowest: Infinity,
        lowest: Infinity
    };
    
    return array.reduce( function( acc, val, index) {
        if (val > acc.highest) {
            acc.secondHighest = acc.highest;
            acc.highest = val;
        }
        else if (val > acc.secondHighest) {
            acc.secondHighest = val;
        }
        
        if (val < acc.lowest) {
            acc.secondLowest = acc.lowest;
            acc.lowest = val;
        }
        else if (val < acc.secondLowest) {
            acc.secondLowest = val;
        }
        
        return acc;
    }, result); 
}

// function compute (array) {
//     var result = {};
    
//     result.highest = array.reduce( function(prev, curr, i) {
//         if (curr > prev) {
//             result.highestIndex = i;
//             return curr;
//         }
//         else {
//             return prev;
//         }
//     }, -Infinity);
    
//     result.lowest = array.reduce( function(prev, curr, i) {
//         if (curr < prev) {
//             result.lowestIndex = i;
//             return curr;
//         }
//         else {
//             return prev;
//         }
//     }, Infinity);
    
//     result.secondHighest = array.reduce( function(prev, curr, i) {
//         if (i === result.highestIndex) return prev;
//         else return Math.max(prev, curr);
//     }, -Infinity);
    
//     result.secondLowest = array.reduce( function(prev, curr, i) {
//         if (i === result.lowestIndex) return prev;
//         else return Math.min(prev, curr);
//     }, Infinity);
    
//     delete result.highestIndex;
//     delete result.lowestIndex;
    
//     return result;
// }

console.log(JSON.stringify( compute(numbers) ));