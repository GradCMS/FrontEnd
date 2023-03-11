import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMainComponent } from './pages/page-management/page-main/page-main.component';
import { AppComponent } from './app.component';
import { LandingContentComponent } from './pages/landing-page/landing-content/landing-content.component';
import { LandingMainComponent } from './pages/landing-page/landing-main/landing-main.component';
import { PageEditComponent } from './pages/page-management/page-edit/page-edit.component';
import { UserMainComponent } from './pages/user-management/user-main/user-main.component';
import { RoleMainComponent } from './pages/role-management/role-main/role-main.component';

const routes: Routes = [
  { path: '', component: LandingMainComponent},
  {path:'PageManagement',component:PageMainComponent},
  {path:'EditPage',component:PageEditComponent},
  {path:'UserManagement',component:UserMainComponent},
  {path:'RoleManagement',component:RoleMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
