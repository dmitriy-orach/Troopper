import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddingPostComponent } from './components/adding-post/adding-post.component';
import { DataService } from './services/data.service';
import { PostsComponent } from './components/posts/posts.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { CommentsComponent } from './components/comments/comments.component';


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
