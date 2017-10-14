import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

// DEL?
import { FormBuilder } from "@angular/forms";
import { Store } from '@ngrx/store';
import { PaymentDataService } from './payment-data.service';

interface AppState {
  payments: any[]
}
// DEL?

describe('AppComponent', () => {

  // DEL?
  let fb:FormBuilder;
  let store:Store<AppState>;
  let payService:PaymentDataService;
  // DEL?

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

/* DEL?
  it ('should be truthy', () => {
    const app = new AppComponent(fb, store, payService);
    expect(app).toBeTruthy();
  });*/// DEL?

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Payment'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Payment');
  }));

});
