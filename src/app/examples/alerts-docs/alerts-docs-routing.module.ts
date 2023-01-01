import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AlertsDocsComponent} from './alerts-docs.component';


const routes: Routes = [
  {
    path: '',
    component: AlertsDocsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertsDocsRoutingModule {
}
