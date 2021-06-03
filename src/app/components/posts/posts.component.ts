import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostsData } from 'src/app/models/models';
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
      this.dataService.filterPosts(selectedValue).subscribe(data => this.postsData = data);
    })

    this.dataService.getPostsData().subscribe((data) => this.postsData = data);
  }
  
  @Output() edit: EventEmitter<PostsData> = new EventEmitter();

  public postsData: PostsData[];

  public handlerLike(post: PostsData): void {
    post.like =  post.like + 1;
    this.dataService.setPostsData(this.postsData);
  }

  public handlerEdit(post: PostsData): void {
    this.edit.emit(post);
  }

  public handlerDelete(id: number): void {
    this.dataService.delPost(id).subscribe(data => {
      this.postsData = data;
    });
  }

  public handlerSort(e: string): void {
    this.dataService.sortPosts(e).subscribe(data => {
      this.postsData = data;
    });
  }

  public handlerComment(): void {
    this.dataService.setPostsData(this.postsData);
  }

  public selectionForm = new FormGroup({
    comments: new FormControl('', []),
    likes: new FormControl('', []),
    edited: new FormControl('', [])
  })
}