export interface Post {
    postId: number;
    title: string;
    content: string;
    author: string;
    updatedDate: Date;
    publicationDate: Date;
    blogId: number;
    tags?: string;
    photoUrl: string;
}

export interface IPostToAddORUpdate{
    postId: number;
    title: string;
    content: string;
    author: string;
    tags?: string;
    photoUrl: string;
}

export interface Pagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
}

export class PaginatedPosts<T> {
    posts: T;
    pagination: Pagination;
}
