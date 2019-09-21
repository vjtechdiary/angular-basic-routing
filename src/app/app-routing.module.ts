import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'department', component: DepartmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }