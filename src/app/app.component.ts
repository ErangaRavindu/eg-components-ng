import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

import {FormGroup, FormControl} from '@angular/forms';
import { distinctUntilChanged, map, startWith } from 'rxjs/operators';
import {startOfDay, toISODateString} from './datepicker/date-utils';



@Component({
  selector: 'app-root',
  host: { class: 'l-app' },
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  columns = columns;
  columnDefs = columnDefs;
  dataSource$ = mockDataSource$;

  title = 'eg-components';

  checkboxOptions= ["Ford", "BMW", "Fiat"];

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

const columnDefs = [
  {
    cdkColumnDef: "name",
    cdkColumnDefTitle: "Name"
  },
  {
    cdkColumnDef: "lastName",
    cdkColumnDefTitle: "Last Name"
  },
  {
    cdkColumnDef: "age",
    cdkColumnDefTitle: "Age"
  }
];

const columns = ["name", "lastName", "age", "actions"];

const mockDataSource$: Observable<any> = of([
  {
    id: 1,
    name: "aaaaa",
    age: 11,
    lastName: "Whats up"
  },
  {
    id: 2,
    name: "aaaaa",
    age: 12,
    lastName: "Whats up"
  },
  {
    id: 3,
    name: "aaaaa",
    age: 12,
    lastName: "Whats up"
  },
  {
    id: 4,
    name: "aaaaa",
    age: 12,
    lastName: "Whats up"
  }
]);
