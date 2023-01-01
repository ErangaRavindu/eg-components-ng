import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDocsComponent } from './select-docs.component';
import {SelectModule} from '../../lib/select/select.module';
import {SelectDocsRoutingModule} from './select-docs-routing.module';



@NgModule({
  declarations: [
    SelectDocsComponent
  ],
    imports: [
        CommonModule,
        SelectModule,
        SelectDocsRoutingModule
    ]
})
export class SelectDocsModule { }
