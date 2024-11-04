"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Your task is to split the chocolate bar of given dimension  n X m into small squares.
// Each squares is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.
// For example, if you are given a chocolate bar of size 2x1 you can split it to a single squares in just on break,
//  but for size 3x1 you must perform two breaks.
// If input data is invalid you should return 0 ( as in no breaks are needed if we do not ave any chocolate to split).
// Input will always be non-negative integer.
const chai_1 = require("chai");
const breakeChocolate = (n, m) => {
    if (n === 0 || m === 0)
        return 0;
    return n * m - 1;
};
describe('breakeChocolate', () => {
    it("Should handle a single square of chocolate", () => {
        chai_1.assert.deepEqual(breakeChocolate(1, 1), 0);
    });
    it("Should handle a bigger square of chocolate", () => {
        chai_1.assert.deepEqual(breakeChocolate(5, 5), 24);
    });
    it("Should handle when one side is equal to zero", () => {
        chai_1.assert.deepEqual(breakeChocolate(0, 5), 0);
        chai_1.assert.deepEqual(breakeChocolate(5, 0), 0);
    });
    it("Should handle larger values within constraints", () => {
        chai_1.assert.deepEqual(breakeChocolate(10, 10), 99);
    });
});
