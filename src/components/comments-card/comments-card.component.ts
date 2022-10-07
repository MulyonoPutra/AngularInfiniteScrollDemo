import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comment } from '../../shared/models/comment';

@Component({
  selector: 'app-comments-card',
  templateUrl: './comments-card.component.html',
  styleUrls: ['./comments-card.component.scss'],
})
export class CommentsCardComponent {
  @Input() comment!: Comment;
  @Output() commentId = new EventEmitter<number>();

  constructor() {}

  onRemove(commentId: number) {
    this.commentId.emit(commentId);
  }
}
