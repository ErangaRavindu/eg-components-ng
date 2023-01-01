import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropMenuDocsComponent } from './drop-menu-docs.component';
import {DropmenuModule} from '../../lib/dropmenu/dropmenu.module';
import {MenuItemModule} from '../../lib/menu-item/menu-item.module';
import {DirectiveModule} from '../../lib/button/directive.module';
import {IconModule} from '../../lib/icon/icon.module';
import {DropMenuDocsRoutingModule} from './drop-menu-docs-routing.module';



@NgModule({
  declarations: [
    DropMenuDocsComponent
  ],
  imports: [
    CommonModule,
    DropmenuModule,
    MenuItemModule,
    DirectiveModule,
    IconModule,
    DropMenuDocsRoutingModule
  ]
})
export class DropMenuDocsModule { }
