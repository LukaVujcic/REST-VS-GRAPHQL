import { users, articles, comments } from './data';


const resolvers = {
  Query: {
    user: (_: any, { id }: any) => users.find((user) => user.id === id),
    users: () => users,
    article: (_: any, { id }: any) => articles.find((article) => article.id === id),
    articles: () => articles,
    comment: (_:any, { id }: any) => comments.find((comment) => comment.id === id),
    comments: () => comments,
  },
  User: {
    articles: (user: any) => articles.filter((article) => article.authorId === user.id),
  },
  Article: {
    author: (article: any) => users.find((user) => user.id === article.authorId),
    comments: (article: any) => comments.filter((comment) => comment.articleId === article.id),
  },
  Comment: {
    article: (comment: any) => articles.find((article) => article.id === comment.articleId),
  },
};

export default resolvers;
