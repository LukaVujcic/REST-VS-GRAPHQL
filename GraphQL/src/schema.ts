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
    authorId: ID!
    author: User
    comments: [Comment]
  }

  type Comment {
    id: ID!
    content: String
    articleId: ID!
    article: Article
  }
`;
