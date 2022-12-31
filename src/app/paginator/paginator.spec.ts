import {ComponentFixture, TestBed, tick, fakeAsync} from '@angular/core/testing';
import {Component, ViewChild, Type, Provider} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {dispatchMouseEvent} from '@angular/cdk/testing/private';;
import {By} from '@angular/platform-browser';
import {
  EgPaginatorModule,
  EgPaginator,
  EgPaginatorIntl,
  EgPaginatorSelectConfig,
} from './index';
import {EG_PAGINATOR_DEFAULT_OPTIONS, EgPaginatorDefaultOptions} from './paginator';

describe('MDC-based MatPaginator', () => {
  function createComponent<T>(type: Type<T>, providers: Provider[] = []): ComponentFixture<T> {
    TestBed.configureTestingModule({
      imports: [EgPaginatorModule, NoopAnimationsModule],
      declarations: [type],
      providers: [EgPaginatorIntl, ...providers],
    }).compileComponents();

    const fixture = TestBed.createComponent(type);
    fixture.detectChanges();
    return fixture;
  }

  describe('with the default internationalization provider', () => {
    describe('showing the right range text', () => {
      it('should show second page of list of 100, each page contains 10 items', () => {
        const fixture = createComponent(EgPaginatorApp);
        const component = fixture.componentInstance;
        const rangeElement = fixture.nativeElement.querySelector('.mat-mdc-paginator-range-label');
        component.length = 100;
        component.pageSize = 10;
        component.pageIndex = 1;
        fixture.detectChanges();
        expect(rangeElement.textContent!.trim()).toBe('11 – 20 of 100');
      });

      it('should show third page of list of 200, each page contains 20 items', () => {
        const fixture = createComponent(EgPaginatorApp);
        const component = fixture.componentInstance;
        const rangeElement = fixture.nativeElement.querySelector('.mat-mdc-paginator-range-label');
        component.length = 200;
        component.pageSize = 20;
        component.pageIndex = 2;
        fixture.detectChanges();
        expect(rangeElement.textContent!.trim()).toBe('41 – 60 of 200');
      });

      it('should show first page of list of 0, each page contains 5 items', () => {
        const fixture = createComponent(EgPaginatorApp);
        const component = fixture.componentInstance;
        const rangeElement = fixture.nativeElement.querySelector('.mat-mdc-paginator-range-label');
        component.length = 0;
        component.pageSize = 5;
        component.pageIndex = 2;
        fixture.detectChanges();
        expect(rangeElement.textContent!.trim()).toBe('0 of 0');
      });

      it('should show third page of list of 12, each page contains 5 items', () => {
        const fixture = createComponent(EgPaginatorApp);
        const component = fixture.componentInstance;
        const rangeElement = fixture.nativeElement.querySelector('.mat-mdc-paginator-range-label');
        component.length = 12;
        component.pageSize = 5;
        component.pageIndex = 2;
        fixture.detectChanges();
        expect(rangeElement.textContent!.trim()).toBe('11 – 12 of 12');
      });

      it('should show third page of list of 10, each page contains 5 items', () => {
        const fixture = createComponent(EgPaginatorApp);
        const component = fixture.componentInstance;
        const rangeElement = fixture.nativeElement.querySelector('.mat-mdc-paginator-range-label');
        component.length = 10;
        component.pageSize = 5;
        component.pageIndex = 2;
        fixture.detectChanges();
        expect(rangeElement.textContent!.trim()).toBe('11 – 15 of 10');
      });

      it('should show third page of list of -5, each page contains 5 items', () => {
        const fixture = createComponent(EgPaginatorApp);
        const component = fixture.componentInstance;
        const rangeElement = fixture.nativeElement.querySelector('.mat-mdc-paginator-range-label');
        component.length = -5;
        component.pageSize = 5;
        component.pageIndex = 2;
        fixture.detectChanges();
        expect(rangeElement.textContent!.trim()).toBe('11 – 15 of 0');
      });
    });

    it('should show right aria-labels for select and buttons', () => {
      const fixture = createComponent(EgPaginatorApp);

      expect(getPreviousButton(fixture).getAttribute('aria-label')).toBe('Previous page');
      expect(getNextButton(fixture).getAttribute('aria-label')).toBe('Next page');

      const select = fixture.nativeElement.querySelector('.mat-mdc-select');
      const selectLabelIds = select.getAttribute('aria-labelledby')?.split(/\s/g) as string[];
      const selectLabelTexts = selectLabelIds?.map(labelId => {
        return fixture.nativeElement.querySelector(`#${labelId}`)?.textContent?.trim();
      });
      expect(selectLabelTexts).toContain('Items per page:');
    });

    it('should re-render when the i18n labels change', () => {
      const fixture = createComponent(EgPaginatorApp);
      const label = fixture.nativeElement.querySelector('.mat-mdc-paginator-page-size-label');
      const intl = TestBed.inject(EgPaginatorIntl);

      intl.itemsPerPageLabel = '1337 items per page';
      intl.changes.next();
      fixture.detectChanges();

      expect(label.textContent!.trim()).toBe('1337 items per page');
    });
  });

  describe('when navigating with the next and previous buttons', () => {
    it('should be able to go to the next page', () => {
      const fixture = createComponent(EgPaginatorApp);
      const component = fixture.componentInstance;
      const paginator = component.paginator;
      expect(paginator.pageIndex).toBe(0);

      dispatchMouseEvent(getNextButton(fixture), 'click');

      expect(paginator.pageIndex).toBe(1);
      expect(component.pageEvent).toHaveBeenCalledWith(
        jasmine.objectContaining({
          previousPageIndex: 0,
          pageIndex: 1,
        }),
      );
    });

    it('should be able to go to the previous page', () => {
      const fixture = createComponent(EgPaginatorApp);
      const component = fixture.componentInstance;
      const paginator = component.paginator;
      paginator.pageIndex = 1;
      fixture.detectChanges();
      expect(paginator.pageIndex).toBe(1);

      dispatchMouseEvent(getPreviousButton(fixture), 'click');

      expect(paginator.pageIndex).toBe(0);
      expect(component.pageEvent).toHaveBeenCalledWith(
        jasmine.objectContaining({
          previousPageIndex: 1,
          pageIndex: 0,
        }),
      );
    });
  });

  it('should be able to show the first/last buttons', () => {
    const fixture = createComponent(EgPaginatorApp);
    expect(getFirstButton(fixture)).withContext('Expected first button to not exist.').toBeNull();

    expect(getLastButton(fixture)).withContext('Expected last button to not exist.').toBeNull();

    fixture.componentInstance.showFirstLastButtons = true;
    fixture.detectChanges();

    expect(getFirstButton(fixture))
      .withContext('Expected first button to be rendered.')
      .toBeTruthy();

    expect(getLastButton(fixture)).withContext('Expected last button to be rendered.').toBeTruthy();
  });

  it('should mark itself as initialized', fakeAsync(() => {
    const fixture = createComponent(EgPaginatorApp);
    const component = fixture.componentInstance;
    const paginator = component.paginator;
    let isMarkedInitialized = false;
    paginator.initialized.subscribe(() => (isMarkedInitialized = true));

    tick();
    expect(isMarkedInitialized).toBeTruthy();
  }));

  it('should not allow a negative pageSize', () => {
    const fixture = createComponent(EgPaginatorApp);
    const component = fixture.componentInstance;
    const paginator = component.paginator;
    paginator.pageSize = -1337;
    expect(paginator.pageSize).toBeGreaterThanOrEqual(0);
  });

  it('should not allow a negative pageIndex', () => {
    const fixture = createComponent(EgPaginatorApp);
    const component = fixture.componentInstance;
    const paginator = component.paginator;
    paginator.pageIndex = -42;
    expect(paginator.pageIndex).toBeGreaterThanOrEqual(0);
  });

  it('should be able to set the color of the form field', () => {
    const fixture = createComponent(EgPaginatorApp);
    const component = fixture.componentInstance;
    const formField: HTMLElement = fixture.nativeElement.querySelector('.mat-mdc-form-field');

    // component.color = 'accent';
    fixture.detectChanges();

    expect(formField.classList).not.toContain('mat-warn');
    expect(formField.classList).toContain('mat-accent');


    fixture.detectChanges();
    expect(formField.classList).toContain('mat-warn');
    expect(formField.classList).not.toContain('mat-accent');
  });

  it('should be able to pass options to the underlying mat-select', () => {
    const fixture = createComponent(EgPaginatorApp);
    fixture.detectChanges();
    // const select: MatSelect = fixture.debugElement.query(By.directive(MatSelect)).componentInstance;
    //
    // expect(select.disableOptionCentering).toBe(false);
    // expect(select.panelClass).toBeFalsy();
    //
    // fixture.componentInstance.selectConfig = {
    //   disableOptionCentering: true,
    //   panelClass: 'custom-class',
    // };
    // fixture.detectChanges();
    //
    // expect(select.disableOptionCentering).toBe(true);
    // expect(select.panelClass).toBe('custom-class');
  });

  describe('when showing the first and last button', () => {
    let fixture: ComponentFixture<EgPaginatorApp>;
    let component: EgPaginatorApp;
    let paginator: EgPaginator;

    beforeEach(() => {
      fixture = createComponent(EgPaginatorApp);
      component = fixture.componentInstance;
      paginator = component.paginator;
      component.showFirstLastButtons = true;
      fixture.detectChanges();
    });

    it('should show right aria-labels for first/last buttons', () => {
      expect(getFirstButton(fixture).getAttribute('aria-label')).toBe('First page');
      expect(getLastButton(fixture).getAttribute('aria-label')).toBe('Last page');
    });

    it('should be able to go to the last page via the last page button', () => {
      expect(paginator.pageIndex).toBe(0);

      dispatchMouseEvent(getLastButton(fixture), 'click');

      expect(paginator.pageIndex).toBe(9);
      expect(component.pageEvent).toHaveBeenCalledWith(
        jasmine.objectContaining({
          previousPageIndex: 0,
          pageIndex: 9,
        }),
      );
    });

    it('should be able to go to the first page via the first page button', () => {
      paginator.pageIndex = 3;
      fixture.detectChanges();
      expect(paginator.pageIndex).toBe(3);

      dispatchMouseEvent(getFirstButton(fixture), 'click');

      expect(paginator.pageIndex).toBe(0);
      expect(component.pageEvent).toHaveBeenCalledWith(
        jasmine.objectContaining({
          previousPageIndex: 3,
          pageIndex: 0,
        }),
      );
    });

    it('should disable navigating to the next page if at last page', () => {
      component.goToLastPage();
      fixture.detectChanges();
      expect(paginator.pageIndex).toBe(9);
      expect(paginator.hasNextPage()).toBe(false);

      component.pageEvent.calls.reset();
      dispatchMouseEvent(getNextButton(fixture), 'click');

      expect(component.pageEvent).not.toHaveBeenCalled();
      expect(paginator.pageIndex).toBe(9);
    });

    it('should disable navigating to the previous page if at first page', () => {
      expect(paginator.pageIndex).toBe(0);
      expect(paginator.hasPreviousPage()).toBe(false);

      component.pageEvent.calls.reset();
      dispatchMouseEvent(getPreviousButton(fixture), 'click');

      expect(component.pageEvent).not.toHaveBeenCalled();
      expect(paginator.pageIndex).toBe(0);
    });
  });

  it('should mark for check when inputs are changed directly', () => {
    const fixture = createComponent(EgPaginatorApp);
    const component = fixture.componentInstance;
    const paginator = component.paginator;
    const rangeElement = fixture.nativeElement.querySelector('.mat-mdc-paginator-range-label');

    expect(rangeElement.innerText.trim()).toBe('1 – 10 of 100');

    paginator.length = 99;
    fixture.detectChanges();
    expect(rangeElement.innerText.trim()).toBe('1 – 10 of 99');

    paginator.pageSize = 6;
    fixture.detectChanges();
    expect(rangeElement.innerText.trim()).toBe('1 – 6 of 99');

    paginator.pageIndex = 1;
    fixture.detectChanges();
    expect(rangeElement.innerText.trim()).toBe('7 – 12 of 99');

    // Having one option and the same page size should remove the select menu
    expect(fixture.nativeElement.querySelector('.mat-mdc-select')).not.toBeNull();
    paginator.pageSize = 10;
    paginator.pageSizeOptions = [10];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.mat-mdc-select')).toBeNull();
  });

  it('should default the page size options to the page size if no options provided', () => {
    const fixture = createComponent(MatPaginatorWithoutOptionsApp);
    fixture.detectChanges();

    expect(fixture.componentInstance.paginator._displayedPageSizeOptions).toEqual([10]);
  });

  it('should default the page size to the first page size option if not provided', () => {
    const fixture = createComponent(EgPaginatorWithoutPageSizeApp);
    fixture.detectChanges();

    // expect(fixture.componentInstance.paginator.pageSize).toEqual(10);
  });

  it('should show a sorted list of page size options including the current page size', () => {
    const fixture = createComponent(EgPaginatorApp);
    const component = fixture.componentInstance;
    const paginator = component.paginator;
    expect(paginator._displayedPageSizeOptions).toEqual([5, 10, 25, 100]);

    component.pageSize = 30;
    fixture.detectChanges();
    expect(paginator.pageSizeOptions).toEqual([5, 10, 25, 100]);
    expect(paginator._displayedPageSizeOptions).toEqual([5, 10, 25, 30, 100]);

    component.pageSizeOptions = [100, 25, 10, 5];
    fixture.detectChanges();
    expect(paginator._displayedPageSizeOptions).toEqual([5, 10, 25, 30, 100]);
  });

  it('should be able to change the page size while keeping the first item present', () => {
    const fixture = createComponent(EgPaginatorApp);
    const component = fixture.componentInstance;
    const paginator = component.paginator;

    // Start on the third page of a list of 100 with a page size of 10.
    component.pageIndex = 4;
    component.pageSize = 10;
    component.length = 100;
    fixture.detectChanges();

    // The first item of the page should be item with index 40
    expect(paginator.pageIndex * paginator.pageSize).toBe(40);

    // The first item on the page is now 25. Change the page size to 25 so that we should now be
    // on the second page where the top item is index 25.
    component.pageEvent.calls.reset();
    paginator._changePageSize(25);

    expect(component.pageEvent).toHaveBeenCalledWith(
      jasmine.objectContaining({
        pageIndex: 1,
        pageSize: 25,
      }),
    );

    // The first item on the page is still 25. Change the page size to 8 so that we should now be
    // on the fourth page where the top item is index 24.
    component.pageEvent.calls.reset();
    paginator._changePageSize(8);

    expect(component.pageEvent).toHaveBeenCalledWith(
      jasmine.objectContaining({
        pageIndex: 3,
        pageSize: 8,
      }),
    );

    // The first item on the page is 24. Change the page size to 16 so that we should now be
    // on the first page where the top item is index 0.
    component.pageEvent.calls.reset();
    paginator._changePageSize(25);

    expect(component.pageEvent).toHaveBeenCalledWith(
      jasmine.objectContaining({
        pageIndex: 0,
        pageSize: 25,
      }),
    );
  });

  it('should keep track of the right number of pages', () => {
    const fixture = createComponent(EgPaginatorApp);
    const component = fixture.componentInstance;
    const paginator = component.paginator;

    component.pageSize = 10;
    component.length = 100;
    fixture.detectChanges();
    expect(paginator.getNumberOfPages()).toBe(10);

    component.pageSize = 10;
    component.length = 0;
    fixture.detectChanges();
    expect(paginator.getNumberOfPages()).toBe(0);

    component.pageSize = 10;
    component.length = 10;
    fixture.detectChanges();
    expect(paginator.getNumberOfPages()).toBe(1);
  });

  it('should show a select only if there are multiple options', () => {
    const fixture = createComponent(EgPaginatorApp);
    const component = fixture.componentInstance;
    const paginator = component.paginator;

    expect(paginator._displayedPageSizeOptions).toEqual([5, 10, 25, 100]);
    expect(fixture.nativeElement.querySelector('.mat-mdc-select')).not.toBeNull();

    // Remove options so that the paginator only uses the current page size (10) as an option.
    // Should no longer show the select component since there is only one option.
    component.pageSizeOptions = [];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.mat-mdc-select')).toBeNull();
  });

  it('should handle the number inputs being passed in as strings', () => {
    const fixture = createComponent(MatPaginatorWithStringValues);
    fixture.detectChanges();

    const withStringPaginator = fixture.componentInstance.paginator;
    expect(withStringPaginator.pageIndex).toEqual(0);
    expect(withStringPaginator.length).toEqual(100);
    expect(withStringPaginator.pageSize).toEqual(10);
    expect(withStringPaginator.pageSizeOptions).toEqual([5, 10, 25, 100]);
  });

  it('should be able to hide the page size select', () => {
    const fixture = createComponent(EgPaginatorApp);
    const element = fixture.nativeElement;

    expect(element.querySelector('.mat-mdc-paginator-page-size'))
      .withContext('Expected select to be rendered.')
      .toBeTruthy();

    fixture.componentInstance.hidePageSize = true;
    fixture.detectChanges();

    expect(element.querySelector('.mat-mdc-paginator-page-size'))
      .withContext('Expected select to be removed.')
      .toBeNull();
  });

  it('should be able to disable all the controls in the paginator via the binding', () => {
    // const fixture = createComponent(EgPaginatorApp);
    // const select: MatSelect = fixture.debugElement.query(
    //   By.directive(MatSelect),
    // )!.componentInstance;
    //
    // fixture.componentInstance.pageIndex = 1;
    // fixture.componentInstance.showFirstLastButtons = true;
    // fixture.detectChanges();
    //
    // expect(select.disabled).toBe(false);
    // expect(getPreviousButton(fixture).hasAttribute('disabled')).toBe(false);
    // expect(getNextButton(fixture).hasAttribute('disabled')).toBe(false);
    // expect(getFirstButton(fixture).hasAttribute('disabled')).toBe(false);
    // expect(getLastButton(fixture).hasAttribute('disabled')).toBe(false);
    //
    // fixture.componentInstance.disabled = true;
    // fixture.detectChanges();
    //
    // expect(select.disabled).toBe(true);
    // expect(getPreviousButton(fixture).hasAttribute('disabled')).toBe(true);
    // expect(getNextButton(fixture).hasAttribute('disabled')).toBe(true);
    // expect(getFirstButton(fixture).hasAttribute('disabled')).toBe(true);
    // expect(getLastButton(fixture).hasAttribute('disabled')).toBe(true);
  });

  it('should be able to configure the default options via a provider', () => {
    const fixture = createComponent(EgPaginatorWithoutInputsApp, [
      {
        provide: EG_PAGINATOR_DEFAULT_OPTIONS,
        useValue: {
          pageSize: 7,
          pageSizeOptions: [7, 14, 21],
          hidePageSize: true,
          showFirstLastButtons: true,
        } as EgPaginatorDefaultOptions,
      },
    ]);
    const paginator = fixture.componentInstance.paginator;

    expect(paginator.pageSize).toBe(7);
    expect(paginator.pageSizeOptions).toEqual([7, 14, 21]);
    expect(paginator.hidePageSize).toBe(true);
    expect(paginator.showFirstLastButtons).toBe(true);
  });

  it('should set `role="group"` on the host element', () => {
    const fixture = createComponent(EgPaginatorApp);
    const hostElement = fixture.nativeElement.querySelector('mat-paginator');
    expect(hostElement.getAttribute('role')).toBe('group');
  });

  it('should handle the page size options input being passed in as readonly array', () => {
    const fixture = createComponent(MatPaginatorWithReadonlyOptions);
    fixture.detectChanges();

    expect(fixture.componentInstance.paginator._displayedPageSizeOptions).toEqual([5, 10, 25, 100]);
  });
});

