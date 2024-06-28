import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import {
  SelectionStateService,
  SelectionType,
} from '../shared/data-access/selection.service';
import { Origin } from '../shared/interfaces/origin.enum';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-adventure',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
  ],
  template: `
    <div class="main-image">
      <h1>Island Adventures for Everyone</h1>
    </div>
    <div class="cards-container">
      <mat-card class="info-card">
        <mat-card-header class="header">
          <mat-card-title>Guided Tours</mat-card-title>
        </mat-card-header>
        <br />
        <mat-card-content>
          <mat-divider></mat-divider>
          <br />
          <p>
            Guided Fishing Tours,<br />
            Zip-Lining, <br />
            Helicopter Tours, <br />
            Boat & Bus Tours, <br />
            and more!
          </p>
        </mat-card-content>
        <mat-card-actions class="actions">
          <button mat-button color="accent" (click)="this.selectBooking()">
            Book
          </button>
          <button mat-button color="accent" (click)="this.selectInfo()">
            Find Out More
          </button>
        </mat-card-actions>
      </mat-card>

      <mat-card class="info-card">
        <mat-card-header class="header">
          <mat-card-title>Explore on Your Terms</mat-card-title>
        </mat-card-header>
        <br />
        <mat-card-content>
          <mat-divider></mat-divider>
          <br />
          <p>
            Enjoy the Beaches, <br />
            Adventure in the Rainforest, <br />
            Explore the Volcano, <br />
            Snorkel the Coral Reefs <br />
            Gear Rentals for All Adventures!
          </p>
        </mat-card-content>
        <mat-card-actions class="actions">
          <button mat-button color="accent" (click)="this.selectBooking()">
            Reserve Gear
          </button>
          <button mat-button color="accent" (click)="this.selectInfo()">
            Find Out More
          </button>
        </mat-card-actions>
      </mat-card>

      <mat-card class="info-card">
        <mat-card-header class="header">
          <mat-card-title>Shopping & Entertainment</mat-card-title>
        </mat-card-header>
        <br />
        <mat-card-content>
          <mat-divider></mat-divider>
          <br />
          <p>
            Pubs, Dance Clubs, <br />
            Movies, Art Galleries,<br />
            Museums, & more! <br />
          </p>
        </mat-card-content>
        <mat-card-actions class="actions">
          <button mat-button color="accent" (click)="this.selectBooking()">
            Make Reservations
          </button>
          <button mat-button color="accent" (click)="this.selectInfo()">
            Find Out More
          </button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: `
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
export class AdventureComponent {
  selectionState = inject(SelectionStateService);
  router = inject(Router);

  origin: Origin = Origin.Adventure;

  selectBooking() {
    this.selectionState.setUserSelection(SelectionType.Book, this.origin);

    this.router.navigate(['/book/booking']);
  }

  selectInfo() {
    this.selectionState.setUserSelection(SelectionType.Info, this.origin);

    this.router.navigate(['/book/info']);
  }
}
