const request = require('supertest');
const app = require('../../app');
const assert = require('assert');

describe('Integration Tests', () => {
    it('should return the sum of two numbers', async () => {
        const response = await request(app)
            .get('/sum/5/3')
            .expect(200);

            assert.strictEqual(response.body.result, 8, 'The sum of 5 and 3 should be 8');
    });

    it('should return the product of two numbers', async () => {
        const response = await request(app)
            .get('/mult/5/3')
            .expect(200);
            
            assert.strictEqual(response.body.result, 15, 'The product of 5 and 3 should be 15');
    });

    it('should return the division of two numbers', async () => {
        const response = await request(app)
            .get('/div/10/2')
            .expect(200);

            assert.strictEqual(response.body.result, 5, 'The division of 10 and 2 should be 5');
    });

    it('should return the difference of two numbers', async () => {
        const response = await request(app)
            .get('/substract/10/5')
            .expect(200);

            assert.strictEqual(response.body.result, 5, 'The difference of 10 and 5 should be 5');
    });
});