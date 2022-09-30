import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChapComponent } from './edit-chap.component';

describe('EditChapComponent', () => {
  let component: EditChapComponent;
  let fixture: ComponentFixture<EditChapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditChapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditChapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
