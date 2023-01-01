import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {startOfDay, toISODateString} from '../../lib/datepicker/date-utils';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'app-date-picker-docs',
  templateUrl: './date-picker-docs.component.html',
  styleUrls: ['./date-picker-docs.component.scss']
})
export class DatePickerDocsComponent {

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  private readonly today = startOfDay(new Date());

  firstDayOfWeekControl = new FormControl('');
  localeControl = new FormControl('');
  minControl = new FormControl(toISODateString(new Date()));
  dateControl = new FormControl();
  datepickerControl = new FormControl();
  disabledControl = new FormControl(false);
  numberOfMonthsControl = new FormControl(1);
  monthAndYearFormatControl = new FormControl();
  firstMonthControl = new FormControl();

  demoFormGroup = new FormGroup({
    firstDayOfWeek: this.firstDayOfWeekControl,
    locale: this.localeControl,
    min: this.minControl,
    date: this.dateControl,
    disabled: this.disabledControl,
    numberOfMonths: this.numberOfMonthsControl,
    monthAndYearFormat: this.monthAndYearFormatControl,
    firstMonth: this.firstMonthControl,
  });

  // minDate$ = this.minControl.valueChanges.pipe(
  //   startWith(this.minControl.value),
  //   distinctUntilChanged(),
  //   map(isoDate => {
  //     // noinspection TypeScriptValidateTypes
  //     return startOfDay(new Date(isoDate));
  //   })
  // );

  firstMonth$ = this.firstMonthControl.valueChanges.pipe(
    distinctUntilChanged(),
    map(isoDate => new Date(isoDate))
  );

  constructor() {
    this.disabledControl.valueChanges.pipe(
      distinctUntilChanged()
    ).subscribe(disabled => {
      if (disabled) {
        this.dateControl.disable();
      } else {
        this.dateControl.enable();
      }
    });
  }


  selectToday() {
    this.dateControl.setValue(this.today);
  }
}
