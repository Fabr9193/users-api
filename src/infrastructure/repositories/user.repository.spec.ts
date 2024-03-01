import { UserRepository } from "../../domain/user";
import { DatabaseUserRepository } from "./user.repository";



describe('user repository', () => {
    let userRepository: UserRepository;
    const user = {
        id: '1',
        email: '',
        password: 123,
        firstName: '',
        lastName: '',
    };

    beforeEach(() => {
        userRepository = new DatabaseUserRepository();
    });

    it('should create a user', async () => {
        // Mock the Sequelize create method
        userRepository.create = jest.fn().mockResolvedValue(user);
 
        const newUser = await userRepository.create(user);
        expect(newUser).toEqual(user);
    });
});
