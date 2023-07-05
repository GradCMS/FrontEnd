import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< Updated upstream
=======
import { ImageCropperModule } from 'ngx-image-cropper';
import { ReactiveFormsModule} from '@angular/forms';
import { CKEditorModule } from 'ckeditor4-angular';
>>>>>>> Stashed changes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageCropperModule } from 'ngx-image-cropper';
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
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { ModuleHeaderComponent } from './pages/module-management/module-header/module-header.component';
import { ModuleInsertComponent } from './pages/module-management/module-insert/module-insert.component';
import { ModuleFormEditorComponent } from './pages/module-management/module-form-editor/module-form-editor.component';
import { DisplayHeaderComponent } from './pages/display-management/display-header/display-header.component';
import { DisplaySettingsComponent } from './pages/display-management/display-settings/display-settings.component';
import { DisplaySliderSettingsComponent } from './pages/display-management/display-slider-settings/display-slider-settings.component';
import { DisplayGridSettingsComponent } from './pages/display-management/display-grid-settings/display-grid-settings.component';
<<<<<<< Updated upstream
=======
import { ClockComponent } from './pages/landing-page/clock/clock.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { ColorPickerComponent } from './pages/class-builder/color-picker/color-picker.component';
import { TabsComponent } from './pages/class-builder/class-builder-main/tabs/tabs.component';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SiteIdentityComponent } from './pages/site-identity/site-identity.component';
import { ModuleDisplayComponent } from './pages/module-management/module-display/module-display.component';
import { InsertModuleFormComponent } from './pages/module-management/module-insert/insert-module-form/insert-module-form.component';
import { InsertModuleMainComponent } from './pages/module-management/module-insert/insert-module-main/insert-module-main.component';
>>>>>>> Stashed changes
import { FormsModule } from '@angular/forms';
import { PageCreateComponent } from './pages/page-management/page-create/page-create.component';
<<<<<<< Updated upstream
import {DragDropModule} from '@angular/cdk/drag-drop';

=======
import { DragDropModule} from '@angular/cdk/drag-drop';
import { UserCreateComponent } from './pages/user-management/user-create/user-create.component';
import { UserEditComponent } from './pages/user-management/user-edit/user-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { MatTreeModule, MatTreeNodeToggle } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
<<<<<<< Updated upstream
import { RoleServiceComponent } from './sharedServices/roleData/role.service/role.service.component';
import { PermissionServiceComponent } from './sharedServices/roleData/permission.service/permission.service.component';
>>>>>>> Stashed changes
=======
import { ImageCropperModule } from 'ngx-image-cropper';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatButtonModule} from '@angular/material/button';
import { PopupAlertComponent } from './shared/popup/popup.alert/popup.alert.component';
>>>>>>> Stashed changes


@NgModule({
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
    ModuleInsertComponent,
    ModuleFormEditorComponent,
    DisplayHeaderComponent,
    DisplaySettingsComponent,
    DisplaySliderSettingsComponent,
    DisplayGridSettingsComponent,
<<<<<<< Updated upstream
    PageCreateComponent,
        
=======
    ClockComponent,
    ColorPickerComponent,
    TabsComponent,
    SiteIdentityComponent,
    ModuleDisplayComponent,
    InsertModuleFormComponent,
    InsertModuleMainComponent,
    PageCreateComponent,
    UserCreateComponent,
    UserEditComponent,
<<<<<<< Updated upstream
    RoleServiceComponent,
    PermissionServiceComponent,
>>>>>>> Stashed changes
  ],
  imports:[
=======
    ModuleHeaderComponent,
    DisplayHeaderComponent,
    ModuleDisplayComponent,

  ],
  
  imports: [
    NgxPaginationModule,
    DragDropModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CKEditorModule,
    MatTreeModule,
    MatIconModule,
>>>>>>> Stashed changes
    BrowserModule, 
    AngularDualListBoxModule, 
    ImageCropperModule,
    AppRoutingModule,
    FormsModule,
<<<<<<< Updated upstream
    DragDropModule,
<<<<<<< Updated upstream
=======
    MatDialogModule,
    MatButtonModule,
    PopupAlertComponent,
>>>>>>> Stashed changes

  ],
  providers: [],
  bootstrap: [AppComponent]
=======
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CKEditorModule,
    HttpClientModule,
    FormsModule,
    MatTreeModule,
    MatIconModule,
  ],
  providers: []
>>>>>>> Stashed changes
})
export class AppModule { }
