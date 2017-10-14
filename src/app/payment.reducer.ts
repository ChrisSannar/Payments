import { Payment } from './Payment';
import * as PaymentActions from './payment.action';
export type Action = PaymentActions.All;

export function paymentReducer (state: Payment[] = [], action:Action){

  switch (action.type) {
    case PaymentActions.NEW_PAYMENT:
      return state;

    case PaymentActions.GET_PAYMENTS:
      return updatePayments(state, action);

      // This is a dummy method that is caught by effects
    case PaymentActions.GET_EFFECTS:
      return state;

    case PaymentActions.INSERT:
      [ action.payload, ...state ];
      return [ action.payload, ...state ];

    default:
      return state;
  }
}

function updatePayments(state, action){
  let newState = Object.assign({}, state);
  newState = action.payload;
  return newState;
}
