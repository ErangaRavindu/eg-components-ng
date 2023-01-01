import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CheckboxDocsComponent} from './checkbox-docs.component';


const routes: Routes = [
  {
    path: '',
    component: CheckboxDocsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckboxDocsRoutingModule {
}
