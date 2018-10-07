import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { GuestComponent } from './guest/guest.component';

@NgModule({
  imports: [
    CommonModule,
    GuestRoutingModule
  ],
  exports: [
  	GuestComponent
  ],
  declarations: [GuestComponent]
})
export class GuestModule { }
