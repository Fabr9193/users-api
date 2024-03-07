import { userMock } from "../../../test/mocks/user.mock";
import { UserRepository } from "../../domain/user";
import { DatabaseUserRepository } from "./user.repository";

describe('user repository', () => {
    let userRepository: UserRepository;
    const user = {
        id: '1',
        email: '',
        password: '123',
        firstName: '',
        lastName: '',
    };

    beforeEach(() => {
        userRepository = new DatabaseUserRepository();
    });

    it('should create a user', async () => {
        // Given
        userRepository.register = jest.fn().mockResolvedValue(user);

        // When
        const newUser = await userRepository.register(user);

        // Then
        expect(newUser).toEqual(user);
    });

    it('should find all users', async () => {
        // Given
        userRepository.findAll = jest.fn().mockResolvedValue([user]);

        // When
        const allUsers = await userRepository.findAll();

        // Then
        expect(allUsers).toEqual([user]);
    });

    it('should fetch user by id', async () => {
        // Given
        const userId = '1';
        userRepository.fetchById = jest.fn().mockResolvedValue(user);

        // When
        const fetchedUser = await userRepository.fetchById(userId);

        // Then
        expect(fetchedUser).toEqual(user);
    });

    it('should find user by email', async () => {
        // Given
        const email = userMock.email;
        userRepository.findByEmail = jest.fn().mockResolvedValue(user);

        // When
        const foundUser = await userRepository.findByEmail(email);
        // Then
        expect(foundUser).toEqual(user);
    });

    it('should return the user when an update is successful', async () => {
        // Given
        const userId = '1';
        userRepository.update = jest.fn().mockResolvedValue(user);

        // When
        const updatedUser = await userRepository.update(userId, user);

        // Then
        expect(updatedUser).toEqual(user);
    });
});
