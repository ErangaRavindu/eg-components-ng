import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GanttDocsComponent} from './gantt-docs.component';


const routes: Routes = [
  {
    path: '',
    component: GanttDocsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GanttDocsRoutingModule {
}
