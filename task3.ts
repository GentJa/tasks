// We need the ability to divide an unknow integer into a given number of even parts --
// or at least as even as they can be. The sum of the parts should be original value, but
// each part should be an integer, and they should be as close as possible.
// Complete the funnction so that it returns an array of integer representing the parts.
// Ignoring the order of the parts, there is only on valid soultion for each input to your function.
// Also, there is no reason to test for edge cases: the input to your function will always be valid for this challenge.


export default class Challenge {
    static splitInteger (num :number, parts:number) : number[] {
        const baseSize = Math.floor(num / parts);
        const remainder = num % parts;
        const result = Array(parts).fill(baseSize);

        for(let i = parts - remainder; i < parts; i++) {
            result[i] += 1;
        }
        return result;
    }
}


describe('Split integer',() => {
    it("Basic test", () => {
        assert.deepEqual(Challenge.splitInteger(10,1), [10]);
        assert.deepEqual(Challenge.splitInteger(10,5), [2,2,2,2,2]);
        assert.deepEqual(Challenge.splitInteger(20,6), [3,3,3,3,4,4]);
    })
})