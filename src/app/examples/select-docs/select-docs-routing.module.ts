import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SelectDocsComponent} from './select-docs.component';


const routes: Routes = [
  {
    path: '',
    component: SelectDocsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectDocsRoutingModule {
}
