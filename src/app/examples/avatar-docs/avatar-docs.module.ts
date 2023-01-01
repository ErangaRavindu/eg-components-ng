import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarDocsComponent } from './avatar-docs.component';
import {AvatarDocsRoutingModule} from './avatar-docs-routing.module';
import {AvatarModule} from '../../lib/avatar/avatar.module';



@NgModule({
  declarations: [
    AvatarDocsComponent
  ],
  imports: [
    CommonModule,
    AvatarDocsRoutingModule,
    AvatarModule
  ]
})
export class AvatarDocsModule { }
