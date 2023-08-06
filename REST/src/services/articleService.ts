import { Article } from '../models/article';

// Sample data
let articles: Article[] = [
    { id: 1, title: 'Article 1', content: 'Content of Article1', tags: ['Tag1', 'Tag2'], categories: ['Category1'], likes: 0, authorId: 1 },
    { id: 2, title: 'Article 2', content: 'Content of Article2', tags: ['Tag3', 'Tag4'], categories: ['Category2','Category3'], likes: 0, authorId: 2 },
];

export const getArticles = (): Article[] => {
    return articles;
};

export const getArticleById = (id: number): Article | undefined => {
    return articles.find(article => article.id === id);
};

export const createArticle = (title: string, content: string, tags: string[], categories: string[], authorId: number): Article =>{
    const newArticle: Article = {
        id: articles.length + 1,
        title,
        content,
        tags,
        categories,
        likes: 0,
        authorId,
    };

    articles.push(newArticle);

    return newArticle;
}


export const updateArticle = (articleId: number, title: string, content: string, tags: string[], categories: string[]): boolean=> {
    const articleIndex = articles.findIndex((article) => article.id === articleId);

    if (articleIndex === -1) {
      return false;
    }

    articles[articleIndex].title = title;
    articles[articleIndex].content = content;
    articles[articleIndex].tags = tags;
    articles[articleIndex].categories = categories;

    return true;
}

export const deleteArticle = (articleId: number): boolean => {
    const articleIndex = articles.findIndex((article) => article.id === articleId);

    if (articleIndex === -1) {
      return false;
    }

    articles = articles.filter((article) => article.id !== articleId);

    return true;
}

export const likeArticle = (articleId: number): boolean => {
    const articleIndex = articles.findIndex((article) => article.id === articleId);

    if (articleIndex === -1) {
      return false;
    }

    articles[articleIndex].likes++;

    return true;
}
