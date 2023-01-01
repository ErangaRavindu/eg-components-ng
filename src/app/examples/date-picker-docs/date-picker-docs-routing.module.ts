import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DatePickerDocsComponent} from './date-picker-docs.component';


const routes: Routes = [
  {
    path: '',
    component: DatePickerDocsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatePickerDocsRoutingModule {
}
