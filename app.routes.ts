import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: UserProfileComponent },
];

