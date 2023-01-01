import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsDocsComponent } from './buttons-docs.component';

describe('ButtonsDocsComponent', () => {
  let component: ButtonsDocsComponent;
  let fixture: ComponentFixture<ButtonsDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
