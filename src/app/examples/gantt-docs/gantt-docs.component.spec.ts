import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanttDocsComponent } from './gantt-docs.component';

describe('GanttDocsComponent', () => {
  let component: GanttDocsComponent;
  let fixture: ComponentFixture<GanttDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanttDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GanttDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
