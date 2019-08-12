import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {ErrorComponent} from './error/error.component';
import {AuthGuardService} from './login/authguardservice';
import {UnitsComponent} from './units/units.component';
import {HomeComponent} from './home/home.component';
import {UnitDetailComponent} from './unit-detail/unit-detail.component';


const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'units', component: UnitsComponent, canActivate: [AuthGuardService], data: {expectedRole: ['USER', 'ADMIN']}},
  {path: 'unit/:id/:editMode', component: UnitDetailComponent, canActivate: [AuthGuardService], data: {expectedRole: ['USER', 'ADMIN']}},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
