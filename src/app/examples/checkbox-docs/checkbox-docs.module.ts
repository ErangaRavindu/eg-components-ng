import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxDocsComponent } from './checkbox-docs.component';
import {CheckboxModule} from '../../lib/checkbox/checkbox.module';
import {CheckboxDocsRoutingModule} from './checkbox-docs-routing.module';



@NgModule({
  declarations: [
    CheckboxDocsComponent
  ],
  imports: [
    CommonModule,
    CheckboxModule,
    CheckboxDocsRoutingModule
  ]
})
export class CheckboxDocsModule { }
