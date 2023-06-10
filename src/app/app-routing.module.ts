
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
import { DisplayMainComponent } from './pages/display-management/display-main/display-main.component';
import { InsertModuleMainComponent } from './pages/module-management/module-insert/insert-module-main/insert-module-main.component';
import {ClassBuilderMainComponent} from "./pages/class-builder/class-builder-main/class-builder-main.component";
import {SiteIdentityComponent} from "./pages/site-identity/site-identity.component";


const routes: Routes = [
  { path: '', component: LandingMainComponent},
  {path:'PageManagement',component:PageMainComponent},
  {path:'EditPage',component:PageEditComponent},
  {path:'UserManagement',component:UserMainComponent},
  {path:'RoleManagement',component:RoleMainComponent},
  {path:'ModuleManagement',component:ModuleMainComponent},
  {path:'DisplayManagement',component:DisplayMainComponent},
  {path:'ModuleInsert',component:InsertModuleMainComponent},
  {path:'ModuleIEdit/:id',component:InsertModuleMainComponent},
  {path: 'SiteIdentity', component:SiteIdentityComponent },
  {path: 'ClassBuilder', component: ClassBuilderMainComponent},
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
