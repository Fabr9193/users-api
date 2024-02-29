import request from 'supertest';
import app from '../../app.ts';

describe('users endpoint - integration test', () => {
    describe('create user' , () => {
        it('should return 201 and the user', async () => {
            const response = await request(app)
                .post('/users')
                .send({});
                expect(response.status).toBe(201);
        });
});
});