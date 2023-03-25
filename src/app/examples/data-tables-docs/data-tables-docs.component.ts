import {Component, OnInit} from '@angular/core';
import {DataSource, SelectionModel} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 2, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 3, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 4, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 5, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 6, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 7, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 8, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-data-tables-docs',
  templateUrl: './data-tables-docs.component.html',
  styleUrls: ['./data-tables-docs.component.scss']
})
export class DataTablesDocsComponent implements OnInit{
  displayedColumns: string[] = ['select','position', 'name', 'weight', 'symbol'];
  dataSource = new ExampleDataSource();
  selection = new SelectionModel<PeriodicElement>(true, []);

  filter: string ='';
  sortBy: string = '';
  isAsc: boolean = true;

  constructor() { }

  ngOnInit(): void {

  }

  sample(name: string, mode: boolean){
    this.sortBy = name;
    this.isAsc = mode;
    this.sort();
  }


  sort() {
    const arr= this.dataSource.data.getValue();
    arr.sort((a : any, b : any) => {
      if (a[this.sortBy] < b[this.sortBy]) {
        return this.isAsc ? -1 : 1;
      } else if (a[this.sortBy] > b[this.sortBy]) {
        return this.isAsc ? 1 : -1;
      } else {
        return 0;
      }
    });
    this.dataSource.data.next(arr);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.value.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.value.forEach(element => this.selection.select(element));
  }



}
export class ExampleDataSource extends DataSource<PeriodicElement> {
  /** Stream of data that is provided to the table. */
  data = new BehaviorSubject<PeriodicElement[]>(ELEMENT_DATA);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<PeriodicElement[]> {
    return this.data;
  }

  disconnect() {}
}
