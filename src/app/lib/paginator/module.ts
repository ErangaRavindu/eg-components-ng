/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EG_PAGINATOR_INTL_PROVIDER} from './paginator-intl';
import {EgPaginator} from './paginator';

@NgModule({
  imports: [CommonModule],
  exports: [EgPaginator],
  declarations: [EgPaginator],
  providers: [EG_PAGINATOR_INTL_PROVIDER],
})
export class EgPaginatorModule {}
