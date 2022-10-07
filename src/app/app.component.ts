import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Comment } from '../shared/models/comment';
import { CommentService } from '../shared/services/comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  throttle = 0;
  distance = 2;
  page = 1;
  perPage = 10;
  commentaries: Comment[] | any[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.commentService.getCommentaries(this.page, this.perPage).subscribe({
      next: (comment: Comment[]) => {
        this.commentaries = comment;
        this.commentaries.map((user) => {
          let randomString = (Math.random() + 1).toString(36).substring(7);
          const newProps = {
            avatar: `https://robohash.org/${randomString}`,
          };

          return Object.assign(user, newProps);
        });
      },
      error: (error) => console.log(error),
    });
  }

  onScroll(): void {
    this.commentService.getCommentaries(++this.page, this.perPage).subscribe({
      next: (comment: Comment[]) => this.commentaries.push(...comment),
      error: (error) => console.log(error),
    });
  }

  onRemove(event: number): void {
    const commentId = event;
    this.commentService.remove(commentId).subscribe({
      next: (response) => {
        this.alertDialog();
      },
      error: (error) => console.log(error),
    });
  }

  alertDialog(): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }
}
