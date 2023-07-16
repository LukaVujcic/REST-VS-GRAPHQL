import express, { Request, Response, Router } from 'express';
import { getUsers, getUserById } from '../services/userService';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    const users = getUsers();
    res.json(users);
});

router.get('/:id', (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const user = getUserById(id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});

export default router;
