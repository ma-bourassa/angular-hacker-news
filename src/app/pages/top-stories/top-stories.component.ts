import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HackerNewsService } from '../../services/hacker-news.service';
import { Story } from '../../interfaces/story';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss'],
})
export class TopStoriesComponent implements OnInit {
  stories$!: Observable<Story[]>;

  constructor(private hackerNewService: HackerNewsService) {}

  ngOnInit(): void {
    this.stories$ = this.hackerNewService.getTopStories(5);
  }
}
