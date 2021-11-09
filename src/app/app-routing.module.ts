import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./views/login/login.component";
import {HomeComponent} from "./views/home/home.component";
import {ErrorComponent} from "./views/error/error.component";
import {DetailComponent} from "./views/detail/detail.component";
import {AuthGuard} from "./guards/auth/auth.guard";
import {NewSerialComponent} from "./views/new-serial/new-serial/new-serial.component";
import {EditSerialComponent} from "./views/edit-serial/edit-serial/edit-serial.component";

const routes: Routes = [
  {path: '', canActivate: [AuthGuard], component: HomeComponent},
  {path: 'home', canActivate: [AuthGuard], component: HomeComponent},
  {path: 'serials/new', canActivate: [AuthGuard], component: NewSerialComponent},
  {path: 'detail/:id', canActivate: [AuthGuard],component: DetailComponent},
  {path: 'serials/:id/edit', canActivate: [AuthGuard],component: EditSerialComponent},
  {path: 'login', component: LoginComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: 'error'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
