import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SelectionStateService } from '../../shared/data-access/selection.service';
import { MatCardModule } from '@angular/material/card';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { Origin } from '../../shared/interfaces/origin.enum';

@Component({
  selector: 'app-checkout',
  standalone: true,
  providers: [provideNativeDateAdapter(), CurrencyPipe],
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatError,
  ],
  template: `
    <mat-card class="checkout-card">
      <mat-card-header>
        <mat-card-title-group> 
            <mat-card-title>Checkout</mat-card-title>
            <mat-card-subtitle>Booking: {{selectionState.selection$().originPage}}</mat-card-subtitle>
        </mat-card-title-group>
        
      </mat-card-header>
      <mat-card-content>
        <form [formGroup]="checkoutForm" (ngSubmit)="onSubmit()" nelify>
          <mat-form-field appearance="fill">
            <mat-label>Booking Option</mat-label>
            <mat-select formControlName="bookingOption" required (selectionChange)="onBookingChange()">
              @for (option of selectionState.bookingOptions$(); track option) {
              <mat-option [value]="option">
                {{ option }}
              </mat-option>
              }
            </mat-select>
          </mat-form-field>

          <mat-form-field>
            <mat-label>Enter a date range</mat-label>
            <mat-date-range-input [formGroup]="range" [rangePicker]="picker">
              <input
                matStartDate
                formControlName="start"
                placeholder="Start date"
              />
              <input matEndDate formControlName="end" placeholder="End date" />
            </mat-date-range-input>
            <mat-hint>MM/DD/YYYY – MM/DD/YYYY</mat-hint>
            <mat-datepicker-toggle
              matIconSuffix
              [for]="picker"
            ></mat-datepicker-toggle>
            <mat-date-range-picker #picker ></mat-date-range-picker>

            @if (this.checkoutForm.get('range')?.get('start')?.hasError('matStartDateInvalid')) {
            <mat-error>Invalid start date</mat-error>
            } @if (this.checkoutForm.get('range')?.get('end')?.hasError('matEndDateInvalid')) {
            <mat-error>Invalid end date</mat-error>
            }
          </mat-form-field>

          @if(price() !== null) {
            <p class="price">Total Price: $ {{ price() }}</p>
          }

          <mat-form-field appearance="fill">
            <mat-label>Full Name</mat-label>
            <input matInput formControlName="fullName" required />
          </mat-form-field>

          <mat-form-field appearance="fill">
            <mat-label>Email</mat-label>
            <input matInput formControlName="email" placeholder="Ex. anything@aol.com" required type="email" />
          </mat-form-field>

          <mat-form-field appearance="fill">
            <mat-label>Phone Number</mat-label>
            <input matInput formControlName="phoneNumber" required />
          </mat-form-field>

          <mat-form-field appearance="fill" hintLabel="Hint: Any number pattern will work">
            <mat-label>Credit Card Number</mat-label>
            <input matInput formControlName="creditCardNumber" placeholder="Ex. 12345" required />
          </mat-form-field>

          <mat-form-field appearance="fill">
            <mat-label>Expiration Date</mat-label>
            <input
              matInput
              formControlName="expirationDate"
              required
              placeholder="MM/YY"
            />
          </mat-form-field>

          <mat-form-field appearance="fill">
            <mat-label>CVV</mat-label>
            <input matInput formControlName="cvv" placeholder="Ex. 999" required />
          </mat-form-field>

          <button
            mat-raised-button
            color="primary"
            type="submit"
            [disabled]="checkoutForm.invalid"
          >
            Complete Booking
          </button>
        </form>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      .checkout-card {
        max-width: 500px;
        margin: 20px auto;
      }
      form {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      .price {
        font-size: 1.2em;
        font-weight: bold;
        color: #4CAF50;
      }
    `,
  ],
})
export class CheckoutComponent implements OnInit, OnDestroy {
  checkoutForm: FormGroup;
  fb = inject(FormBuilder);
  selectionState = inject(SelectionStateService);
  router = inject(Router);
  price = signal<string | null>(null);
  basePrice = signal<string | null>(null);
  range: FormGroup;
  rangeSubscription: Subscription | null = null;
  destroy$ = new Subject<void>();

  constructor() {
    this.checkoutForm = this.fb.group({
      bookingOption: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      creditCardNumber: [
        '',
        [Validators.required],
        // [Validators.required, Validators.pattern(/^\d{16}$/)],
      ],
      expirationDate: [
        '',
        [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)],
      ],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]],
    });

    this.range = this.fb.group({
      start: [null],
      end: [null]
    });
  }


  ngOnInit() {
    this.rangeSubscription = this.range.valueChanges
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.updatePrice();
      })
  }


  onDateRangeChange() {
    this.updatePrice();
  }

  onBookingChange() {
    this.updateBasePrice();
    this.updatePrice();
  }

  private updateBasePrice() {
    switch(this.selectionState.selection$().originPage) {
      case Origin.Adventure:
        this.price.set((Math.random() * (500 - 1) +1).toFixed(2));
        break;
      case Origin.Lodging:
        this.price.set((Math.random() * (1000 - 1) + 1).toFixed(2));
        break;
      case Origin.CuisinePage:
        this.price.set((Math.random() * (100 - 1) + 1).toFixed(2));
        break;
      case Origin.Transportation:
        this.price.set((Math.random() * (500 - 1) +1).toFixed(2));
        break;
    }
    
  }

  // private updatePrice() {
  //   const start = this.range.get('start')?.value;
  //   const end = this.range.get('end')?.value;

  //   if (start && end ) {
  //     const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24));

  //     let adjustedPrice = Number(this.price()) * days;
  //     console.log(`Adjusted Price: ${adjustedPrice}`);

  //     this.price.set(adjustedPrice.toFixed(2));
  //     console.log(`Updating price: ${this.price()}`);

  //   } else {
  //     this.price.set(null);
  //   }
  // }

  private updatePrice() {
    console.log(`In updatePrice()`)
    const start = this.range.get('start')?.value;
    const end = this.range.get('end')?.value;
    const basePrice = this.price();

    console.log(`start: ${start}, end: ${end}, bp: ${basePrice}`)
  
    if (start && end && basePrice) {
      const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24));
  
      let adjustedPrice = Number(basePrice) * days;
      console.log(`Base price: ${basePrice}, Days: ${days}, Adjusted Price: ${adjustedPrice}`);
  
      this.price.set(adjustedPrice.toFixed(2));
      console.log(`Updating price: ${this.price()}`);
    } 
    else {
      return;
    //   this.price.set(null);
    }
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      this.router.navigate(['/thank-you/purchase']);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
