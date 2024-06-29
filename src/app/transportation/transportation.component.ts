import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import {
  SelectionStateService,
  SelectionType,
} from '../shared/data-access/selection.service';
import { Origin } from '../shared/interfaces/origin.enum';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-transporation',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    MatDividerModule,
  ],
  template: `
    <div class="main-image">
      <div class="overlay">
        <h1>Transportation</h1>
      </div>
    </div>
    <div class="cards-container">
      <mat-card class="info-card">
        <mat-card-header class="header">
          <mat-card-title>Flights to Taniti</mat-card-title>
        </mat-card-header>
        <br />
        <mat-card-content>
          <br />
          <p>
            Coming Soon:<br />
            Non-stop Flights <br />
            directly to Taniti
          </p>
        </mat-card-content>
        <mat-card-actions class="actions">
          <button mat-button color="accent" (click)="this.selectBooking()">
            Book Flights
          </button>
          <button mat-button color="accent" (click)="this.selectInfo()">
            Find Out More
          </button>
        </mat-card-actions>
      </mat-card>

      <mat-card class="info-card">
        <mat-card-header class="header">
          <mat-card-title>Cruises to Taniti</mat-card-title>
        </mat-card-header>
        <br />
        <mat-card-content>
          
          <br />
          <p>
            Ships arriving
            weekly <br />
            to Yellow Leaf Bay
            <br />
          </p>
        </mat-card-content>
        <mat-card-actions class="actions">
          <button mat-button color="accent" (click)="this.selectBooking()">
            Book Cruise
          </button>
          <button mat-button color="accent" (click)="this.selectInfo()">
            Find Out More
          </button>
        </mat-card-actions>
      </mat-card>

      <mat-card class="info-card">
        <mat-card-header class="header">
          <mat-card-title>Getting Around the Island</mat-card-title>
        </mat-card-header>
        <br />
        <mat-card-content>
          
          <br />
          <p>
            Car Rentals <br />
            Taxis & Buses <br />
            Bicycle Rentals
          </p>
        </mat-card-content>
        <mat-card-actions class="actions">
          <button mat-button color="accent" (click)="this.selectBooking()">
            Make Rental Reservation
          </button>
          <button mat-button color="accent" (click)="this.selectInfo()">
            Find Out More
          </button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: `
      .main-image {
      background-image: url('src/assets/transportation.jpg'); //src\assets\tropical-getaway-heli.jpg
      background-size: cover;
      background-position: center;
      height: 500px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .overlay {
      background-color: rgba(0, 0, 0, 0.1);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .main-image h1 {
      color: #ffffff;
      font-size: 3rem;
      text-align: center;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      z-index: 1;
      margin: 0;
      padding: 20px;
    }
        .cards-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            padding: 16px;
        }

        .info-card {
            max-width: 100%;
        }

        mat-card-content {
            flex-grow: 1;
        }

        .info-card .header {
            display: flex;
            justify-content: center;
        }

        .info-card mat-card-content {
          display: flex;
          justify-content: center;
        }
    
        .info-card .actions {
            display: flex;
            justify-content: center;
            margin-top: auto;
        } 
        
        @media (max-width: 768px) {
            .cards-container {
            grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 480px) {
            .cards-container {
            grid-template-columns: 1fr;
            }
        }
  `,
})
export class TransportationComponent {
  selectionState = inject(SelectionStateService);
  router = inject(Router);

  origin: Origin = Origin.Transportation;

  selectBooking() {
    this.selectionState.setUserSelection(SelectionType.Book, this.origin);

    this.router.navigate(['/book/booking']);
  }

  selectInfo() {
    this.selectionState.setUserSelection(SelectionType.Info, this.origin);

    this.router.navigate(['/book/info']);
  }
}
