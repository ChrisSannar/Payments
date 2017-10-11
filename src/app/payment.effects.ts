import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import * as paymentActions from './payment.action';
export type Actions = paymentActions.All;

@Injectable()
export class PaymentEffects {

  constructor(private action$:Actions, private http$:Http) { }

  @Effect() getter$ = this.action$
    .ofType(paymentActions.GET_EFFECTS)
    .switchMap(payload =>
      this.http$.get("http://localhost:8081/payments")
      .map((res) => {
        return { type: paymentActions.GET_PAYMENTS, payload: res.json() };
      })
    );

  @Effect() setter$ = this.action$
    .ofType(paymentActions.PAY_EFFECTS)
    .switchMap(payload =>
      this.http$.post("http://localhost:8081/pay", payload.payload)
    );

}
