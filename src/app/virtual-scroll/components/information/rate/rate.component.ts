import { Component, Input } from '@angular/core';
import {IRate} from "../../../../models/employees";

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent {
  @Input() informationData: Array<IRate> = [];
}
