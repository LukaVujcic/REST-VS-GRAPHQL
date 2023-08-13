import express, { Request, Response, Router } from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../services/userService';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    const users = getUsers();
    res.json(users);
});

router.get('/:userId', (req: Request, res: Response) => {
    const userId: number = parseInt(req.params.userId);
    const user = getUserById(userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});

router.post('/', (req: Request, res: Response) => {
    const { name } = req.body;
    const newUser = createUser(name);
    res.status(201).json(newUser);
});
  
router.put('/:userId', (req: Request, res: Response) => {
    const userId: number = parseInt(req.params.userId);
    const { name } = req.body;
    const success = updateUser(userId, name);
    if (success) {
        res.json({ message: 'User updated successfully' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});
  
router.delete('/:userId', (req: Request, res: Response) => {
    const userId: number = parseInt(req.params.userId);
    const success = deleteUser(userId);
    if (success) {
        res.json({ message: 'User deleted successfully' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

export default router;
