function exercise1(coins) {
    // sort array first
    coins.sort((a, b) => a - b);

    // keeping track of the current change
    let sumChange = 0;
    // going through coins
    for (let i = 0; i < coins.length; i++) {
        const coin = parseInt(coins[i], 10);
        if (Number.isNaN(coin)) {
            continue;
        }
        // if the current coin is lower than the
        // summed change + 1 then we found the minimum
        if (coin > sumChange + 1) {
            return sumChange + 1;
        }

        // while we didnt find the minimum we keep summing the coins
        // it means any previous value from the current coin + 1 can have its change
        sumChange += coin;
    }

    // otherwise return change + 1
    return sumChange + 1;
}

console.log('exercise 1 - test case 1 - [5, 7, 1, 1, 2, 3, 22]', exercise1(['5', 7, 1, 1, 2, 3, 22, 'marcelo']));
console.log('exercise 1 - test case 2 - [1, 1, 1, 1, 1]', exercise1([1, 1, 1, 1, 1]));
console.log('exercise 1 - test case 3 - [1, 5, 1, 1, 1, 10, 15, 20, 100]', exercise1([1, 5, 1, 1, 1, 10, 15, 20, 100]));

function exercise2(numbers) {
    // a number times itself then a simple javascript sort
    return numbers.map(num => num * num).sort((a, b) => a - b)
}
console.log('----------------------------------');
console.log('exercise 2 - test case 1 - [1, 2, 3, 5, 6, 8, 9]', exercise2([1, 2, 3, 5, 6, 8, 9]));
console.log('exercise 2 - test case 2 - [-2, -1]', exercise2([-2, -1]));
console.log('exercise 2 - test case 3 - [-10, -5, 0, 5, 10]', exercise2([-10, -5, 0, 5, 10]));