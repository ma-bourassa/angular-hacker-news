import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from '../../services/hacker-news.service';
import { Story } from '../../interfaces/story';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit {
  story: Story;

  constructor(private hackerNewService: HackerNewsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const storyId = this.route.snapshot.queryParams.id;
    this.hackerNewService.getItem(storyId).subscribe((story) => {
      this.story = story;
    });
  }
}
