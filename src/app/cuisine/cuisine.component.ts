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
      <h1>Restaurants & Grocery</h1>
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
