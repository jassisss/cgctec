import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, 
         MatMenuModule, MatIconModule, MatListModule, MatDialogModule,
         MatCardModule, MatButtonToggleModule, MatInputModule} from '@angular/material';
import { SiteRoutingModule } from './site-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { SiteComponent } from './site/site.component';
import { LoginComponent } from '../site/auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SiteRoutingModule,
    LayoutModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SiteComponent,
    LoginComponent,
    RegisterComponent 
  ],
  declarations: [
    SiteComponent, 
    LoginComponent, 
    RegisterComponent
  ],
  entryComponents: [
    LoginComponent,
    RegisterComponent
  ],

})
export class SiteModule { }
