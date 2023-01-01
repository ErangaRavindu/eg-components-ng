import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropMenuDocsComponent } from './drop-menu-docs.component';

describe('DropMenuDocsComponent', () => {
  let component: DropMenuDocsComponent;
  let fixture: ComponentFixture<DropMenuDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropMenuDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropMenuDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
