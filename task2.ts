// Your task is to split the chocolate bar of given dimension  n X m into small squares.
// Each squares is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.
// For example, if you are given a chocolate bar of size 2x1 you can split it to a single squares in just on break,
//  but for size 3x1 you must perform two breaks.
// If input data is invalid you should return 0 ( as in no breaks are needed if we do not ave any chocolate to split).
// Input will always be non-negative integer.
import chai, {assert} from 'chai';

const breakeChocolate = (n: number, m: number): number => {
    if (n === 0 || m === 0) return 0;
    return n * m - 1;
}

describe('breakeChocolate', () => {
    // /Deep Equality: deepEqual checks the entire structure -> ME KQYR HALA ME LEXU PER DEEP EQUAL..
    it("Should handle a single square of chocolate", () => {
        assert.deepEqual(breakeChocolate(1, 1), 0);
        // This asserts that calling breakeChocolate(1, 1) should return 0, 
        // as there are no breaks needed for a 1x1 chocolate.

    })
    it("Should handle a bigger square of chocolate", () => {
        assert.deepEqual(breakeChocolate(5, 5), 24);
        // This test checks a larger square chocolate bar of size 5x5, 
        // expecting it to require 24 breaks to separate into individual squares.
    })
    it("Should handle when one side is equal to zero", () => {
        assert.deepEqual(breakeChocolate(0, 5), 0);
        assert.deepEqual(breakeChocolate(5, 0), 0);
        //This test ensures that if either dimension is zero, 
        // the function correctly returns 0, validating both cases.
    })
    it("Should handle larger values within constraints", () => {
        assert.deepEqual(breakeChocolate(10, 10), 99);
        //This test checks a 10x10 chocolate bar, 
        //which requires 99 breaks to split into 1x1 squares.
    })



    /// IMPROVMENTS????????
});