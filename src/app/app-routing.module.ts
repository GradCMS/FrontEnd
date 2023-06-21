
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMainComponent } from './pages/page-management/page-main/page-main.component';
import { AppComponent } from './app.component';
import { LandingContentComponent } from './pages/landing-page/landing-content/landing-content.component';
import { LandingMainComponent } from './pages/landing-page/landing-main/landing-main.component';
import { PageEditComponent } from './pages/page-management/page-edit/page-edit.component';
import { UserMainComponent } from './pages/user-management/user-main/user-main.component';
import { RoleMainComponent } from './pages/role-management/role-main/role-main.component';
import { ModuleMainComponent } from './pages/module-management/module-display/module-main/module-main.component';
import { InsertModuleMainComponent } from './pages/module-management/module-insert/insert-module-main/insert-module-main.component';
import {ClassBuilderMainComponent} from "./pages/class-builder/class-builder-main/class-builder-main.component";
import {SiteIdentityComponent} from "./pages/site-identity/site-identity.component";
import { EditModuleMainComponent } from './pages/module-management/module-editor/edit-module-main/edit-module-main.component';
import { DisplayShowMainComponent } from './pages/display-management/display-show/display-show-main/display-show-main.component';
import { InsertDisplayMainComponent } from './pages/display-management/display-insert/insert-display-main/insert-display-main.component';
import { EditDisplayMainComponent } from './pages/display-management/display-editor/edit-display-main/edit-display-main.component';
import { NavbarDisplayMainComponent } from './pages/navbar-management/navbar-display/navbar-display-main/navbar-display-main.component';
import { InsertNavbarMainComponent } from './pages/navbar-management/navbar-insert/insert-navbar-main/insert-navbar-main.component';
import { EditNavbarMainComponent } from './pages/navbar-management/navbar-edit/edit-navbar-main/edit-navbar-main.component';

const routes: Routes = [
  { path: '', component: LandingMainComponent},
  {path:'PageManagement',component:PageMainComponent},
  {path:'EditPage',component:PageEditComponent},
  {path:'UserManagement',component:UserMainComponent},
  {path:'RoleManagement',component:RoleMainComponent},
  {path:'ModuleManagement',component:ModuleMainComponent},
  {path:'DisplayManagement',component:DisplayShowMainComponent},
  {path:'DisplayInsert',component:InsertDisplayMainComponent},
  {path:'DisplayEdit/:id',component:EditDisplayMainComponent},
  {path:'ModuleInsert',component:InsertModuleMainComponent},
  {path:'ModuleIEdit/:id',component:EditModuleMainComponent},
  {path: 'SiteIdentity', component:SiteIdentityComponent },
  {path: 'ClassBuilder', component: ClassBuilderMainComponent},
  {path:'NavbarElements',component:NavbarDisplayMainComponent},
  {path:'NavElementInsert',component:InsertNavbarMainComponent},
  {path:'NavElementEdit/:id',component:EditNavbarMainComponent},
  
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
