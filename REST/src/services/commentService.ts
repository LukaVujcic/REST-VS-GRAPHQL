import { Comment } from '../models/comment';

// Sample data
let comments: Comment[] = [
    { id: 1, content: 'Comment 1', articleId: 1 },
    { id: 2, content: 'Comment 2', articleId: 2 },
];

export const getCommentsByArticleId = (articleId: number): Comment[] => {
    return comments.filter(comment => comment.articleId === articleId);
};
