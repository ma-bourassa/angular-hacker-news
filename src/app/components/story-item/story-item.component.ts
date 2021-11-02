import { Component, Input, OnInit } from '@angular/core';
import { Story } from '../../interfaces/story';
import { Router } from '@angular/router';
import DateUtils from '../../utils/date.utils';

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
    this.timeFromNow = DateUtils.getCreationTime(this.story?.time);
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
