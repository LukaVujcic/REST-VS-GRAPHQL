import { User } from '../models/user';

let users: User[] = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' }
];

export const getUsers = (): User[] => {
    return users;
};

export const getUserById = (id: number): User | undefined => {
    return users.find(user => user.id === id);
};