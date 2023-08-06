export const users = [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' }
];

export const articles = [
  { id: 1, title: 'Article 1', content: 'Content of Article1', tags: ['Tag1', 'Tag2'], categories: ['Category1'], likes: 0, authorId: 1 },
  { id: 2, title: 'Article 2', content: 'Content of Article2', tags: ['Tag3', 'Tag4'], categories: ['Category2','Category3'], likes: 0, authorId: 2 },
];

export const comments = [
  { id: 1, content: 'Comment 1', articleId: 1, likes: 0, userId: 2 },
  { id: 2, content: 'Comment 2', articleId: 2, likes: 0, userId: 1 },
];
