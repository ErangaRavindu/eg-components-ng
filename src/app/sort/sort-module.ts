/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {EgSortHeader} from './sort-header';
import {EgSort} from './sort';
import {MAT_SORT_HEADER_INTL_PROVIDER} from './sort-header-intl';
import {CommonModule} from '@angular/common';
import {EgCommonModule} from '../core/common-behaviors/common-module';


@NgModule({
  imports: [CommonModule, EgCommonModule],
  exports: [EgSort, EgSortHeader],
  declarations: [EgSort, EgSortHeader],
  providers: [MAT_SORT_HEADER_INTL_PROVIDER],
})
export class EgSortModule {}
