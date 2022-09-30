import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedBlockComponent } from './feed-block.component';

describe('FeedBlockComponent', () => {
  let component: FeedBlockComponent;
  let fixture: ComponentFixture<FeedBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
