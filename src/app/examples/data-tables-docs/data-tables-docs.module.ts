import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesDocsComponent } from './data-tables-docs.component';
import {AvatarModule} from '../../lib/avatar/avatar.module';
import {BadgeModule} from '../../lib/badge/badge.module';
import {IconModule} from '../../lib/icon/icon.module';
import {CdkTableModule} from '@angular/cdk/table';
import {CheckboxModule} from '../../lib/checkbox/checkbox.module';
import {DataTablesDocsRoutingModule} from './data-tables-docs-routing.module';
import {DirectiveModule} from '../../lib/button/directive.module';
import {FormFieldModule} from '../../lib/form-field/form-field.module';
import {DropmenuModule} from '../../lib/dropmenu/dropmenu.module';
import {MenuItemModule} from '../../lib/menu-item/menu-item.module';
import {TableSortDirectiveModule} from '../../lib/Directives/table-sort-directive/table-sort-directive.module';
import {DataSortModule} from '../../lib/Directives/pipes.module';
import {PaginatorModule} from '../../lib/paginator/paginator.module';



@NgModule({
  declarations: [
    DataTablesDocsComponent
  ],
    imports: [
        CommonModule,
        AvatarModule,
        BadgeModule,
        IconModule,
        CdkTableModule,
        CheckboxModule,
        DataTablesDocsRoutingModule,
        DirectiveModule,
        FormFieldModule,
        DropmenuModule,
        MenuItemModule,
        TableSortDirectiveModule,
        DataSortModule,
        PaginatorModule,
    ]
})
export class DataTablesDocsModule { }
