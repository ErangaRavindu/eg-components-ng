import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TextFieldDocsComponent} from './text-field-docs.component';


const routes: Routes = [
  {
    path: '',
    component: TextFieldDocsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextFiledDocsRoutingModule {
}
