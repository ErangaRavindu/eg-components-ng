import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderModule} from './lib/header/header.module';

import {MenuItemModule} from './lib/menu-item/menu-item.module';

import { DataTableComponent } from './lib/data-table/data-table.component';
import { SideNavComponent } from './lib/side-nav/side-nav.component';
import {RippleModule} from './lib/ripple/ripple.module';


@NgModule({
  declarations: [
    AppComponent,

    DataTableComponent,
    SideNavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    RippleModule,
    MenuItemModule,
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
