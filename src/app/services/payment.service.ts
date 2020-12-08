import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private payments = [];

  setPayment(payment) {
    this.payments = [...this.payments, payment];
  }

  getPayments() {
    return this.payments;
  }
}
