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

export const createUser = (name: string): User =>{
    const newUser: User = {
      id: users.length + 1,
      name,
    };
    
    users.push(newUser);

    return newUser;
}

export const updateUser = (userId: number, name: string): boolean => {
    const userIndex = users.findIndex((user) => user.id === userId);

    if (userIndex === -1) {
      return false;
    }

    users[userIndex].name = name;

    return true;
}

export const deleteUser = (userId: number): boolean => {
    const userIndex = users.findIndex((user) => user.id === userId);

    if (userIndex === -1) {
      return false;
    }

    users = users.filter((user) => user.id !== userId);

    return true;
}