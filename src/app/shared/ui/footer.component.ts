import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink],
  template: `
    <mat-toolbar color="primary" class="footer">
      <span>© 2024 Taniti Travel</span>
      <span class="spacer"></span>
      <a mat-button routerLink="/about">About</a>
      <a mat-button routerLink="/contact">Contact</a>
      <a mat-button routerLink="/privacy">Privacy Policy</a>
      <div class="social-icons">
        <a mat-icon-button href="https://facebook.com" target="_blank" aria-label="Facebook">
          <mat-icon>facebook</mat-icon>
        </a>
        <a mat-icon-button href="https://twitter.com" target="_blank" aria-label="Twitter">
          <mat-icon>twitter</mat-icon>
        </a>
        <a mat-icon-button href="https://instagram.com" target="_blank" aria-label="Instagram">
          <mat-icon>instagram</mat-icon>
        </a>
      </div>
    </mat-toolbar>
    `,
  styles: `
    .footer {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 64px;
      display: flex;
      align-items: center;
      font-size: 14px;
    }
    .spacer {
      flex: 1 1 auto;
    }
    .social-icons {
            gap: 8px;
      margin-left: 16px;
    }
    a {
      color: white;
      text-decoration: none;    }
  `
})
export class FooterComponent {}