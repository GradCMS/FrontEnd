import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMainComponent } from './pages/page-management/page-main/page-main.component';
import { AppComponent } from './app.component';
import { LandingContentComponent } from './pages/landing-page/landing-content/landing-content.component';
import { LandingMainComponent } from './pages/landing-page/landing-main/landing-main.component';
import { PageEditComponent } from './pages/page-management/page-edit/page-edit.component';
import { UserMainComponent } from './pages/user-management/user-main/user-main.component';
import { RoleMainComponent } from './pages/role-management/role-main/role-main.component';
<<<<<<< Updated upstream
import { PageCreateComponent } from './pages/page-management/page-create/page-create.component';

=======
import { ModuleMainComponent } from './pages/module-management/module-main/module-main.component';
import { DisplayMainComponent } from './pages/display-management/display-main/display-main.component';
import { InsertModuleMainComponent } from './pages/module-management/module-insert/insert-module-main/insert-module-main.component';
import {ClassBuilderMainComponent} from "./pages/class-builder/class-builder-main/class-builder-main.component";
import {SiteIdentityComponent} from "./pages/site-identity/site-identity.component";


import { PageCreateComponent } from './pages/page-management/page-create/page-create.component';
import { UserCreateComponent } from './pages/user-management/user-create/user-create.component';
import { UserEditComponent } from './pages/user-management/user-edit/user-edit.component';
>>>>>>> Stashed changes
const routes: Routes = [
  { path: '', component: LandingMainComponent},
  {path:'PageManagement',component:PageMainComponent},
  {path:'UserManagement',component:UserMainComponent},
  {path:'RoleManagement',component:RoleMainComponent},
<<<<<<< Updated upstream
  {path:'CreatePage',component:PageCreateComponent}
=======
  {path:'ModuleManagement',component:ModuleMainComponent},
  {path:'DisplayManagement',component:DisplayMainComponent},
  {path:'ModuleInsert',component:InsertModuleMainComponent},
  {path: 'SiteIdentity', component:SiteIdentityComponent },
  {path: 'ClassBuilder', component: ClassBuilderMainComponent},
   

  {path:'CreatePage',component:PageCreateComponent},
  {path: 'CreateUser', component:UserCreateComponent},
  {path: 'EditUser/:id', component:UserEditComponent},
  {path: 'EditPage/:id', component:PageEditComponent}
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
