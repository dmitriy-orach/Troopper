import { PostsData, FormValue } from "../models/models";

export function addPost(postsData: PostsData[], postValue: FormValue) {
    const post = {
        title: postValue.title,
        text: postValue.text,
        like: 0,
        id: postsData.length + 1,
        comments: [],
        dateOfCreation: new Date(),
    }
    return [...postsData, post];
}

export function editPost(postsData: PostsData[], postData: FormValue, id: number) {
    return postsData.map(post => post.id === id ? {...post, ...postData, dateEdit: new Date()} : post);
}

export function deletePost(postsData: PostsData[], id: number) {
    const posts = [...postsData];
    const postIndex = posts.findIndex(post => post.id === id);
    posts.splice(postIndex, 1);
    return posts;
}

export function sortingByLikes(postsData: PostsData[]) {
    const posts = [...postsData];
    posts.sort((a, b) => b.like - a.like);
    return posts;
}

export function sortingByComment(postsData: PostsData[]) {
    const posts = [...postsData];
    return posts.sort((a, b) => b.comments.length - a.comments.length);
}

export function sortingByDateEditing(postsData) {
    const posts = [...postsData];
    return posts.sort((a, b) => {
        if(b.dateEdit && a.dateEdit) {
            return Date.parse(b.dateEdit) - Date.parse(a.dateEdit);
        }else if(a.dateEdit && !b.dateEdit) {
            return -1;
        } else if(b.dateEdit && !a.dateEdit) {
            return 1;
        }
    });
}

export function sortingByDateCreating(postsData) {
    const posts = [...postsData];
    return posts.sort((a, b) => Date.parse(b.dateOfCreation) - Date.parse(a.dateOfCreation));
}

export function filterSelectedPosts(postsData: PostsData[], {comments, likes, edited}) {
    const posts = [...postsData];
    return posts.filter((post) => {
        const postWithLike = likes ? post.like > 0 : true;
        const postWithcomments = comments ? post.comments.length > 0 : true;
        const postWithEdited = edited ? post.dateEdit : true;
        return (postWithLike && postWithcomments && postWithEdited);
    });
}