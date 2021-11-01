import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HackerNewsService } from '../../services/hacker-news.service';
import { Story } from '../../interfaces/story';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss'],
})
export class StoryListComponent implements OnInit {
  stories$!: Observable<Story[]>;

  constructor(private hackerNewService: HackerNewsService) {}

  ngOnInit(): void {
    // this.hackerNewService.getTopStories(5).subscribe((x) => console.log(x));
    this.stories$ = this.hackerNewService.getTopStories(5);
  }
}
