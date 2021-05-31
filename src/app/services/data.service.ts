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
        post.dateEdit = null;
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
        posts.sort((a, b) => Date.parse(b.dateEdit) - Date.parse(a.dateEdit));
    }

    public sortingByDateCreating(posts): void {
        posts.sort((a, b) => Date.parse(b.dateOfCreation) - Date.parse(a.dateOfCreation)) ;
    }

    // public showPostsWithComments() {
    //     return this.postsData.filter((post) => {
    //         if(post.comments.length !== 0) {
    //             return post;
    //         }
    //     });
    // }

    // public showPostsWithLike() {
    //     return this.postsData.filter((post) => {
    //         if(post.like !== 0) {
    //             return post;
    //         }
    //     });
    // }

    // public showEditedPosts() {
    //     return this.postsData.filter((post) => {
    //         if(post.dateEdit) {
    //             return post;
    //         }
    //     });
    // }

    public showSelectedPosts({comments, likes, edited}) {
        // console.log(comments, likes, edited)
        
        // return this.postsData.filter((post) => {

        //     likes ? post.like > 0 : post;


        //     if(comments && likes) {
        //         if(post.comments.length > 0 && post.like > 0) {
        //             return post;
        //         }
        //     }
        //     if(edited && likes) {
        //         if(post.dateEdit && post.like > 0) {
        //             return post;
        //         }
        //     }
        //     if(edited && comments) {
        //         if(post.dateEdit && post.comments.length > 0) {
        //             return post;
        //         }
        //     }
        // });
    }
}