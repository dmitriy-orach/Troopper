import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.selectionForm.valueChanges.subscribe((selectedValue) => {
      this.postsData = this.dataService.showSelectedPosts(selectedValue);
    })
  }
  
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

  public selectionForm = new FormGroup({
    comments: new FormControl('', []),
    likes: new FormControl('', []),
    edited: new FormControl('', [])
  })
}