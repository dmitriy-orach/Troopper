import { IPostsData } from "../interfaces/interfaces";

export class DataService {
    private postsData: Array<IPostsData> = []

    public setPostsData(posts): void {
        this.postsData = posts;
    }

    public getPostsData() {
        return this.postsData;
    }

    public addPost(post): void {
        post.like = 0;
        post.id = this.postsData.length + 1;
        post.comments = [];
        post.isEdit = false;
        post.dateOfCreation = new Date();
        post.dateEdit = new Date('1970-01-01T03:24:00');
        this.postsData.unshift(post);
    }

    public likePost(index): void {
        this.postsData[index].like = this.postsData[index].like + 1;
    }

    public editPost(post, id): void {
        const postIndex = this.postsData.findIndex((post) => post.id === id);
        post.isEdit = true;
        post.dateEdit = new Date();
        this.postsData[postIndex] = {...this.postsData[postIndex], ...post};
    }

    public deletePost(index): void {
        this.postsData.splice(index, 1);
    }

    public addComment(comment, id): void {
        const postIndex = this.postsData.findIndex((post) => post.id === id);
        this.postsData[postIndex].comments = [...this.postsData[postIndex].comments, comment];
    }

    public sortingByLikes(posts): void {
        posts.sort((a, b) => b.like - a.like);
    }

    public sortingByComment(posts): void {
        posts.sort((a, b) => b.comments.length - a.comments.length);
    }

    public sortingByDateEditing(posts): void {
        posts.sort((a: any, b: any) => Date.parse(b.dateEdit) - Date.parse(a.dateEdit));
    }

    public sortingByDateCreating(posts): void {
        posts.sort((a: any, b: any) => Date.parse(b.dateOfCreation) - Date.parse(a.dateOfCreation)) ;
    }
}