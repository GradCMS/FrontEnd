
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
import { EditModuleMainComponent } from './pages/module-management/module-editor/edit-module-main/edit-module-main.component';
import { DisplayShowMainComponent } from './pages/display-management/display-show/display-show-main/display-show-main.component';
import { InsertDisplayMainComponent } from './pages/display-management/display-insert/insert-display-main/insert-display-main.component';
import { EditDisplayMainComponent } from './pages/display-management/display-editor/edit-display-main/edit-display-main.component';
import { NavbarDisplayMainComponent } from './pages/navbar-management/navbar-display/navbar-display-main/navbar-display-main.component';
import { InsertNavbarMainComponent } from './pages/navbar-management/navbar-insert/insert-navbar-main/insert-navbar-main.component';
import { EditNavbarMainComponent } from './pages/navbar-management/navbar-edit/edit-navbar-main/edit-navbar-main.component';
import {ClassBuilderMainComponent} from "./pages/class-builder/class-builder-main/class-builder-main.component";
import {SiteIdentityComponent} from "./pages/site-identity/site-identity.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {ClassBuilderEditComponent} from "./pages/class-builder/class-builder-edit/class-builder-edit.component";
import { PageCreateComponent } from './pages/page-management/page-create/page-create.component';
import { UserCreateComponent } from './pages/user-management/user-create/user-create.component';
import { UserEditComponent } from './pages/user-management/user-edit/user-edit.component';
const routes: Routes = [
  {path: '', component: LandingMainComponent , title: 'Landing Page'},
  {path: 'PageManagement', component: PageMainComponent , title: 'Page Management'},
  {path: 'EditPage', component: PageEditComponent , title: 'Edit Page'},
  {path: 'UserManagement', component: UserMainComponent, title: 'User Management'},
  {path: 'RoleManagement', component: RoleMainComponent , title: 'Role Management'},
  {path: 'ModuleManagement', component: ModuleMainComponent , title: 'Module Management'},
  {path: 'DisplayManagement', component: DisplayShowMainComponent , title: 'Display Management'},
  {path:'DisplayInsert',component:InsertDisplayMainComponent},
  {path:'DisplayEdit/:id',component:EditDisplayMainComponent},
  {path:'ModuleInsert',component:InsertModuleMainComponent},
  {path:'ModuleIEdit/:id',component:EditModuleMainComponent},
  {path: 'SiteIdentity', component:SiteIdentityComponent },
  {path: 'ClassBuilder', component: ClassBuilderMainComponent},
  {path:'NavbarElements',component:NavbarDisplayMainComponent},
  {path:'NavElementInsert/:parentId/:newPriority',component:InsertNavbarMainComponent},
  {path:'NavElementEdit/:id',component:EditNavbarMainComponent},
  {path: 'SiteIdentity', component: SiteIdentityComponent , title: 'Site Identity' },
  {path: 'ClassBuilder', component: ClassBuilderMainComponent , title: 'Class Builder'},
  {path: 'login', component: LoginPageComponent , title: 'Login'},
  {path: 'ClassBuilder-Edit/:id', component: ClassBuilderEditComponent , title: 'Edit Class'},
  {path:'CreatePage',component:PageCreateComponent},
  {path: 'CreateUser', component:UserCreateComponent},
  {path: 'EditUser/:id', component:UserEditComponent},
  {path: 'EditPage/:id', component:PageEditComponent}

  // make sure this is the last route for the not found pages

  {path: '**', component: PageNotFoundComponent , title: 'Page Not Found'},
  
   






]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
