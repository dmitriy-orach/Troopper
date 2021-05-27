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

  public handleLike(i): void {
    this.dataService.likePost(i);
  }

  public hendleEdit(post): void {
    this.edit.emit(post);
  }

  public hendleDelete(index): void {
    this.dataService.deletePost(index);
  }
}
