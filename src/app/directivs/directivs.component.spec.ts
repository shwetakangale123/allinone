import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivsComponent } from './directivs.component';

describe('DirectivsComponent', () => {
  let component: DirectivsComponent;
  let fixture: ComponentFixture<DirectivsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
