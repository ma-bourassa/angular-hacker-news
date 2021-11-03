import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../interfaces/comment';
import DateUtils from '../../utils/date.utils';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
})
export class CommentItemComponent implements OnInit {
  @Input() comment: Comment;
  timeFromNow: string | undefined;

  constructor() {}

  ngOnInit(): void {
    this.timeFromNow = DateUtils.getCreationTime(this.comment?.time);
  }
}
