import express, { Request, Response, Router } from 'express';
import { getArticles, getArticleById } from '../services/articleService';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    const articles = getArticles();
    res.json(articles);
});

router.get('/:id', (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const article = getArticleById(id);
    if (!article) {
        return res.status(404).json({ message: 'Article not found' });
    }
    res.json(article);
});

export default router;