function getPreviousButton(fixture: ComponentFixture<any>) {
  return fixture.nativeElement.querySelector('.mat-mdc-paginator-navigation-previous');
}

function getNextButton(fixture: ComponentFixture<any>) {
  return fixture.nativeElement.querySelector('.mat-mdc-paginator-navigation-next');
}

function getFirstButton(fixture: ComponentFixture<any>) {
  return fixture.nativeElement.querySelector('.mat-mdc-paginator-navigation-first');
}

function getLastButton(fixture: ComponentFixture<any>) {
  return fixture.nativeElement.querySelector('.mat-mdc-paginator-navigation-last');
}

@Component({
  template: `
    <eg-paginator [pageIndex]="pageIndex"
                   [pageSize]="pageSize"
                   [pageSizeOptions]="pageSizeOptions"
                   [hidePageSize]="hidePageSize"
                   [selectConfig]="selectConfig"
                   [showFirstLastButtons]="showFirstLastButtons"
                   [length]="length"
                   [disabled]="disabled"
                   (page)="pageEvent($event)">
    </eg-paginator>
  `,
})
class EgPaginatorApp {
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  hidePageSize = false;
  showFirstLastButtons = false;
  length = 100;
  disabled: boolean;
  pageEvent = jasmine.createSpy('page event');
  selectConfig: EgPaginatorSelectConfig = {};

