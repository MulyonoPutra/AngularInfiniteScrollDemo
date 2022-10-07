import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    const errorMessage = error;
    return throwError(errorMessage);
  }

  getCommentaries(page: number, perPage: number): Observable<Comment[]> {
    return this.http.get(
      `${environment.endpoint}/comments?page=${page}&per_page=${perPage}`
    ) as Observable<Comment[]>;
  }

  // Important: Using JSONPlaceholder API will not be really updated on the server but it will be faked as if.
  // But status always 200
  remove(id: number): Observable<any> {
    return this.http
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .pipe(catchError(this.handleError));
  }
}
