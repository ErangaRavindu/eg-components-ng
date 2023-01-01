import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFieldDocsComponent } from './text-field-docs.component';
import {AppModule} from '../../app.module';
import {IconModule} from '../../lib/icon/icon.module';
import {TextFiledDocsRoutingModule} from './text-filed-docs-routing.module';
import {FormFieldModule} from '../../lib/form-field/form-field.module';



@NgModule({
  declarations: [
    TextFieldDocsComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    TextFiledDocsRoutingModule,
    FormFieldModule
  ]
})
export class TextFieldDocsModule { }
