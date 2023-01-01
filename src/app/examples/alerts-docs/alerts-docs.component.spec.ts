import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsDocsComponent } from './alerts-docs.component';

describe('AlertsDocsComponent', () => {
  let component: AlertsDocsComponent;
  let fixture: ComponentFixture<AlertsDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertsDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertsDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
