import { Observable, of } from "rxjs";
import { PostsData } from "../models/models";
import { addPost, deletePost, editPost, filterSelectedPosts, sortingByComment, sortingByDateCreating, sortingByDateEditing, sortingByLikes } from "../utils/utils";
import { map, tap } from 'rxjs/operators';

export class DataService {

    public setPostsData(posts) {
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    public getPostsData(): Observable<PostsData[]> {
        const posts = JSON.parse(localStorage.getItem('posts'));
        return of(posts || []);
    }

    public  editingPost(value, postId): Observable<any>{
        return this.getPostsData()
            .pipe(
                map(posts => editPost(posts, value, postId)),
                tap(posts => this.setPostsData(posts))
            )
    }

    public  delPost(postId): Observable<any> {
        return this.getPostsData()
            .pipe(
                map(posts => deletePost(posts, postId)),
                tap(posts => this.setPostsData(posts))
            )
    }

    public  filterPosts(selectedValue): Observable<any> {
        return this.getPostsData()
            .pipe(
                map(posts => filterSelectedPosts(posts, selectedValue))
            )
    }

    public sortPosts(e): Observable<any> {
        return this.getPostsData()
            .pipe(
                map(posts => {
                    switch(e){
                        case 'sortLikes':
                            return sortingByLikes(posts);
                        case 'sortComments':
                            return sortingByComment(posts);
                        case 'sortEditing':
                            return sortingByDateEditing(posts);
                        case 'sortCreating':
                            return sortingByDateCreating(posts);
                    }
                })
            )
    }

    public addingPost(value) {
        return this.getPostsData()
        .pipe(
            map(posts => addPost(posts, value)),
            tap(posts => this.setPostsData(posts))
        )
    }
}