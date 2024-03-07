import request from 'supertest';
import app from '../../../app';
import { userMock } from '../../../test/mocks/user.mock';
import UserModel from '../database/models/user.models';
import { jest } from '@jest/globals';


// Mock the Sequelize models
jest.mock('../database/models/user.models'); 

describe('users endpoint - integration test', () => {
    describe('get user by id' , () => {
        it('should return 200 and the user', async () => {
            // Mock the findByPk method of the Sequelize model
            (UserModel.findByPk as jest.Mock).mockResolvedValue(userMock); 

            const response = await request(app)
                .get('/users/1');

            expect(response.status).toBe(200);
        });
    });
    describe('get users list' , () => {
        it('should return 200 and the users list', async () => {
            // Mock the findByPk method of the Sequelize model
            (UserModel.findAll as jest.Mock).mockResolvedValue([userMock]); 

            const response = await request(app)
                .get('/users');

            expect(response.status).toBe(200);
        });
    });

    describe('update user' , () => {
        it('should return 200 and the updated user', async () => {
            // Mock the update method of the Sequelize model
            (UserModel.update as jest.Mock).mockResolvedValue([1, [userMock]]); 

            const response = await request(app)
                .put('/users/1')
                .send({ userMock });

            expect(response.status).toBe(200);
        });
    });
});