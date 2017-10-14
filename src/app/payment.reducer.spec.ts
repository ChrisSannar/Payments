import { paymentReducer } from './payment.reducer';
import { Payment } from './Payment';
import * as PaymentActions from './payment.action';
export type Action = PaymentActions.All;

describe('reducer', () => {
  let testPayment:Payment;
  let testState:Payment[];
  let testAction:Action;

  this.testPayment = new Payment(234, new Date("01/01/2011"));
  paymentReducer(testState, {
    type:PaymentActions.INSERT,
    payload: this.testPayment
  });

  // Test returning just the state back
  it("Should return the 'testState'", () => {

    this.testAction = {
      type: PaymentActions.NEW_PAYMENT,
      payload: this.testPayment
    };

    console.log("BAZOOKA!!!");

    const testNewPayment = paymentReducer(testState, testAction);

    console.log("MORE BAZOOKA!!!");
    console.log(testNewPayment);
    expect(testNewPayment).toBe(this.testState);
  });

  // Test returning the payload of the aciton
  it("Should return the 'testPayment'", () => {
    this.testPayment =  new Payment(123, new Date("02/02/2012"));
    this.testAction = {
      type: PaymentActions.GET_PAYMENTS,
      payload: this.testPayment
    };

    const testGetPayments = paymentReducer(testState, testAction);
    expect(testGetPayments).toBe(testPayment);
  });

  // Test inserting a new element into the state
  it("Should return the 'testState' concat with 'testPayment' at the top", () => {
    this.testPayment = new Payment(465, new Date("03/03/2013"));
    this.testAction = {
      type: PaymentActions.INSERT,
      payload: this.testPayment
    };

    const sizeBefore = testState.length;
    const testInsert = paymentReducer(testState, testAction);
    expect(sizeBefore).toBeLessThan(testInsert .length);
    expect(testInsert[0]).toBe(this.testPayment);
  });
});
