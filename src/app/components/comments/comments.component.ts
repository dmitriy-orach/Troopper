import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  @Input() public comments: Array<{text: string, date: Date}>;

  @Input() public postId: number; 

  @Output() newComment: EventEmitter<any> = new EventEmitter();

  public handlerAddComment(value): void {
    this.comments.push({text: value, date: new Date()})
    this.newComment.emit();
  }
}