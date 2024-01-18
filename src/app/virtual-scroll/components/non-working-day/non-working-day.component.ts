import { Component, Input, OnInit } from '@angular/core';
import { TDayRate, TDaySalary, TProjectWorkDayOff, TProjectWorkDayVacation } from '../../../models/employees';

@Component({
  selector: 'cch-work-day',
  templateUrl: './non-working-day.component.html',
  styleUrls: ['./non-working-day.component.scss'],
})
export class NonWorkingDayComponent implements OnInit {
  @Input() generalInformation!: TProjectWorkDayOff | TProjectWorkDayVacation;
  @Input() isLegend: boolean = false;

  ngOnInit() {
  }
}
