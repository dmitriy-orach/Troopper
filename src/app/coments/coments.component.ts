import { Component, Input } from '@angular/core';
import { DataService } from '../utils/data.service';

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.scss']
})
export class ComentsComponent {

  constructor(private dataService: DataService) { }

  @Input() public coments: Array<{text: string, date: string}>;

  @Input() public postId: number; 

  public handleAddComent(value) {
    this.dataService.addComment({text: value, date: new Date()}, this.postId);
  }
}