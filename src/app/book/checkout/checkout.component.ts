import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
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

@Component({
  selector: 'app-checkout',
  standalone: true,
  providers: [provideNativeDateAdapter()],
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
        <form [formGroup]="checkoutForm" (ngSubmit)="onSubmit()">
          <mat-form-field appearance="fill">
            <mat-label>Booking Option</mat-label>
            <mat-select formControlName="bookingOption" required>
              @for (option of selectionState.bookingOptions$(); track option) {
              <mat-option [value]="option">
                {{ option }}
              </mat-option>
              }
              <!-- <mat-option *ngFor="let option of selectionState.bookingOptions$()" [value]="option">
                  {{option}}
                </mat-option> -->
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
            <mat-date-range-picker #picker></mat-date-range-picker>

            @if (this.checkoutForm.get('range')?.get('start')?.hasError('matStartDateInvalid')) {
            <mat-error>Invalid start date</mat-error>
            } @if (this.checkoutForm.get('range')?.get('end')?.hasError('matEndDateInvalid')) {
            <mat-error>Invalid end date</mat-error>
            }
          </mat-form-field>

          <mat-form-field appearance="fill">
            <mat-label>Full Name</mat-label>
            <input matInput formControlName="fullName" required />
          </mat-form-field>

          <mat-form-field appearance="fill">
            <mat-label>Email</mat-label>
            <input matInput formControlName="email" required type="email" />
          </mat-form-field>

          <mat-form-field appearance="fill">
            <mat-label>Phone Number</mat-label>
            <input matInput formControlName="phoneNumber" required />
          </mat-form-field>

          <mat-form-field appearance="fill">
            <mat-label>Credit Card Number</mat-label>
            <input matInput formControlName="creditCardNumber" required />
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
            <input matInput formControlName="cvv" required />
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
    `,
  ],
})
export class CheckoutComponent {
  checkoutForm: FormGroup;
  fb = inject(FormBuilder);
  selectionState = inject(SelectionStateService);
  router = inject(Router);

  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
})

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

  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      this.router.navigate(['/thank-you/purchase']);
    }
  }
}
