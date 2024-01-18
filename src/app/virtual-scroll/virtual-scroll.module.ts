import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from "./components/information/project/project.component";
import { PaymentComponent } from "./components/information/payment/payment.component";
import { RateComponent } from "./components/information/rate/rate.component";
import { DayComponent } from "./components/day/day.component";
import { DayContainerComponent } from "./components/day-container/day-container.component";
import { NonWorkingDayComponent } from "./components/non-working-day/non-working-day.component";
import { WorkingDayComponent } from "./components/working-day/working-day.component";
import {AngularSvgIconModule} from "angular-svg-icon";



@NgModule({
  declarations: [
    ProjectComponent,
    PaymentComponent,
    RateComponent,
    DayComponent,
    DayContainerComponent,
    NonWorkingDayComponent,
    WorkingDayComponent,
  ],
  exports: [
    ProjectComponent,
    PaymentComponent,
    RateComponent,
    DayContainerComponent
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule
  ]
})
export class VirtualScrollModule { }
