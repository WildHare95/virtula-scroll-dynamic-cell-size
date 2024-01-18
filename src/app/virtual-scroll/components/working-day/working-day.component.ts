import { Component, Input} from '@angular/core';
import {TDayRate, TDaySalary} from "../../../models/employees";

@Component({
  selector: 'app-working-day',
  templateUrl: './working-day.component.html',
  styleUrls: ['./working-day.component.scss'],
})
export class WorkingDayComponent {
  @Input() generalInformation!: TDaySalary | TDayRate;

  constructor() {}

  getRateIcon(rate: -1 | 1 ): string {
    const icon = rate === 1 ? 'rate-up-icon' : 'rate-down-icon';
    return `assets/images/icons/${icon}.svg`
  }

  getSalaryIcon(rate: -1 | 1): string {
    const icon = rate === 1 ? 'salary-down-icon' : 'salary-up-icon';
    return `assets/images/icons/${icon}.svg`
  }
}
