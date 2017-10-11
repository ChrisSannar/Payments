import { Action } from '@ngrx/store';

export const NEW_PAYMENT = "new payment";
export const PAY_EFFECTS = "new effects";
export const PAY_FAILED = "new failed";
export const GET_PAYMENTS = "get payments";
export const GET_EFFECTS = "get effects"
export const GET_FAILED = "get failed";
export const INSERT = "insert"

export class newPayment implements Action {
  readonly type = NEW_PAYMENT;

  constructor(public payload?:any) {}
}

export class payEffects implements Action {
  readonly type = PAY_EFFECTS;

  constructor(public payload?:any) {}
}

export class payFailed implements Action {
  readonly type = PAY_FAILED;

  constructor(public payload?:any){}
}

export class getPayments implements Action {
  readonly type = GET_PAYMENTS;

  constructor(public payload?:any) {}
}

export class getEffects implements Action {
  readonly type = GET_EFFECTS;

  constructor(public payload?:any) {}
}

export class getFail implements Action {
  readonly type = GET_FAILED;

  constructor(public payload?:any) {}
}

export class insert implements Action {
  readonly type = INSERT;

  constructor(public payload?:any) {}
}

export type All
  = newPayment
  | payEffects
  | payFailed
  | getPayments
  | getEffects
  | getFail
  | insert;

