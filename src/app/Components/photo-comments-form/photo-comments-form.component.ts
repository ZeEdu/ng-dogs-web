import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, retry, take, tap } from 'rxjs/operators';
import { PostCommentResponse } from 'src/app/Interfaces/post-comment-response';
import { ApiHandlerService } from 'src/app/Services/api-handler.service';
import { CommentListService } from 'src/app/services/comment-list.service';

@Component({
  selector: 'app-photo-comments-form',
  templateUrl: './photo-comments-form.component.html',
  styleUrls: ['./photo-comments-form.component.css'],
})
export class PhotoCommentsFormComponent implements OnInit {
  @Input() photoId: number;
  @Input() single: boolean;

  form: FormGroup;
  error: string;
  loading: boolean;

  constructor(
    private apiHandler: ApiHandlerService,
    private fb: FormBuilder,
    private commentList: CommentListService
  ) {}

  get getComment(): string {
    return this.form.get('comment').value;
  }

  handleSubmit() {
    this.loading = true;
    this.apiHandler
      .request('POST', '/api/comment/' + this.photoId, {
        comment: this.getComment,
      })
      .pipe(
        retry(2),
        take(1),
        map((x) => x as PostCommentResponse)
      )
      .subscribe(
        (res) => (this.commentList.addCommentToList = res),
        () => (this.error = 'Something went wrong. Please, try again!!!'),
        () => (this.loading = false)
      );
  }

  ngOnInit(): void {
    this.form = this.fb.group({ comment: ['', Validators.required] });
  }
}
