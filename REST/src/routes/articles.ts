import express, { Request, Response, Router } from 'express';
import { getArticles, getArticleById, createArticle, updateArticle, deleteArticle, likeArticle } from '../services/articleService';
import { getCommentsByArticleId } from '../services/commentService';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    const articles = getArticles();
    res.json(articles);
});

router.get('/:articleId', (req: Request, res: Response) => {
    const articleId: number = parseInt(req.params.articleId);
    const article = getArticleById(articleId);
    if (!article) {
        return res.status(404).json({ message: 'Article not found' });
    }
    res.json(article);
});

router.get('/:articleId/comments', (req: Request, res: Response) => {
  const articleId: number = parseInt(req.params.articleId);
  const comments = getCommentsByArticleId(articleId);
  
  res.json(comments);
});

router.post('/', (req: Request, res: Response) => {
    const { title, content, tags, categories, userId } = req.body;
    const newArticle = createArticle(title, content, tags || [], categories || [], userId);
    res.status(201).json(newArticle);
});


router.put('/:articleId', (req: Request, res: Response) => {
    const articleId: number = parseInt(req.params.articleId);
    const { title, content, tags, categories } = req.body;

    const success = updateArticle(articleId, title, content, tags || [], categories || []);

    if (success) {
      res.json({ message: 'Article updated successfully' });
    } else {
      res.status(404).json({ message: 'Article not found' });
    }
});

router.delete('/:articleId', (req: Request, res: Response) => {
    const articleId: number = parseInt(req.params.articleId);
    const success = deleteArticle(articleId);
    if (success) {
      res.json({ message: 'Article deleted successfully' });
    } else {
      res.status(404).json({ message: 'Article not found' });
    }
});

router.post('/:articleId/like', (req: Request, res: Response) => {
    const articleId: number = parseInt(req.params.articleId);
    const success = likeArticle(articleId);
    if (success) {
      res.json({ message: 'Article liked successfully' });
    } else {
      res.status(404).json({ message: 'Article not found' });
    }
});  


export default router;
