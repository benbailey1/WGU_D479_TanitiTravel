import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatButtonModule, MatDividerModule, RouterLink],
  template: `
    <div class="main-image">
      <h1>TANITI</h1>
      <div class="search-bar">
        <input
          matInput
          type="text"
          placeholder="Plan your perfect tropical getaway with us?"
        />
        <button mat-raised-button color="accent" >Search</button>
      </div>
    </div>

    <div class="cards-container">
      <mat-card class="info-card">
        <mat-card-header class="header">
          <mat-card-title>LODGING</mat-card-title>
        </mat-card-header>
        <br />
        <mat-card-content>
          <mat-divider></mat-divider>
          <br />
          <p>
            Budget-friendly Hostels <br />
            Four-Star Resorts <br />
            and everything in between.
          </p>
        </mat-card-content>
        <mat-card-actions class="actions">
          <button mat-raised-button color="accent" [routerLink]="'/lodging'">Learn More</button>
        </mat-card-actions>
      </mat-card>

            <mat-card class="info-card">
        <mat-card-header class="header">
          <mat-card-title>CUISINE</mat-card-title>
        </mat-card-header>
        <br />
        <mat-card-content>
          <mat-divider></mat-divider>
          <br />
          <p>
            Experience the best <br />
            of Taniti's culinary delights<br />
            and shopping on your next visit
          </p>
        </mat-card-content>
        <mat-card-actions class="actions">
          <button mat-raised-button color="accent" [routerLink]="'/cuisine'">Explore</button>
        </mat-card-actions>
      </mat-card>

            <mat-card class="info-card">
        <mat-card-header class="header">
          <mat-card-title>TRANSPORTATION</mat-card-title>
        </mat-card-header>
        <br />
        <mat-card-content>
          <mat-divider></mat-divider>
          <br />
          <p>
            Arrive by Air or Cruise Ship.<br />
            Explore by rental car, bus, taxi, or bike
          </p>
        </mat-card-content>
        <mat-card-actions class="actions">
          <button mat-raised-button color="accent" [routerLink]="'/transportation'">Learn More</button>
        </mat-card-actions>
      </mat-card>

            <mat-card class="info-card">
        <mat-card-header class="header">
          <mat-card-title>EXPLORE TANITI</mat-card-title>
        </mat-card-header>
        <br />
        <mat-card-content>
          <mat-divider></mat-divider>
          <br />
          <p>
            Unwind at the beach <br />
            explore the rainfores or volcano. <br />
            Enjoy all that Merriton Landing <br />
            and Taniti City have to offer.
          </p>
        </mat-card-content>
        <mat-card-actions class="actions">
          <button mat-raised-button color="accent" [routerLink]="'/adventure'">Discover</button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: `

 .cards-container {
     display: grid;
     grid-template-columns: repeat(4, 1fr);
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
export class HomeComponent {}
