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
        // Mock the Sequelize create method
        userRepository.register = jest.fn().mockResolvedValue(user);
 
        const newUser = await userRepository.register(user);
        expect(newUser).toEqual(user);
    });
    
    it('should find all users', async () => {
        // Mock the Sequelize findAll method
        userRepository.findAll = jest.fn().mockResolvedValue([user]);

        const allUsers = await userRepository.findAll();
        expect(allUsers).toEqual([user]);
    });

    it('should fetch user by id', async () => {
        const userId = '1';
        // Mock the Sequelize findByPk method
        userRepository.fetchById = jest.fn().mockResolvedValue(user);

        const fetchedUser = await userRepository.fetchById(userId);
        expect(fetchedUser).toEqual(user);
    });
});
