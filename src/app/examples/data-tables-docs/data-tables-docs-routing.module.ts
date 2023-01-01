import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DataTablesDocsComponent} from './data-tables-docs.component';


const routes: Routes = [
  {
    path: '',
    component: DataTablesDocsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTablesDocsRoutingModule {
}
