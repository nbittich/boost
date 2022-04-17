import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import { AuthGuardService } from '@service/auth-guard.service';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Route[] = [
  {
    path: "profile",
    component: UserProfileComponent,
    canActivate: [AuthGuardService],
    data: { expectedRole: ["USER", "ADMIN", "CONTRIBUTOR"] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAreaRoutingModule {
}
