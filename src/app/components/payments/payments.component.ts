import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { GridService } from 'src/app/services/grid.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
})
export class PaymentsComponent {

  constructor(
    public grid: GridService,
    public paymentService: PaymentService,
  ) {}

  hasCode(){ 
    return this.grid.getCode()?.length || false
  }

  getPayments() {
    return this.paymentService?.getPayments() || [];
  }

  addPayment(payment) {
    let code = this.grid.getCode();
    let matrix = this.grid.getMatrix();

    this.paymentService.setPayment({
      code,
      matrix,
      totalSize: this.grid.countItemsGrid(matrix),
      ...payment,
    });
  }

  
}
