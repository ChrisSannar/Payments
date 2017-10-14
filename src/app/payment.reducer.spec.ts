import { paymentReducer } from './payment.reducer';
import { Payment } from './Payment';
import * as PaymentActions from './payment.action';

describe('reducer', () => {

  // Test returning just the state back
  it("should return the 'testState'", () => {
    let testState = [];
    let payment = new Payment(533, new Date("02/03/2013"));
    const testNewPayment = paymentReducer(
      testState, new PaymentActions.newPayment(payment)
    );

    expect(testNewPayment).toBe(testState);
  });

  // Test returning the payload of the aciton
  it("should return the 'testPayment'", () => {
    let payment = new Payment(234, new Date("01/01/2011"));
    const testGetPayments = paymentReducer(
      [], new PaymentActions.getPayments(payment)
    );

    expect(testGetPayments).toBe(payment);
  });

  // Test inserting a new element into the state
  it("should return the 'testState' concat with 'testPayment' at the top", () => {
    let testState = [new Payment(533, new Date("02/03/2013")), new Payment(25, new Date("03/22/2001"))];
    let testPayment = new Payment(465, new Date("03/03/2013"));

    const sizeBefore = testState.length;
    const testInsert = paymentReducer(testState, new PaymentActions.insert(testPayment));

    expect(sizeBefore).toBeLessThan(testInsert.length);
    expect(testInsert[0]).toBe(testPayment);
  });
});
