import { Comment } from '../models/comment';

// Podaci
let comments: Comment[] = [
    { id: 1, content: 'Comment 1', articleId: 1, likes: 0, userId: 2 },
    { id: 2, content: 'Comment 2', articleId: 2, likes: 0, userId: 1 },
];


export const getAllComments = (): Comment[] => {
    return comments;
}

export const getCommentById = (commentId:number): Comment[] => {
    return comments.filter(comment => comment.id === commentId);;
}

export const getCommentsByArticleId = (articleId: number): Comment[] => {
    return comments.filter(comment => comment.articleId === articleId);
};

export const createComment = (content: string, articleId: number, userId: number): Comment => {
    const newComment: Comment = {
      id: comments.length + 1,
      content,
      likes: 0,
      articleId,
      userId,
    };

    comments.push(newComment);

    return newComment;
}

export const updateComment = (commentId: number, content: string): boolean => {
    const commentIndex = comments.findIndex((comment) => comment.id === commentId);
    if (commentIndex === -1) {
      return false;
    }
    
    comments[commentIndex].content = content;

    return true;
  }

export const deleteComment = (commentId: number): boolean => {
    const commentIndex = comments.findIndex((comment) => comment.id === commentId);
    
    if (commentIndex === -1) {
      return false;
    }

    comments = comments.filter((comment) => comment.id !== commentId);

    return true;
}
