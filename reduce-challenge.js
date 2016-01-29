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

console.log(JSON.stringify( compute(numbers) ));