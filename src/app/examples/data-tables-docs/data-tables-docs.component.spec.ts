import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTablesDocsComponent } from './data-tables-docs.component';

describe('DataTablesDocsComponent', () => {
  let component: DataTablesDocsComponent;
  let fixture: ComponentFixture<DataTablesDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTablesDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTablesDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
