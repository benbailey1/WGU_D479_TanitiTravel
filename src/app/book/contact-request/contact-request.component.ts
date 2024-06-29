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
  selector: 'app-contact-request',
  standalone: true,
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
            <mat-card-title>Request For More Info:</mat-card-title>
            <mat-card-subtitle>{{selectionState.selection$().originPage}}</mat-card-subtitle>
        </mat-card-title-group>
        
      </mat-card-header>
      <mat-card-content>
        <form [formGroup]="infoForm" (ngSubmit)="onSubmit()" nelify>
          <mat-form-field appearance="fill">
            <mat-label>What Do You Want To Know More About?</mat-label>
            <mat-select formControlName="infoOption" required>
              @for (option of selectionState.infoOptions$(); track option) {
              <mat-option [value]="option">
                {{ option }}
              </mat-option>
              }
            </mat-select>
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
            <mat-label>What Question Do You Have?</mat-label>
            <input matInput formControlName="message" required />
          </mat-form-field>

          <mat-form-field appearance="fill">
            <mat-label>When Can We Contact You?</mat-label>
            <input matInput formControlName="bestTimeToContact" required />
          </mat-form-field>

          <mat-form-field appearance="fill">
            <mat-label>Preferred Contact Method</mat-label>
            <mat-select formControlName="preferredContact" required>
                @for (option of contactOptions; track option) {
                    <mat-option [value]="option.value">{{option.viewValue}}</mat-option>
                }
            </mat-select>
          </mat-form-field>

          <button
            mat-raised-button
            color="primary"
            type="submit"
            [disabled]="infoForm.invalid"
          >
            Contact Me!
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
export class ContactRequestComponent {
    infoForm: FormGroup;
    fb = inject(FormBuilder);
    selectionState = inject(SelectionStateService);
    router = inject(Router);

    contactOptions = [
        { value: 'phone', viewValue: 'Phone Call'},
        { value: 'text', viewValue: 'Text'},
        { value: 'email', viewValue: 'Email'}

    ]

    constructor() {
        this.infoForm = this.fb.group({
            infoOption: ['', Validators.required],
            fullName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phoneNumber: ['', Validators.required],
            message: ['', Validators.required],
            bestTimeToContact: ['', Validators.required],
            preferredContact: ['', Validators.required],
        })
    }

    onSubmit() {
        if (this.infoForm.valid) {
            this.router.navigate(['/thank-you/contact']);
        }
    }
}