import { Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Story } from '../../interfaces/story';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.scss'],
})
export class StoryItemComponent implements OnInit {
  @Input() rank: number | undefined;
  @Input() story: Story;

  timeFromNow: string | undefined;
  storyUrl: string | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.storyUrl = this.setStoryUrl(this.story?.url);
    this.timeFromNow = this.setCreationTime(this.story?.time);
  }

  setCreationTime(creationTime: number | undefined) {
    if (creationTime) {
      dayjs.extend(relativeTime);
      const unitCreationDate = dayjs.unix(creationTime);
      return dayjs(unitCreationDate).fromNow();
    }
    return undefined;
  }

  setStoryUrl(url: string | undefined) {
    if (url) {
      return new URL(<string>this.story.url).hostname.replace('www.', '');
    }
    return undefined;
  }

  goToStory() {
    this.router.navigate(['/story'], { queryParams: { id: this.story.id } });
  }
}
