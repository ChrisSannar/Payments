import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import { Store } from '@ngrx/store';
import { Action } from '@ngrx/store';
import { Observable } from "rxjs";

import { Payment } from './Payment';
import * as PaymentActions from './payment.action';

interface AppState {
  payments: Payment[]
}

@Injectable()
export class PaymentDataService {

  //public payments:Observable<any[]>;
  public payments:any;

  constructor(
    private http:Http,
    private store:Store<AppState>
  ){
    //this.payments = this.store.select("payers");
    this.payments = this.store.select(test => console.log(test));
  }

  // Inserts a new payment into 'payments'
  newPayment(amount, date){
    this.store.dispatch(
      new PaymentActions.newPayment(new Payment(amount, date))
    );
  }

  getPayments(): Observable<Payment[]>{
    this.store.dispatch(
      //new PaymentActions.getPayments()
      new PaymentActions.getEffects()
    );

    console.log("Service Payments");

    /*
    let observe = this.http.get("http://localhost:8081/payments")
      .map((res) => res.json());
    observe.subscribe(
      (data) => { console.log(data) },
      err => console.log(err)
    );*/

    return this.payments;
  }

  postPayment(payment){

    return this.http.post("http://localhost:8081/pay", payment )
      .map((res) => res.json)
      .subscribe((data) => { console.log("The data: " + data) });
      /**/
  }
}
