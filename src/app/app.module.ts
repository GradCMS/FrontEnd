import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ckeditor4-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LandingMainComponent } from './pages/landing-page/landing-main/landing-main.component';
import { ClassBuilderMainComponent } from './pages/class-builder/class-builder-main/class-builder-main.component';
import { ModuleMainComponent } from './pages/module-management/module-display/module-main/module-main.component';
import { PageMainComponent } from './pages/page-management/page-main/page-main.component';
import { RoleMainComponent } from './pages/role-management/role-main/role-main.component';
import { UserMainComponent } from './pages/user-management/user-main/user-main.component';
import { LandingContentComponent } from './pages/landing-page/landing-content/landing-content.component';
import { PagesTableComponent } from './pages/page-management/pages-table/pages-table.component';
import { PageEditComponent } from './pages/page-management/page-edit/page-edit.component';
import { AddNewRoleComponent } from './pages/role-management/add-new-role/add-new-role.component';
import { RolesTableComponent } from './pages/role-management/roles-table/roles-table.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ModuleHeaderComponent } from './pages/module-management/module-display/module-header/module-header.component';
import { DisplayHeaderComponent } from './pages/display-management/display-header/display-header.component';
import { ClockComponent } from './pages/landing-page/clock/clock.component';
import { ColorPickerComponent } from './pages/class-builder/color-picker/color-picker.component';
import { TabsComponent } from './pages/class-builder/class-builder-main/tabs/tabs.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SiteIdentityComponent } from './pages/site-identity/site-identity.component';
import { ModuleDisplayComponent } from './pages/module-management/module-display/module-display-form/module-display.component';
import{HttpClientModule} from '@angular/common/http'
import { InsertModuleFormComponent } from './pages/module-management/module-insert/insert-module-form/insert-module-form.component';
import { InsertModuleMainComponent } from './pages/module-management/module-insert/insert-module-main/insert-module-main.component';
import { EditModuleMainComponent } from './pages/module-management/module-editor/edit-module-main/edit-module-main.component';
import { EditModuleFormComponent } from './pages/module-management/module-editor/edit-module-form/edit-module-form.component';
import { DisplayShowMainComponent } from './pages/display-management/display-show/display-show-main/display-show-main.component';
import { DisplayShowFormComponent } from './pages/display-management/display-show/display-show-form/display-show-form.component';
import { EditDisplayFormComponent } from './pages/display-management/display-editor/edit-display-form/edit-display-form.component';
import { EditDisplayMainComponent } from './pages/display-management/display-editor/edit-display-main/edit-display-main.component';
import { InsertDisplayMainComponent } from './pages/display-management/display-insert/insert-display-main/insert-display-main.component';
import { InsertDisplayFormComponent } from './pages/display-management/display-insert/insert-display-form/insert-display-form.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavbarHeaderComponent } from './pages/navbar-management/navbar-header/navbar-header.component';
import { NavbarDisplayFormComponent } from './pages/navbar-management/navbar-display/navbar-display-form/navbar-display-form.component';
import { NavbarDisplayMainComponent } from './pages/navbar-management/navbar-display/navbar-display-main/navbar-display-main.component';
import { EditNavbarMainComponent } from './pages/navbar-management/navbar-edit/edit-navbar-main/edit-navbar-main.component';
import { EditNavbarFormComponent } from './pages/navbar-management/navbar-edit/edit-navbar-form/edit-navbar-form.component';
import { InsertNavbarFormComponent } from './pages/navbar-management/navbar-insert/insert-navbar-form/insert-navbar-form.component';
import { InsertNavbarMainComponent } from './pages/navbar-management/navbar-insert/insert-navbar-main/insert-navbar-main.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { TestPageComponent } from './test-page/test-page.component';
import { ClassBuilderEditComponent } from './pages/class-builder/class-builder-edit/class-builder-edit.component';


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    LandingMainComponent,
    ClassBuilderMainComponent,
    ModuleMainComponent,
    PageMainComponent,
    RoleMainComponent,
    UserMainComponent,
    LandingContentComponent,
    PagesTableComponent,
    PageEditComponent,
    AddNewRoleComponent,
    RolesTableComponent,
    FooterComponent,
    ModuleHeaderComponent,
    DisplayHeaderComponent,
    ClockComponent,
    ColorPickerComponent,
    TabsComponent,
    SiteIdentityComponent,
    ModuleDisplayComponent,
    InsertModuleFormComponent,
    InsertModuleMainComponent,
    EditModuleMainComponent,
    EditModuleFormComponent,
    DisplayShowMainComponent,
    DisplayShowFormComponent,
    EditDisplayFormComponent,
    EditDisplayMainComponent,
    InsertDisplayMainComponent,
    InsertDisplayFormComponent,
    NavbarHeaderComponent,
    NavbarDisplayFormComponent,
    NavbarDisplayMainComponent,
    EditNavbarMainComponent,
    EditNavbarFormComponent,
    InsertNavbarFormComponent,
    InsertNavbarMainComponent,
    PageNotFoundComponent,
    LoginPageComponent,
    SnackbarComponent,
    TestPageComponent,
    ClassBuilderEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CKEditorModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    DragDropModule

  ],
  providers: []
})
export class AppModule { }
