/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {BooleanInput, coerceBooleanProperty} from '@angular/cdk/coercion';
import {
  Directive,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import {CanDisable, HasInitialized, mixinDisabled, mixinInitialized} from '../core';
import {Subject} from 'rxjs';
import {SortDirection} from './sort-direction';
import {
  getSortDuplicateSortableIdError,
  getSortHeaderMissingIdError,
  getSortInvalidDirectionError,
} from './sort-errors';

/** Position of the arrow that displays when sorted. */
export type SortHeaderArrowPosition = 'before' | 'after';

/** Interface for a directive that holds sorting state consumed by `EgSortHeader`. */
export interface EgSortable {
  /** The id of the column being sorted. */
  id: string;

  /** Starting sort direction. */
  start: SortDirection;

  /** Whether to disable clearing the sorting state. */
  disableClear: boolean;
}

/** The current sort state. */
export interface Sort {
  /** The id of the column being sorted. */
  active: string;

  /** The sort direction. */
  direction: SortDirection;
}

/** Default options for `mat-sort`.  */
export interface EgSortDefaultOptions {
  /** Whether to disable clearing the sorting state. */
  disableClear?: boolean;
  /** Position of the arrow that displays when sorted. */
  arrowPosition?: SortHeaderArrowPosition;
}

/** Injection token to be used to override the default options for `mat-sort`. */
export const MAT_SORT_DEFAULT_OPTIONS = new InjectionToken<EgSortDefaultOptions>(
  'MAT_SORT_DEFAULT_OPTIONS',
);

// Boilerplate for applying mixins to EgSort.
/** @docs-private */
const _EgSortBase = mixinInitialized(mixinDisabled(class {}));

/** Container for EgSortables to manage the sort state and provide default sort parameters. */
@Directive({
  selector: '[matSort]',
  exportAs: 'matSort',
  host: {'class': 'mat-sort'},
  inputs: ['disabled: matSortDisabled'],
})
export class EgSort
  extends _EgSortBase
  implements CanDisable, HasInitialized, OnChanges, OnDestroy, OnInit
{
  /** Collection of all registered sortables that this directive manages. */
  sortables = new Map<string, EgSortable>();

  /** Used to notify any child components listening to state changes. */
  readonly _stateChanges = new Subject<void>();

  /** The id of the most recently sorted EgSortable. */
  @Input('matSortActive') active: string = '';

  /**
   * The direction to set when an EgSortable is initially sorted.
   * May be overridden by the EgSortable's sort start.
   */
  @Input('matSortStart') start: SortDirection = 'asc';

  /** The sort direction of the currently active EgSortable. */
  @Input('matSortDirection')
  get direction(): SortDirection {
    return this._direction;
  }
  set direction(direction: SortDirection) {
    if (
      direction &&
      direction !== 'asc' &&
      direction !== 'desc' &&
      (typeof ngDevMode === 'undefined' || ngDevMode)
    ) {
      throw getSortInvalidDirectionError(direction);
    }
    this._direction = direction;
  }
  private _direction: SortDirection = '';

  /**
   * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
   * May be overridden by the EgSortable's disable clear input.
   */
  @Input('matSortDisableClear')
  get disableClear(): boolean {
    return this._disableClear;
  }
  set disableClear(v: BooleanInput) {
    this._disableClear = coerceBooleanProperty(v);
  }
  private _disableClear: boolean = false;

  /** Event emitted when the user changes either the active sort or sort direction. */
  @Output('matSortChange') readonly sortChange: EventEmitter<Sort> = new EventEmitter<Sort>();

  constructor(
    @Optional()
    @Inject(MAT_SORT_DEFAULT_OPTIONS)
    private _defaultOptions?: EgSortDefaultOptions,
  ) {
    super();
  }

  /**
   * Register function to be used by the contained EgSortables. Adds the EgSortable to the
   * collection of EgSortables.
   */
  register(sortable: EgSortable): void {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!sortable.id) {
        throw getSortHeaderMissingIdError();
      }

      if (this.sortables.has(sortable.id)) {
        throw getSortDuplicateSortableIdError(sortable.id);
      }
    }

    this.sortables.set(sortable.id, sortable);
  }

  /**
   * Unregister function to be used by the contained EgSortables. Removes the EgSortable from the
   * collection of contained EgSortables.
   */
  deregister(sortable: EgSortable): void {
    this.sortables.delete(sortable.id);
  }

  /** Sets the active sort id and determines the new sort direction. */
  sort(sortable: EgSortable): void {
    if (this.active != sortable.id) {
      this.active = sortable.id;
      this.direction = sortable.start ? sortable.start : this.start;
    } else {
      this.direction = this.getNextSortDirection(sortable);
    }

    this.sortChange.emit({active: this.active, direction: this.direction});
  }

  /** Returns the next sort direction of the active sortable, checking for potential overrides. */
  getNextSortDirection(sortable: EgSortable): SortDirection {
    if (!sortable) {
      return '';
    }

    // Get the sort direction cycle with the potential sortable overrides.
    const disableClear =
      sortable?.disableClear ?? this.disableClear ?? !!this._defaultOptions?.disableClear;
    let sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear);

    // Get and return the next direction in the cycle
    let nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
    if (nextDirectionIndex >= sortDirectionCycle.length) {
      nextDirectionIndex = 0;
    }
    return sortDirectionCycle[nextDirectionIndex];
  }

  ngOnInit() {
    this._markInitialized();
  }

  ngOnChanges() {
    this._stateChanges.next();
  }

  ngOnDestroy() {
    this._stateChanges.complete();
  }
}

/** Returns the sort direction cycle to use given the provided parameters of order and clear. */
function getSortDirectionCycle(start: SortDirection, disableClear: boolean): SortDirection[] {
  let sortOrder: SortDirection[] = ['asc', 'desc'];
  if (start == 'desc') {
    sortOrder.reverse();
  }
  if (!disableClear) {
    sortOrder.push('');
  }

  return sortOrder;
}
