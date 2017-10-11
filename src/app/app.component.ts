import { Component, OnInit} from '@angular/core';

import { FormGroup, FormBuilder, Validators } from "@angular/forms";

// Ngrx
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs';

import { Payment } from "./Payment";
import * as PaymentActions from './payment.action';

interface AppState {
  payments: Payment[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form: FormGroup;
  valid:string;
  payments$: Observable<Payment[]>;

  // Initializes the forms and sets their validation
  constructor(
    public fb:FormBuilder,
    public store:Store<AppState>
  ){
    this.form = this.fb.group({
      amount: ['', Validators.required],
      date: ['', Validators.required]
    });

    this.payments$ = this.store.select("payers");
  }

  // Spits out the payments on initialization
  ngOnInit(){
    this.getPayments();
  }

  // Gets the Promise from 'PaymentDataService' and sets its value to this.payments
  getPayments() {
    this.store.dispatch(
      new PaymentActions.getEffects()
    );
  }

  // Formats the payments
  formatAmount(amt){
    if (typeof amt === 'string'){
      return '$ ' + amt;
    }
    try {
      return '$ ' + amt.toFixed(2).toString();
    } catch (e){
      //console.log(e.message);
    }
  }

  // Formats the dates
  formatDate(date) {
    try {
      const newDate = new Date(date);
      return ((newDate.getUTCMonth() + 1) + "/" + (newDate.getUTCDate()) + "/" + newDate.getFullYear());
    } catch (e){
      //console.log(e.message);
    }
  }

  // Inserts a payment into the 'PaymentDataService' and gets the complete array back
  addPayment(){

    // Converts the date to a javascript 'Date' object to check for validity
    const newDate = new Date(this.form.value.date);

    // Check for a valid amount input and formats it
    if (!this.form.value.amount || this.form.value.amount < 0){
      this.valid = "Please input a valid amount";
    }
    else if(newDate.toDateString() === "Invalid Date"){
      this.valid = "Please use the valid date format (MM/DD/YYY)";
    }
    else {

      // To clear validity message
      this.valid = "";

      // To set each variable properly
      const payers = this.form.value.amount.toFixed(2);
      //const daters = newDate; //((newDate.getMonth() + 1) + "/" + newDate.getDate() + "/" + newDate.getFullYear());
      const daters = this.form.value.date;

      // Ngrx that sucker
      this.store.dispatch(
        new PaymentActions.payEffects({ amount: payers, date: daters })
      );
      this.store.dispatch(
        new PaymentActions.insert({ amount: payers, date: daters })
      )
    }
    return false;
  }

}
