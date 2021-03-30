import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Comment } from '../Interfaces/get-photo-content';
import { PostCommentResponse } from '../Interfaces/post-comment-response';

@Injectable({
  providedIn: 'root',
})
export class CommentListService {
  private commentList = new BehaviorSubject<Comment[]>([]);

  set setCommentList(comments: Comment[]) {
    this.commentList.next([...comments]);
  }
  set addCommentToList(comment: Comment) {
    this.getCommentList.pipe(take(1)).subscribe((comments) => {
      this.commentList.next([...comments, comment]);
    });
  }

  get getCommentList(): Observable<Comment[]> {
    return this.commentList.asObservable();
  }

  constructor() {}
}
