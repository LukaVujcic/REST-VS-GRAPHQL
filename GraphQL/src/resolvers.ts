import { users, articles, comments } from './data';


const resolvers = {
  Query: {
    user: (_: any, { id }: any) => users.find((user) => user.id === +id),
    users: () => users,
    article: (_: any, { id }: any) => articles.find((article) => article.id === +id),
    articles: () => articles,
    comment: (_:any, { id }: any) => comments.find((comment) => comment.id === +id),
    comments: () => comments,
  },
  User: {
    articles: (user: any) => articles.filter((article) => article.authorId === +user.id),
  },
  Article: {
    author: (article: any) => users.find((user) => user.id === +article.authorId),
    comments: (article: any) => comments.filter((comment) => comment.articleId === +article.id),
  },
  Comment: {
    article: (comment: any) => articles.find((article) => article.id === +comment.articleId),
  },
  Mutation:{
    createUser: (parent: any, { name }: { name: string }) => {
      const newUser = {
        id: users.length + 1,
        name,
      };

      users.push(newUser);

      return newUser;
    },
    updateUser: (parent: any, { id, name }: { id: number; name: string }) => {
      const user = users.find((user) => user.id === id);
      if (!user) {
        throw new Error('User not found');
      }
      user.name = name;
      
      return user;
    },
    deleteUser: (parent: any, { id }: { id: number }) => {
      const index = users.findIndex((user) => user.id === id);
      if (index === -1) {
        throw new Error('User not found');
      }
      const deletedUser = users.splice(index, 1)[0];

      return deletedUser;
    },
    createArticle: (parent: any, { title, tags, categories, content, authorId }: { title: string; content: string; tags: string[]; categories: string[]; authorId: number }) => {
      const newArticle = {
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
    },
    updateArticle: (parent: any, { id, title, content, tags, categories }: { id: number; title: string; content: string; tags:string[], categories: string[]}) => {
      const article = articles.find((article) => article.id === id);

      if (!article) {
        throw new Error('Article not found');
      }

      article.title = title;
      article.content = content;
      article.tags = tags;
      article.categories = categories

      return article;
    },
    deleteArticle: (parent: any, { id }: { id: number }) => {
      const index = articles.findIndex((article) => article.id === id);

      if (index === -1) {
        throw new Error('Article not found');
      }

      const deletedArticle = articles.splice(index, 1)[0];

      return deletedArticle;
    },
    createComment: (parent: any, { content, articleId, userId }: { content: string; articleId: number; userId: number }) => {
      const newComment = {
        id: comments.length + 1,
        content,
        likes: 0,
        articleId,
        userId,
      };

      comments.push(newComment);

      return newComment;
    },
    updateComment: (parent: any, { id, content }: { id: number; content: string }) => {
      const comment = comments.find((comment) => comment.id === id);
      if (!comment) {
        throw new Error('Comment not found');
      }
      comment.content = content;

      return comment;
    },
    deleteComment: (parent: any, { id }: { id: number }) => {
      const index = comments.findIndex((comment) => comment.id === id);
      if (index === -1) {
        throw new Error('Comment not found');
      }
      const deletedComment = comments.splice(index, 1)[0];
      return deletedComment;
    },

  }
};

export default resolvers;
