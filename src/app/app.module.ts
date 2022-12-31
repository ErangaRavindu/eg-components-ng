import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderModule} from './header/header.module';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputRefDirective } from './form-field/input-ref.directive';
import {IconModule} from './icon/icon.module';
import {DirectiveModule} from './button/directive.module';
import {AvatarModule} from './avatar/avatar.module';
import {DividerModule} from './divider/divider.module';
import {CheckboxModule} from './checkbox/checkbox.module';
import {BadgeModule} from './badge/badge.module';
import {MenuItemModule} from './menu-item/menu-item.module';
import {DropmenuModule} from './dropmenu/dropmenu.module';
import {SelectModule} from './select/select.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalModule} from './datepicker/date-picker-toggle/modal.module';
import {CalendarModule} from './datepicker/calander/calendar.module';


@NgModule({
  declarations: [
    AppComponent,
    FormFieldComponent,
    InputRefDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    IconModule,
    DirectiveModule,
    AvatarModule,
    DividerModule,
    CheckboxModule,
    BadgeModule,
    MenuItemModule,
    DropmenuModule,
    SelectModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule,
    CalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
