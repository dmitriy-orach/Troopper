import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddingPostComponent } from './adding-post/adding-post.component';
import { DataService } from './utils/data.service';
import { PostsComponent } from './posts/posts.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { CommentsComponent } from './comments/comments.component';


@NgModule({
  declarations: [
    AppComponent,
    AddingPostComponent,
    PostsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
