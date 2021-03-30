import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map, retry, take } from 'rxjs/operators';
import { GetPhoto } from 'src/app/Interfaces/get-photo';
import { ApiHandlerService } from 'src/app/Services/api-handler.service';
import { ModalService } from 'src/app/Services/modal.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input() userId = '0';
  private total = 6;
  private page = 1;
  photos: GetPhoto[] = [];
  modalState: boolean;
  isLoading = false;
  canLoadMore: boolean;

  private modalStateSubscription$: Subscription;

  constructor(
    private modal: ModalService,
    private apiHandler: ApiHandlerService
  ) {}

  ngOnDestroy(): void {
    if (this.modalStateSubscription$) {
      this.modalStateSubscription$.unsubscribe();
    }
  }

  loadMore() {
    this.page++;
    this.loadContent();
  }

  ngOnInit(): void {
    this.loadContent();
    this.modalStateSubscription$ = this.modal.getModalState.subscribe(
      (state) => (this.modalState = state)
    );
  }

  private loadContent() {
    this.isLoading = true;
    this.apiHandler
      .request(
        'GET',
        `/api/photo/?_page=${this.page}&_total=${this.total}&_user=${this.userId}`
      )
      .pipe(
        retry(2),
        take(1),
        map((res) => res as GetPhoto[])
      )
      .subscribe((photos) => {
        photos.length < this.total
          ? (this.canLoadMore = false)
          : (this.canLoadMore = true);
        this.photos = [...this.photos, ...photos];
        this.isLoading = false;
      });
  }
}
