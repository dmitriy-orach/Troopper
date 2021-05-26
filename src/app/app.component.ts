import { Component, OnInit } from '@angular/core';
import { DataService } from './utils/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Troopper';

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    const posts = JSON.parse(localStorage.getItem('posts'));
    this.dataService.setPostsData(posts || []);
    window.addEventListener("beforeunload", () => { 
      const posts = JSON.stringify(this.dataService.getPostsData());
      localStorage.setItem('posts', posts);
    })
  }
}