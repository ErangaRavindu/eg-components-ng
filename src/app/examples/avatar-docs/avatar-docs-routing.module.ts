import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AvatarDocsComponent} from './avatar-docs.component';


const routes: Routes = [
  {
    path: '',
    component: AvatarDocsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvatarDocsRoutingModule {
}
