import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsDocsComponent } from './buttons-docs.component';
import {DirectiveModule} from '../../lib/button/directive.module';
import {IconModule} from '../../lib/icon/icon.module';
import {ButtonsDocsRoutingModule} from './buttons-docs-routing.module';



@NgModule({
  declarations: [
    ButtonsDocsComponent
  ],
  imports: [
    CommonModule,
    DirectiveModule,
    IconModule,
    ButtonsDocsRoutingModule
  ]
})
export class ButtonsDocsModule { }
