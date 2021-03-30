import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './Components/account/account.component';
import { FeedComponent } from './Components/feed/feed.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginCreateComponent } from './Components/login-create/login-create.component';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { LoginLostPasswordComponent } from './Components/login-lost-password/login-lost-password.component';
import { LoginResetPasswordComponent } from './Components/login-reset-password/login-reset-password.component';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { PhotoComponent } from './Components/photo/photo.component';
import { UserFeedComponent } from './Components/user-feed/user-feed.component';
import { UserPhotoPostComponent } from './Components/user-photo-post/user-photo-post.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { UserStatsComponent } from './Components/user-stats/user-stats.component';
import { AuthGuardGuard } from './Guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    children: [
      { path: '', component: LoginFormComponent },
      { path: 'create', component: LoginCreateComponent },
      {
        path: 'lost',
        component: LoginLostPasswordComponent,
      },
      {
        path: 'reset',
        component: LoginResetPasswordComponent,
      },
      {
        path: '*',
        component: NotFoundComponent,
      },
    ],
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [AuthGuardGuard],
    children: [
      { path: '', component: UserFeedComponent },
      { path: 'post', component: UserPhotoPostComponent },
      {
        path: 'stats',
        component: UserStatsComponent,
      },
      {
        path: '*',
        component: NotFoundComponent,
      },
    ],
  },
  {
    path: 'photo/:id',
    component: PhotoComponent,
  },
  {
    path: 'profile/:id',
    component: UserProfileComponent,
  },
  {
    path: '*',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
