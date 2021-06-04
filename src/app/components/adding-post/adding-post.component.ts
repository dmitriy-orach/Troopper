import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsData } from 'src/app/models/models';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-adding-post',
  templateUrl: './adding-post.component.html',
  styleUrls: ['./adding-post.component.scss']
})
export class AddingPostComponent {

  constructor(private dataService: DataService) { }

  public showModal: boolean = false
  public editing: boolean = false;
  public postEdit: PostsData;
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

  public onSubmit(evt): void {
    evt.preventDefault();
    
    if (this.postForm.invalid) {
      this.titleControl.markAsTouched();
      this.textControl.markAsTouched();
      return;
    }

    const formValue = this.postForm.value;

    if(this.editing){
      this.dataService.editingPost(formValue, this.postId).subscribe();
    } else {
      this.dataService.addingPost(formValue).subscribe();
    }

    this.exitForm();
  }

  public exitForm(): void {
    this.showModal = false;
    this.editing = false;
    this.postForm.reset();
  }

  public handlerEdit(post: PostsData): void {
    this.postId = post.id;
    this.showModal = true;
    this.editing = true;
    this.postEdit = post;
    this.postForm.patchValue({
      'title': this.postEdit.title,
      'text': this.postEdit.text
    });
  }

  get titleControl(): AbstractControl {
    return this.postForm.get('title') as AbstractControl;
  }
  
  get textControl(): AbstractControl {
    return this.postForm.get('text') as AbstractControl;
  }
}