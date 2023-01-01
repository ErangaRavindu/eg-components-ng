import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DropMenuDocsComponent} from './drop-menu-docs.component';


const routes: Routes = [
  {
    path: '',
    component: DropMenuDocsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DropMenuDocsRoutingModule {
}
