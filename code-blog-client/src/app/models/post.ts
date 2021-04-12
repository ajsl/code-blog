export interface Post {
    postId: number;
    title: string;
    content: string;
    author: string;
    updatedDate: Date;
    publishedDate: Date;
    blogId: number;
    tags?: string;
}
