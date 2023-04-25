import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CKEditorModule } from 'ckeditor4-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LandingMainComponent } from './pages/landing-page/landing-main/landing-main.component';
import { ClassBuilderMainComponent } from './pages/class-builder/class-builder-main/class-builder-main.component';
import { DisplayMainComponent } from './pages/display-management/display-main/display-main.component';
import { ModuleMainComponent } from './pages/module-management/module-main/module-main.component';
import { PageMainComponent } from './pages/page-management/page-main/page-main.component';
import { RoleMainComponent } from './pages/role-management/role-main/role-main.component';
import { UserMainComponent } from './pages/user-management/user-main/user-main.component';
import { LandingContentComponent } from './pages/landing-page/landing-content/landing-content.component';
import { PagesTableComponent } from './pages/page-management/pages-table/pages-table.component';
import { PageEditComponent } from './pages/page-management/page-edit/page-edit.component';
import { AddNewRoleComponent } from './pages/role-management/add-new-role/add-new-role.component';
import { RolesTableComponent } from './pages/role-management/roles-table/roles-table.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ModuleHeaderComponent } from './pages/module-management/module-header/module-header.component';
import { ModuleFormEditorComponent } from './pages/module-management/module-form-editor/module-form-editor.component';
import { DisplayHeaderComponent } from './pages/display-management/display-header/display-header.component';
import { DisplaySettingsComponent } from './pages/display-management/display-settings/display-settings.component';
import { DisplaySliderSettingsComponent } from './pages/display-management/display-slider-settings/display-slider-settings.component';
import { DisplayGridSettingsComponent } from './pages/display-management/display-grid-settings/display-grid-settings.component';
import { ClockComponent } from './pages/landing-page/clock/clock.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { ColorPickerComponent } from './pages/class-builder/color-picker/color-picker.component';
import { TabsComponent } from './pages/class-builder/class-builder-main/tabs/tabs.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SiteIdentityComponent } from './pages/site-identity/site-identity.component';
import { ModuleDisplayComponent } from './pages/module-management/module-display/module-display.component';
import{HttpClientModule} from '@angular/common/http'
import { InsertModuleFormComponent } from './pages/module-management/module-insert/insert-module-form/insert-module-form.component';
import { InsertModuleMainComponent } from './pages/module-management/module-insert/insert-module-main/insert-module-main.component';



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    LandingMainComponent,
    ClassBuilderMainComponent,
    DisplayMainComponent,
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
    ModuleFormEditorComponent,
    DisplayHeaderComponent,
    DisplaySettingsComponent,
    DisplaySliderSettingsComponent,
    DisplayGridSettingsComponent,
    ClockComponent,
    ColorPickerComponent,
    TabsComponent,
    SiteIdentityComponent,
    ModuleDisplayComponent,
    InsertModuleFormComponent,
    InsertModuleMainComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CKEditorModule,
    HttpClientModule,
    FormsModule,



  ],
  providers: []
})
export class AppModule { }