  @ViewChild(EgPaginator) paginator: EgPaginator | any;

  goToLastPage() {
    this.pageIndex = Math.ceil(this.length / this.pageSize) - 1;
  }
}

@Component({
  template: `
    <eg-paginator></eg-paginator>
  `,
})
class EgPaginatorWithoutInputsApp {
  @ViewChild(EgPaginator) paginator: EgPaginator | any;
}

@Component({
  template: `
    <eg-paginator [pageSizeOptions]="[10, 20, 30]"></eg-paginator>
  `,
})
class EgPaginatorWithoutPageSizeApp {
  @ViewChild(EgPaginator) paginator: EgPaginator | any;
}

@Component({
  template: `
    <eg-paginator [pageSize]="10"></eg-paginator>
  `,
})
class MatPaginatorWithoutOptionsApp {
  @ViewChild(EgPaginator) paginator: EgPaginator | any;
}

@Component({
  template: `
    <eg-paginator pageIndex="0"
                   pageSize="10"
                   [pageSizeOptions]="['5', '10', '25', '100']"
                   length="100">
    </eg-paginator>
  `,
})
class MatPaginatorWithStringValues {
  @ViewChild(EgPaginator) paginator: EgPaginator | any;
}

@Component({
  template: `
    <mat-paginator [pageSizeOptions]="pageSizeOptions">
    </mat-paginator>
  `,
})
class MatPaginatorWithReadonlyOptions {
  @ViewChild(EgPaginator) paginator: EgPaginator | any;
  pageSizeOptions: readonly number[] = [5, 10, 25, 100];
}