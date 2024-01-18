import { Component, Input, OnInit } from '@angular/core';
import { IProjectStateDay } from '../../../models/employees';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss'],
})
export class DayComponent implements OnInit {
  @Input() generalInformation!: IProjectStateDay;
  @Input() isLegend: boolean = false;

  ngOnInit() {
  }
}
