import {Component, Input} from '@angular/core';
import {configOptions} from '../../lib/gantt/config-model';

@Component({
  selector: 'app-gantt-docs',
  host: { class: 'w-100' },
  templateUrl: './gantt-docs.component.html',
  styleUrls: ['./gantt-docs.component.scss']
})
export class GanttDocsComponent {

  public ganttOptions = {
    startDate: '22/01/21',
    endDate:  '22/01/21',
  }

  constructor() {
  }


}
