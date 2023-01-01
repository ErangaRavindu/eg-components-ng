import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesDocsComponent } from './data-tables-docs.component';
import {AvatarModule} from '../../lib/avatar/avatar.module';
import {BadgeModule} from '../../lib/badge/badge.module';
import {AppModule} from '../../app.module';
import {IconModule} from '../../lib/icon/icon.module';
import {CdkTableModule} from '@angular/cdk/table';
import {CheckboxModule} from '../../lib/checkbox/checkbox.module';
import {DataTablesDocsRoutingModule} from './data-tables-docs-routing.module';
import {DirectiveModule} from '../../lib/button/directive.module';
import {FormFieldModule} from '../../lib/form-field/form-field.module';



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
    FormFieldModule
  ]
})
export class DataTablesDocsModule { }
