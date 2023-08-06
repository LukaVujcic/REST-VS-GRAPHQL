import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    user(id: ID!): User
    users: [User]
    article(id: ID!): Article
    articles: [Article]
    comment(id: ID!): Comment
    comments: [Comment]
  }

  type User {
    id: ID!
    name: String
    articles: [Article]
  }

  type Article {
    id: ID!
    title: String
    content: String
    tags: [String]
    categories: [String]
    likes: Int
    authorId: ID!
    author: User
    comments: [Comment]
  }

  type Comment {
    id: ID!
    content: String
    likes: Int
    articleId: ID!
    article: Article
    userId: ID!
    user: User
  }

  type Mutation{
    createUser(name: String!): User
    updateUser(id: ID!, name: String): User
    deleteUser(id: ID!): User
    createArticle (title: String, tags: [String], categories: [String], content: String, authorId: String): Article
    updateArticle(id: ID!, title: String!, content: String!): Article
    deleteArticle(id: ID!): Article
    createComment(content: String!, articleId: ID!, userId: ID!): Comment
    updateComment(id: ID!, content: String!): Comment
    deleteComment(id: ID!): Comment
  }
`;
