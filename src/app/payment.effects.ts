import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import * as paymentActions from './payment.action';
import { PaymentDataService } from "./payment-data.service";
export type Actions = paymentActions.All;

@Injectable()
export class PaymentEffects {

  constructor(
    private action$:Actions,
    private http$:Http,
    private payService:PaymentDataService
  ) { }

  @Effect() getter$ = this.action$
    .ofType(paymentActions.GET_EFFECTS)
    .switchMap(payload => this.payService.getPayments());

  @Effect() setter$ = this.action$
    .ofType(paymentActions.PAY_EFFECTS)
    .switchMap( payload =>
      this.http$.post("http://localhost:8081/pay", payload.payload)
    );

}
