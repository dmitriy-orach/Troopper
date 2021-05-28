import { Component, Input } from '@angular/core';
import { DataService } from '../utils/data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  constructor(private dataService: DataService) { }

  @Input() public comments: Array<{text: string, date: string}>;

  @Input() public postId: number; 

  public handlerAddComment(value): void {
    this.dataService.addComment({text: value, date: new Date()}, this.postId);
  }
}