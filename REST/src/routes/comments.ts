import express, { Request, Response, Router } from 'express';
import { getCommentsByArticleId } from '../services/commentService';

const router: Router = express.Router();

router.get('/articles/:articleId', (req: Request, res: Response) => {
    const articleId: number = parseInt(req.params.articleId);
    const comments = getCommentsByArticleId(articleId);
    res.json(comments);
});

export default router;
