import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShwetaComponent } from './shweta.component';

describe('ShwetaComponent', () => {
  let component: ShwetaComponent;
  let fixture: ComponentFixture<ShwetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShwetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShwetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
