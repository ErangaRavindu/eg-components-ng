import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarDocsComponent } from './avatar-docs.component';

describe('AvatarDocsComponent', () => {
  let component: AvatarDocsComponent;
  let fixture: ComponentFixture<AvatarDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
