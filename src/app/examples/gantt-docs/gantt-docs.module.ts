import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GanttDocsComponent } from './gantt-docs.component';
import {GanttDocsRoutingModule} from './gantt-docs-routing.module';
import {GanttModule} from '../../lib/gantt/gantt.module';



@NgModule({
  declarations: [
    GanttDocsComponent
  ],
  imports: [
    CommonModule,
    GanttDocsRoutingModule,
    GanttModule
  ]
})
export class GanttDocsModule { }
