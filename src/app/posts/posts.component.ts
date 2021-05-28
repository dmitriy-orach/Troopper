import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../utils/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  constructor(private dataService: DataService) { }
  
  @Output() edit: EventEmitter<any> = new EventEmitter();

  public postsData = this.dataService.getPostsData();

  public handlerLike(i): void {
    this.dataService.likePost(i);
  }

  public handlerEdit(post): void {
    this.edit.emit(post);
  }

  public handlerDelete(index): void {
    this.dataService.deletePost(index);
  }

  public handlerSortByLike(): void {
    this.dataService.sortingByLikes(this.postsData);
  }

  public handlerSortByComment(): void {
    this.dataService.sortingByComment(this.postsData);
  }

  public handlerSortByDateEditing(): void {
    this.dataService.sortingByDateEditing(this.postsData);
  }

  public handlerSortByDateCreating(): void {
    this.dataService.sortingByDateCreating(this.postsData);
  }

  public handlerDisplaySelection(e): void {
    if(e.target.checked) {
      switch(e.target.value) {
        case 'comments':
          this.postsData = this.dataService.showPostsWithComments();
          break;
        case 'likes':
          this.postsData = this.dataService.showPostsWithLike();
          break; 
        case 'edited':
          this.postsData = this.dataService.showEditedPosts();
          break; 
        case 'allPosts':
          this.postsData = this.dataService.getPostsData();
          break;
      }
    }
  }
}