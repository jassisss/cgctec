import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
  	AuthComponent
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }
