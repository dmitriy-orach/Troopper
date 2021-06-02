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
      this.postsData = this.dataService.sortPosts(selectedValue);
    })

    this.dataService.getPostsData().subscribe((data) => {
      this.postsData = data;
    })
  }
  
  @Output() edit: EventEmitter<any> = new EventEmitter();

  public postsData;

  public handlerLike(post): void {
    post.like =  post.like + 1;
    this.dataService.setPostsData(this.postsData);
  }

  public handlerEdit(post): void {
    this.edit.emit(post);
  }

  public handlerDelete(id): void {
    this.dataService.delPost(id);
  }

  public handlerSort(e): void {
    this.dataService.sortPosts(e);
  }

  public handlerComment() {
    this.dataService.setPostsData(this.postsData);
  }

  public selectionForm = new FormGroup({
    comments: new FormControl('', []),
    likes: new FormControl('', []),
    edited: new FormControl('', [])
  })
}