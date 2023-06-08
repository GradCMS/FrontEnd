import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageMainComponent} from './pages/page-management/page-main/page-main.component';
import {AppComponent} from './app.component';
import {LandingContentComponent} from './pages/landing-page/landing-content/landing-content.component';
import {LandingMainComponent} from './pages/landing-page/landing-main/landing-main.component';
import {PageEditComponent} from './pages/page-management/page-edit/page-edit.component';
import {UserMainComponent} from './pages/user-management/user-main/user-main.component';
import {RoleMainComponent} from './pages/role-management/role-main/role-main.component';
import {ModuleMainComponent} from './pages/module-management/module-main/module-main.component';
import {DisplayMainComponent} from './pages/display-management/display-main/display-main.component';
import {
  InsertModuleMainComponent
} from './pages/module-management/module-insert/insert-module-main/insert-module-main.component';
import {ClassBuilderMainComponent} from "./pages/class-builder/class-builder-main/class-builder-main.component";
import {SiteIdentityComponent} from "./pages/site-identity/site-identity.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {LoginPageComponent} from "./login-page/login-page.component";


const routes: Routes = [
  {path: '', component: LandingMainComponent , title: 'Landing Page'},
  {path: 'PageManagement', component: PageMainComponent , title: 'Page Management'},
  {path: 'EditPage', component: PageEditComponent , title: 'Edit Page'},
  {path: 'UserManagement', component: UserMainComponent, title: 'User Management'},
  {path: 'RoleManagement', component: RoleMainComponent , title: 'Role Management'},
  {path: 'ModuleManagement', component: ModuleMainComponent , title: 'Module Management'},
  {path: 'DisplayManagement', component: DisplayMainComponent , title: 'Display Management'},
  {path: 'ModuleInsert', component: InsertModuleMainComponent , title: 'Module Insert'} ,
  {path: 'SiteIdentity', component: SiteIdentityComponent , title: 'Site Identity' },
  {path: 'ClassBuilder', component: ClassBuilderMainComponent , title: 'Class Builder'},
  {path: 'login', component: LoginPageComponent , title: 'Login'},

  // make sure this is the last route for the not found pages

  {path: '**', component: PageNotFoundComponent , title: 'Page Not Found'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
