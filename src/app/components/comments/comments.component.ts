import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comment } from '../../models/models'
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  @Input() public comments: Array<Comment>;

  @Output() newComment: EventEmitter<Comment> = new EventEmitter();

  public handlerAddComment(value: string): void {
    this.comments.push({text: value, date: new Date()});
    this.newComment.emit();
  }
}