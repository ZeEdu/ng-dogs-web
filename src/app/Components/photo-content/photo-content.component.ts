import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { first, map, shareReplay, take, tap } from 'rxjs/operators';
import { GetPhoto } from 'src/app/Interfaces/get-photo';
import {
  Comment,
  GetPhotoContent,
  Photo,
} from 'src/app/Interfaces/get-photo-content';
import { PostCommentResponse } from 'src/app/Interfaces/post-comment-response';
import { ApiHandlerService } from 'src/app/Services/api-handler.service';
import { CommentListService } from 'src/app/services/comment-list.service';
import { ModalService } from 'src/app/Services/modal.service';
import { UserContextService } from 'src/app/Services/user-context.service';

@Component({
  selector: 'app-photo-content',
  templateUrl: './photo-content.component.html',
  styleUrls: ['./photo-content.component.css'],
})
export class PhotoContentComponent implements OnInit, OnDestroy {
  @Input() photo: Observable<GetPhoto>;
  @Input() single: boolean;

  photoContent: Photo;
  comments: Observable<Comment[]>;
  private photoSubscription$: Subscription;

  constructor(
    private apiHandler: ApiHandlerService,
    public userContext: UserContextService,
    private commentListService: CommentListService,
    private modal: ModalService,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    if (this.photoSubscription$) {
      this.photoSubscription$.unsubscribe();
    }
  }

  navigate(route: string, arg: string) {
    this.router.navigate([route, arg]);
    this.modal.setModalState = false;
  }

  ngOnInit(): void {
    this.photo.pipe(take(1)).subscribe((photo) => {
      this.apiHandler
        .request('GET', `/api/photo/${photo.id}`)
        .pipe(
          take(1),
          map((x) => x as GetPhotoContent)
        )
        .subscribe((photoContent) => {
          this.photoContent = photoContent.photo;
          this.commentListService.setCommentList = photoContent.comments;
        });
    });
  }
}
