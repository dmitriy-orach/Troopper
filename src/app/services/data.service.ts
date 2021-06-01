import { IPostsData } from "../models/models";

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
        post.dateOfCreation = new Date();
        this.postsData.unshift(post);
    }

    public likePost(index): void {
        this.postsData[index].like = this.postsData[index].like + 1;
    }

    public editPost(post, id): void {
        const postIndex = this.postsData.findIndex((post) => post.id === id);
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
        posts.sort((a, b) => {
            if(b.dateEdit && a.dateEdit) {
                return Date.parse(b.dateEdit) - Date.parse(a.dateEdit);
            }else if(a.dateEdit && !b.dateEdit) {
                return -1;
            } else if(b.dateEdit && !a.dateEdit) {
                return 1;
            }
        });
    }

    public sortingByDateCreating(posts): void {
        posts.sort((a, b) => Date.parse(b.dateOfCreation) - Date.parse(a.dateOfCreation)) ;
    }

    public showSelectedPosts({comments, likes, edited}) {
        return this.postsData.filter((post) => {
            const postWithLike = likes ? post.like > 0 : true;
            const postWithcomments = comments ? post.comments.length > 0 : true;
            const postWithEdited = edited ? post.dateEdit : true;
            return (postWithLike && postWithcomments && postWithEdited);
        });
    }
}