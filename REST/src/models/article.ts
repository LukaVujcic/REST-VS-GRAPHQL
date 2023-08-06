export interface Article {
    id: number;
    title: string;
    content: string;
    tags: string[];
    categories: string[];
    likes: number;
    authorId: number;
}