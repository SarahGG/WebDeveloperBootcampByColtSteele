function average(testScores) {
    let sum = 0;

    testScores.forEach(function(score) {
        sum += score;
        });

    const average = sum / testScores.length;

    return Math.abs(average);
}

const scores = [90,98,89,100,100,86,94];
const scores2 = [40,65,77,82,80,54,73,63,95,49];

console.log(average(scores));
console.log(average(scores2));