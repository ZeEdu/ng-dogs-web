import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Comment } from 'src/app/Interfaces/get-photo-content';
import { CommentListService } from 'src/app/services/comment-list.service';
import { UserContextService } from 'src/app/Services/user-context.service';

@Component({
  selector: 'app-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.css'],
})
export class PhotoCommentsComponent
  implements OnInit, OnDestroy, AfterViewInit {
  @Input() photoId: number;
  @Input() single: boolean;
  @ViewChild('elRef', { static: true }) elRef: ElementRef;
  comments: Comment[] = [];

  commentList$: Subscription;
  secondSub$: Subscription;

  constructor(
    public userContextService: UserContextService,
    private commentListService: CommentListService
  ) {}

  ngOnInit(): void {
    this.commentList$ = this.commentListService.getCommentList.subscribe(
      (comments) => {
        this.comments = comments;
      }
    );
  }

  ngAfterViewInit(): void {
    this.secondSub$ = this.commentListService.getCommentList.subscribe(() => {
      this.elRef.nativeElement.scrollTop = this.elRef.nativeElement.scrollHeight;
    });
  }

  ngOnDestroy(): void {
    if (this.commentList$) this.commentList$.unsubscribe();
    if (this.secondSub$) this.secondSub$.unsubscribe();
  }
}
