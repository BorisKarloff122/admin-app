import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapSettingsComponent } from './chap-settings.component';

describe('ChapSettingsComponent', () => {
  let component: ChapSettingsComponent;
  let fixture: ComponentFixture<ChapSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
