// Calculate the total number of possible combinations for a given set of characters,
// regardless of whether the combination is an actual word.
// In other words, if a 5-letter word is given,
// calculate the factorial of 5 (5!), which is 1*2*3*4*5.

// // Method 1: Explicit method with for-loop // //
// function numPermutations(letters) {
//     let total;
//     for (let i=1; i<=letters.length; i++) {
//         if (total === undefined) {
//             total = i;
//             continue;
//         }
//         total *= i;
//     }

//     return total;
// }

// // Method 2: Recursive function with slice // //
// slice(n) means to remove n characters from the left of the string.
// This function is recursive because it calls itself.
function numPermutations(letters) {
    // End when the number of letters are left with only 1.
    // This base case is COMPULSORY! Otherwise, there'd be Stack Overflow error.
    if (letters.length === 1) {
        return 1;
    }
    return letters.length * numPermutations(letters.slice(1));
}

console.log(numPermutations("abcd"));

