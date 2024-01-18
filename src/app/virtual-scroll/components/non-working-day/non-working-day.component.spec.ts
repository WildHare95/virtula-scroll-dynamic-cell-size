import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonWorkingDayComponent } from './non-working-day.component';

describe('WorkDayComponent', () => {
  let component: NonWorkingDayComponent;
  let fixture: ComponentFixture<NonWorkingDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonWorkingDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonWorkingDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
