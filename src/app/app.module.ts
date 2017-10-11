import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

//ngrx
import { paymentReducer } from './payment.reducer';
import { PaymentEffects } from './payment.effects';

// Server Work
import { HttpModule } from '@angular/http'

// Components and services
import { AppComponent } from './app.component';
import { PaymentDataService } from './payment-data.service';

// Dev tools
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore({
      payers: paymentReducer
    }),
    EffectsModule.run(PaymentEffects),
    StoreDevtoolsModule.instrumentStore({
      maxAge: 10
    })
  ],
  bootstrap: [AppComponent],
  providers: [PaymentDataService]
})
export class AppModule { }
