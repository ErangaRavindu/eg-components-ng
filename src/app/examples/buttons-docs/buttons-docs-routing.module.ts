import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ButtonsDocsComponent} from './buttons-docs.component';


const routes: Routes = [
  {
    path: '',
    component: ButtonsDocsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsDocsRoutingModule {
}
