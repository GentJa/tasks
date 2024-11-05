// We need the ability to divide an unknow integer into a given number of even parts --
// or at least as even as they can be. The sum of the parts should be original value, but
// each part should be an integer, and they should be as close as possible.
// Complete the funnction so that it returns an array of integer representing the parts.
// Ignoring the order of the parts, there is only on valid soultion for each input to your function.
// Also, there is no reason to test for edge cases: the input to your function will always be valid for this challenge.


export default class Challenge {
    static splitInteger (num :number, parts:number) : number[] {
// This line defines a static method splitInteger that takes two parameters:        
// num: A number that represents the integer to be split.
// parts: A number that specifies how many parts to split the integer into.
// The return type of this method is an array of numbers (number[]).

        const baseSize = Math.floor(num / parts);
// This line calculates the base size of each part by dividing num by parts and using
//  Math.floor to round down to the nearest integer. This ensures that every part will have at least this many whole units.
        const remainder = num % parts;
// This line calculates the remainder when num is divided by parts. This value indicates how many 
// extra units need to be distributed to some of the parts to ensure the total adds up to num.        
        const result = Array(parts).fill(baseSize);
// This line creates an array called result with a length equal to parts.
//  The array is filled with baseSize, meaning that each part starts with the base size calculated earlier.

        for(let i = parts - remainder; i < parts; i++) {
// This line starts a for loop that will run from the index parts - remainder to parts - 1. The purpose of this loop is to distribute the extra units (if any) calculated from the remainder.
// The starting index, parts - remainder, ensures that only the first remainder number of parts will receive an extra unit.
            result[i] += 1;
            // Inside the loop, this line adds 1 to each of the parts from the index calculated in the previous line onward. 
            // This effectively distributes the remainder across the parts, ensuring that the total number of units in the array will equal num.
        }
        return result;
    }
}

// Example

// To illustrate how this method works, consider the following example:

//     If num is 10 and parts is 3, the function will:
//         Calculate baseSize = Math.floor(10 / 3) = 3.
//         Calculate remainder = 10 % 3 = 1.
//         Create an array result = [3, 3, 3].
//         The loop runs from index 2 (since 3 - 1 = 2) to 3, and adds 1 to the last part.
//         The final result will be [3, 3, 4].


describe('Split integer',() => {
    it("Basic test", () => {
        assert.deepEqual(Challenge.splitInteger(10,1), [10]);
        assert.deepEqual(Challenge.splitInteger(10,5), [2,2,2,2,2]);
        assert.deepEqual(Challenge.splitInteger(20,6), [3,3,3,3,4,4]);
    })
})