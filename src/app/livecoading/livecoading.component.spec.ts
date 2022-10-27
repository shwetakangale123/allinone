import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivecoadingComponent } from './livecoading.component';

describe('LivecoadingComponent', () => {
  let component: LivecoadingComponent;
  let fixture: ComponentFixture<LivecoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivecoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivecoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
