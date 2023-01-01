import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'avatar',
    loadChildren: () =>
      import('./examples/avatar-docs/avatar-docs.module').then(m => m.AvatarDocsModule)
  },
  {
    path: 'alerts',
    loadChildren: () =>
      import('./examples/alerts-docs/alerts-docs.module').then(m => m.AlertsDocsModule)
  },
  {
    path: 'buttons',
    loadChildren: () =>
      import('./examples/buttons-docs/buttons-docs.module').then(m => m.ButtonsDocsModule)
  },
  {
    path: 'checkbox',
    loadChildren: () =>
      import('./examples/checkbox-docs/checkbox-docs.module').then(m => m.CheckboxDocsModule)
  },
  {
    path: 'date-picker',
    loadChildren: () =>
      import('./examples/date-picker-docs/date-picker-docs.module').then(m => m.DatePickerDocsModule)
  },
  {
    path: 'drop-menu',
    loadChildren: () =>
      import('./examples/drop-menu-docs/drop-menu-docs.module').then(m => m.DropMenuDocsModule)
  },
  {
    path: 'select',
    loadChildren: () =>
      import('./examples/select-docs/select-docs.module').then(m => m.SelectDocsModule)
  },
  {
    path: 'input',
    loadChildren: () =>
      import('./examples/text-field-docs/text-field-docs.module').then(m => m.TextFieldDocsModule)
  },
  {
    path: 'data-tables',
    loadChildren: () =>
      import('./examples/data-tables-docs/data-tables-docs.module').then(m => m.DataTablesDocsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
