import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, retry, skip, take, tap } from 'rxjs/operators';
import { GetPhoto } from 'src/app/Interfaces/get-photo';
import { ApiHandlerService } from 'src/app/Services/api-handler.service';
import { ModalService } from 'src/app/Services/modal.service';
import { UserContextService } from 'src/app/Services/user-context.service';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css'],
})
export class UserFeedComponent implements OnInit, OnDestroy {
  userId: string;
  getUserInfoSub$: Subscription;
  isLoggedInSub$: Subscription;

  constructor(private userContext: UserContextService) {}
  ngOnDestroy(): void {
    if (this.getUserInfoSub$) this.getUserInfoSub$.unsubscribe();
    if (this.isLoggedInSub$) this.isLoggedInSub$.unsubscribe();
  }

  ngOnInit(): void {
    this.isLoggedInSub$ = this.userContext.isLoggedIn.subscribe(
      (isLoggedIn) => {
        if (isLoggedIn) {
          this.getUserInfoSub$ = this.userContext.getUserInfo.subscribe(
            (user) => {
              if (user) this.userId = user.id;
            }
          );
        }
      }
    );
  }
}
