import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DatePickerDocsComponent} from './date-picker-docs.component';
import {AppModule} from '../../app.module';
import {ModalModule} from '../../lib/datepicker/date-picker-toggle/modal.module';
import {IconModule} from '../../lib/icon/icon.module';
import {CalendarModule} from '../../lib/datepicker/calander/calendar.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DatePickerDocsRoutingModule} from './date-picker-docs-routing.module';
import {FormFieldModule} from '../../lib/form-field/form-field.module';



@NgModule({
  declarations: [
    DatePickerDocsComponent,
  ],
  exports:[
    DatePickerDocsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModalModule,
    IconModule,
    CalendarModule,
    DatePickerDocsRoutingModule,
    FormFieldModule
  ]
})
export class DatePickerDocsModule { }
