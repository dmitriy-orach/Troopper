import { IPostsData } from "../interfaces/interfaces";

export class DataService {
    public postsData: Array<IPostsData> = [
        {
            id: 1,
            title: 'Title 1',
            text: 'text 1',
            like: 13,
            coments: '',
        },
        {
            id: 2,
            title: 'Title 2',
            text: 'text 2',
            like: 12,
            coments: ['Coment 2'],
        }
    ]

    public getPostsData() {
        return this.postsData
    }

    public pushPostInPostData(post) {
        post.like = 0;
        post.id = this.postsData.length + 1;
        console.log(post)
        this.postsData.push(post);
    }

    public likePost(index) {
        this.postsData[index].like = this.postsData[index].like + 1;
    }

    public editPost(post, id) {
        const userIndex = this.postsData.findIndex((user) => user.id === id);
        post.id = userIndex + 1;
        this.postsData[userIndex] = {...this.postsData[userIndex], ...post};
    }

    public deletePost(index){
        this.postsData.splice(index, 1);
    }
}