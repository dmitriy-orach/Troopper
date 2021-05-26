import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../utils/data.service';

@Component({
  selector: 'app-adding-post',
  templateUrl: './adding-post.component.html',
  styleUrls: ['./adding-post.component.scss']
})
export class AddingPostComponent {

  constructor(private dataService: DataService) { }

  public adding = false
  public editing = false;
  public postEdit: any;
  public editingIndex: number;
  public posts = this.dataService.getPostsData();
  public postId: number;

  public postForm = new FormGroup({
    title: new FormControl('', 
    [
      Validators.required
    ]),
    text: new FormControl('', 
    [
      Validators.required
    ])
  })

  get titleControl(): AbstractControl {
    return this.postForm.get('title') as AbstractControl;
  }
  
  get textControl(): AbstractControl {
    return this.postForm.get('text') as AbstractControl;
  }

  public onSubmit(evt) {
    evt.preventDefault();
    
    if (this.postForm.invalid) {
      this.titleControl.markAsTouched();
      this.textControl.markAsTouched();
      return;
    }

    const post = this.postForm.value;

    if(this.editing){
      this.dataService.editPost(post, this.postId);
    } else {
      this.dataService.pushPostInPostData(post);
    }

    this.editing = false;
    this.adding = false;
    this.exitForm();
  }

  public exitForm() {
    this.adding = false;
    this.editing = false;
    this.postForm.reset();
  }

  public editHandler(post) {
    this.postId = post.id;
    this.adding = true;
    this.editing = true;
    this.postEdit = post;
    this.postForm.patchValue({
      'title': this.postEdit.title,
      'text': this.postEdit.text
    });
  }
}