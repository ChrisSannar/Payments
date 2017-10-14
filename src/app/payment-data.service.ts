import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import * as paymentActions from './payment.action';

@Injectable()
export class PaymentDataService {

  constructor(
    private http$:Http
  ){
  }

  // Returns an observable of the payements from the server
  getPayments() {
    return this.http$.get("http://localhost:8081/payments")
      .map((res) => {
        return { type: paymentActions.GET_PAYMENTS, payload: res.json() };
      })
  }

  // Posts a payment to the server
  postPayment(payment) {
    this.http$.post("http://localhost:8081/pay", payment);
  }

}
