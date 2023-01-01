import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxDocsComponent } from './checkbox-docs.component';

describe('CheckboxDocsComponent', () => {
  let component: CheckboxDocsComponent;
  let fixture: ComponentFixture<CheckboxDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
