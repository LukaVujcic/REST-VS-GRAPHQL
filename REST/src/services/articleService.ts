import { Article } from '../models/article';

// Sample data
let articles: Article[] = [
    { id: 1, title: 'Article 1', authorId: 1 },
    { id: 2, title: 'Article 2', authorId: 2 },
];

export const getArticles = (): Article[] => {
    return articles;
};

export const getArticleById = (id: number): Article | undefined => {
    return articles.find(article => article.id === id);
};