import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  host: { class: 'l-app' },
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eg-components';

  checkboxOptions= ["Ford", "BMW", "Fiat"]
}
