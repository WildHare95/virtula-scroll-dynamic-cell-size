import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { TProjectData } from '../../../models/employees';
import { DayComponent } from '../day/day.component';
import { WorkingDayComponent } from '../working-day/working-day.component';
import {NonWorkingDayComponent} from "../non-working-day/non-working-day.component";

@Component({
  selector: 'app-day-container',
  templateUrl: './day-container.component.html',
  styleUrls: ['./day-container.component.scss'],
})
export class DayContainerComponent implements OnInit{
  @Input() renderItem: TProjectData | null = null;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {
    if (this.renderItem) {
      const componentRef = this.viewContainerRef.createComponent<
        DayComponent | NonWorkingDayComponent | WorkingDayComponent
        >(this.renderItem.renderComponent);
      componentRef.instance.generalInformation = this.renderItem;
    }
  }
}
