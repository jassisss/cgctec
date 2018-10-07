import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SiteModule } from './site/site.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { GuestModule } from './guest/guest.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SiteModule,
    AdminModule,
    AuthModule,
    GuestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
