const assert = require('assert');
const compute = require('../../service/compute');

describe('Unit Tests', () => {
    describe('sum()', () => {
        it('should return the sum of two numbers', () => {
            const result = compute.sum(6, 2);
            assert.equal(result, 8);
        });

        it('should return 0 when both numbers are 0', () => {
            const result = compute.sum(0, 0);
            assert.equal(result, 0);
        });
    });

    describe('multiply()', () => {
        it('should return the product of two numbers', () => {
            const result = compute.multiply(2, 3);
            assert.equal(result, 6);
        });
    });

    describe('divide()', () => {
        it('should return the quotient of two numbers', () => {
            const result = compute.divide(6, 2);
            assert.equal(result, 3);
        });

        it('should throw an error when dividing by 0', () => {
            assert.throws(() => {
                compute.divide(6, 0);
            }, Error, 'Division by zero is not allowed');
        });
    });

    describe('subtract()', () => {
        it('should return the difference of two numbers', () => {
            const result = compute.subtract(5, 3);
            assert.equal(result, 2);
        });
    });
});