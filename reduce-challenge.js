//Write a function that takes an array and uses the reduce() method to return an object with the highest, lowest, second highest and second lowest numbers.

var numbers = [1000, 1000, 800, 700, 600, 100, 100];

function compute (array) {
    var result = {}
    
    result.highest = array.reduce( function(prev, curr, i) {
        if (curr > prev) {
            result.highestIndex = i;
            return curr;
        }
        else {
            return prev;
        }
    }, -Infinity);
    
    result.lowest = array.reduce( function(prev, curr, i) {
        if (curr < prev) {
            result.lowestIndex = i;
            return curr;
        }
        else {
            return prev;
        }
    }, Infinity);
    
    result.secondHighest = array.reduce( function(prev, curr, i) {
        if (i === result.highestIndex) return prev;
        else return Math.max(prev, curr);
    }, -Infinity);
    
    result.secondLowest = array.reduce( function(prev, curr, i) {
        if (i === result.lowestIndex) return prev;
        else return Math.min(prev, curr);
    }, Infinity)
    
    delete result.highestIndex;
    delete result.lowestIndex;
    
    return result;
}

// function compute (numbers) {
//     var results = {};
    
//     results.highest = numbers.reduce( function(previous, current) {
//         return Math.max(previous, current);
//     });
    
//     // console.log("Highest -> " + results.highest)
    
//     results.lowest = numbers.reduce( function(previous, current) {
//         return Math.min(previous, current);
//     });
    
//     //console.log("Lowest -> " + results.lowest)
    
//     results.secondHighest = numbers.reduce( function(previous, current) {
//         if (current === results.highest) {
//             console.log(previous);
//             return previous;
//         }
//         else if (previous === results.highest) {
//             console.log(current);
//             return current;
//         }
//         else {
//             console.log(Math.max(previous,current));
//             return Math.max(previous, current);
//         }
//     });
    
//     results.secondLowest = numbers.reduce( function(previous, current) {
//         if (current === results.lowest) return previous;
//         else if (previous === results.lowest) return current;
//         else return Math.min(previous, current);
//     })
    
//     return results;
// }

console.log(JSON.stringify( compute(numbers) ));