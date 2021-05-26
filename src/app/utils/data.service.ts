import { IPostsData } from "../interfaces/interfaces";

export class DataService {
    private postsData: Array<IPostsData> = []

    public setPostsData(posts) {
        this.postsData = posts;
    }

    public getPostsData() {
        return this.postsData
    }

    public pushPostInPostData(post) {
        post.like = 0;
        post.id = this.postsData.length + 1;
        post.coments = [];
        console.log(post)
        this.postsData.push(post);
    }

    public likePost(index) {
        this.postsData[index].like = this.postsData[index].like + 1;
    }

    public editPost(post, id) {
        const postIndex = this.postsData.findIndex((post) => post.id === id);
        this.postsData[postIndex] = {...this.postsData[postIndex], ...post};
    }

    public deletePost(index){
        this.postsData.splice(index, 1);
    }

    public addComment(coment, id) {
        const postIndex = this.postsData.findIndex((post) => post.id === id);
        this.postsData[postIndex].coments = [...this.postsData[postIndex].coments, coment];
    }
}