import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { LoginCreateComponent } from './Components/login-create/login-create.component';
import { LoginLostPasswordComponent } from './Components/login-lost-password/login-lost-password.component';
import { LoginResetPasswordComponent } from './Components/login-reset-password/login-reset-password.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AccountComponent } from './Components/account/account.component';
import { UserComponent } from './Components/user/user.component';
import { PhotoComponent } from './Components/photo/photo.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { FeedComponent } from './Components/feed/feed.component';
import { UserPhotoPostComponent } from './Components/user-photo-post/user-photo-post.component';
import { UserStatsComponent } from './Components/user-stats/user-stats.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './Components/error/error.component';
import { RouterModule, RouterStateSnapshot } from '@angular/router';
import { UserHeaderComponent } from './Components/user-header/user-header.component';
import { UserHeaderNavComponent } from './Components/user-header-nav/user-header-nav.component';
import { UserFeedComponent } from './Components/user-feed/user-feed.component';
import { FeedPhotoItemComponent } from './Components/feed-photo-item/feed-photo-item.component';
import { ImageComponent } from './Components/image/image.component';
import { FeedPhotosComponent } from './Components/feed-photos/feed-photos.component';
import { ModalComponent } from './Components/modal/modal.component';
import { PhotoContentComponent } from './Components/photo-content/photo-content.component';
import { PhotoCommentsComponent } from './Components/photo-comments/photo-comments.component';
import { PhotoDeleteComponent } from './Components/photo-delete/photo-delete.component';
import { PhotoCommentsFormComponent } from './Components/photo-comments-form/photo-comments-form.component';
import { UserStatsGraphsComponent } from './Components/user-stats-graphs/user-stats-graphs.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LoginFormComponent,
    LoginCreateComponent,
    LoginLostPasswordComponent,
    LoginResetPasswordComponent,
    NotFoundComponent,
    AccountComponent,
    UserComponent,
    PhotoComponent,
    UserProfileComponent,
    FeedComponent,
    UserPhotoPostComponent,
    UserStatsComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    UserHeaderComponent,
    UserHeaderNavComponent,
    UserFeedComponent,
    FeedPhotoItemComponent,
    ImageComponent,
    FeedPhotosComponent,
    ModalComponent,
    PhotoContentComponent,
    PhotoCommentsComponent,
    PhotoDeleteComponent,
    PhotoCommentsFormComponent,
    UserStatsGraphsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ChartsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
