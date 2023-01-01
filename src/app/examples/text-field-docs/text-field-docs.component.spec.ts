import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldDocsComponent } from './text-field-docs.component';

describe('TextFieldDocsComponent', () => {
  let component: TextFieldDocsComponent;
  let fixture: ComponentFixture<TextFieldDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextFieldDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextFieldDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
