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
  selector: 'app-cuisine',
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
        <h1>Dining & Shopping</h1>
      </div>
    </div>
    <div class="cards-container">
      <mat-card class="info-card">
        <mat-card-header class="header">
          <mat-card-title>Restaurants</mat-card-title>
        </mat-card-header>
        <br />
        <mat-card-content>
          <br />
          <p>
            Local Flair,<br />
            American Eats, <br />
            & Pan-Asian Cuisine <br />
          </p>
        </mat-card-content>
        <mat-card-actions class="actions">
          <button mat-button color="accent" (click)="this.selectBooking()">
            Make Reservation
          </button>
          <button mat-button color="accent" (click)="this.selectInfo()">
            Find Out More
          </button>
        </mat-card-actions>
      </mat-card>

      <mat-card class="info-card">
        <mat-card-header class="header">
          <mat-card-title>Grocery</mat-card-title>
        </mat-card-header>
        <br />
        <mat-card-content>
          <br />
          <p>
            Supermarkets, <br />
            Grocery Stores, <br />
            Convenience Store <br />
          </p>
        </mat-card-content>
        <mat-card-actions class="actions">
          <button mat-button color="accent" (click)="this.selectInfo()">
            Find Out More
          </button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: `
        .main-image {
      background-image: url('src/assets/food.jpg');
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
            grid-template-columns: repeat(2, 1fr);
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
export class CuisineComponent {
  selectionState = inject(SelectionStateService);
  router = inject(Router);

  origin: Origin = Origin.CuisinePage;

  selectBooking() {
    this.selectionState.setUserSelection(SelectionType.Book, this.origin);

    this.router.navigate(['/book/booking']);
  }

  selectInfo() {
    this.selectionState.setUserSelection(SelectionType.Info, this.origin);

    this.router.navigate(['/book/info']);
  }
}
