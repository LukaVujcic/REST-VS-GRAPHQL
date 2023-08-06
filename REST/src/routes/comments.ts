import express, { Request, Response, Router } from 'express';
import { createComment, deleteComment, getAllComments, getCommentById, getCommentsByArticleId, updateComment } from '../services/commentService';

const router: Router = express.Router();


router.get('/', (req: Request, res: Response) => {
    const comments = getAllComments();

    res.json(comments);
});


router.get('/:commentId', (req: Request, res: Response) => {
    const commentId: number = parseInt(req.params.commentId);
    const comment = getCommentById(commentId);
    if (comment) {
      res.json(comment);
    } else {
      res.status(404).json({ message: 'Comment not found' });
    }
});

router.post('/', (req: Request, res: Response) => {
    const { content, articleId, userId } = req.body;
    const newComment = createComment(content, articleId, userId);

    res.status(201).json(newComment);
});

router.put('/:commentId', (req: Request, res: Response) => {
    const commentId: number = parseInt(req.params.commentId);
    const { content } = req.body;
    const success = updateComment(commentId, content);

    if (success) {
      res.json({ message: 'Comment updated successfully' });
    } else {
      res.status(404).json({ message: 'Comment not found' });
    }
});

router.delete('/:commentId', (req: Request, res: Response) => {
    const commentId: number = parseInt(req.params.commentId);
    const success = deleteComment(commentId);
    if (success) {
      res.json({ message: 'Comment deleted successfully' });
    } else {
      res.status(404).json({ message: 'Comment not found' });
    }
});

export default router;
