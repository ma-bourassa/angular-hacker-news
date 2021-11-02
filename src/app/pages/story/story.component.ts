import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from '../../services/hacker-news.service';
import { Story } from '../../interfaces/story';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Comment } from '../../interfaces/comment';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit {
  story: Story;
  comments$: Observable<Comment[]>;

  constructor(private hackerNewService: HackerNewsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const storyId = this.route.snapshot.queryParams.id;
    this.setStory(storyId);
  }

  setStory(id: number | string) {
    this.hackerNewService.getItem(id).subscribe((story) => {
      this.story = story;
      if (story.kids?.length) {
        const filteredKids = story.kids.splice(0, 3);
        this.comments$ = this.hackerNewService.getTopComments(filteredKids);
      }
    });
  }
}
