import request from 'supertest';
import app from '../../../app';
import { userMock } from '../../../test/mocks/user.mock';
import UserModel from '../database/models/user.models';
import { jest } from '@jest/globals';


// Mock the Sequelize models
jest.mock('../database/models/user.models'); 

describe('users endpoint - integration test', () => {
    describe('create user' , () => {
        it('should return 201 and the user', async () => {
            // Mock the create method of the Sequelize model
            (UserModel.create as jest.Mock).mockResolvedValue({...userMock, id:"test"}); 

            const response = await request(app)
                .post('/users')
                .send({ userMock });

            expect(response.status).toBe(201);
        });
    });
    describe('get user by id' , () => {
        it('should return 200 and the user', async () => {
            // Mock the findByPk method of the Sequelize model
            (UserModel.findByPk as jest.Mock).mockResolvedValue(userMock); 

            const response = await request(app)
                .get('/users/1');

            expect(response.status).toBe(200);
        });
    });
});