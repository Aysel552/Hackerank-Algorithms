const s = 7;
const t = 10;
const a = 4;
const b = 12;
const apples = [2, 3, -4];
const oranges = [3, -2, -4];

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let appleCount = 0;
    let orangeCount = 0;

    for (let i = 0; i < apples.length; i++){
        if (a + apples[i] >= s && a + apples[i] <= t) {
            appleCount++
        }
    }

    for (let j = 0; j < oranges.length; j++){
        if (b + oranges[j] <= t && b + oranges[j] >= s) {
            orangeCount++
        }
    }

    console.log(appleCount);
    console.log(orangeCount);

}






