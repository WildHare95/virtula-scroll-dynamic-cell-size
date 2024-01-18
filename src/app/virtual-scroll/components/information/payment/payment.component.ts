import { Component, Input } from '@angular/core';
import {IPayment} from "../../../../models/employees";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  @Input()informationData: IPayment | null = null;
}
