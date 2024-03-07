import request from 'supertest';
import app from '../../../app';
import { userMock } from '../../../test/mocks/user.mock';
import UserModel from '../database/models/user.models';
import { jest } from '@jest/globals';


// Mock the Sequelize models
jest.mock('../database/models/user.models'); 

describe('authentication endpoint - integration test', () => {
    describe('register user' , () => {
        it('should return 201 and the user', async () => {
            // Mock the create method of the Sequelize model
            (UserModel.create as jest.Mock).mockResolvedValue({...userMock, id:"test"}); 

            const response = await request(app)
                .post('/auth/register')
                .send({ userMock });

            expect(response.status).toBe(201);
        });
    });
    describe('login user' , () => {
        it('should return 200 and the token', async () => {
            // Mock the findOne method of the Sequelize model
            (UserModel.findOne as jest.Mock).mockResolvedValue(userMock); 

            const response = await request(app)
                .post('/auth/login')
                .send({ email: userMock.email, password: userMock.password });

            expect(response.status).toBe(200);
        });
    });
});