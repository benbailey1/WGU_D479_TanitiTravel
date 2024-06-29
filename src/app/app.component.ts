import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { TitleCasePipe } from '@angular/common';
import { FooterComponent } from './shared/ui/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    MatToolbarModule,
    RouterModule,
    MatButtonModule,
    TitleCasePipe,
    FooterComponent,
    MatIconModule,
    MatMenuModule,
  ],
  template: `
    <span class="site-wrapper">
      <header>
        <mat-toolbar color="primary" class="responsive-toolbar">
          <span>Taniti</span>
          <span class="spacer"></span>
          <div class="nav-links">
            @for(item of navItems; track item.link) {
            <a mat-button [routerLink]="item.link">
            {{ item.name | titlecase }}</a>
            }
          </div>
          <button mat-icon-button [matMenuTriggerFor]="menu" class="menu-button">
        <mat-icon>menu</mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        @for(item of navItems; track item.link) {
          <a mat-menu-item [routerLink]="item.link">{{item.name | titlecase }}</a>
        }
      </mat-menu>
        </mat-toolbar>
      </header>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </span>
  `,
  styles: `
    .site-wrapper {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  
  .main-content {
    flex: 1;
    margin-bottom: 60px;
  }

  .responsive-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-links {
    display: flex;
  }

  .menu-button {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .nav-links {
      display: none;
    }

    .menu-button {
      display: block;
    }

  }

  @media screen and (max-width: 600px) {
    .main-image h1 {
      font-size: 2rem;
    }

    .main-image .search-bar input {
      width: 200px;
    }

    .section {
      flex-direction: column;
      align-items: center;
    }

    .section .mat-card {
      width: 80%;
      margin-bottom: 20px;
    }

  }

  `,
  //styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Taniti Travel';

  navItems: { link: string; name: string }[] = [
    { link: '/home', name: 'Home' },
    { link: '/lodging', name: 'Lodging' },
    { link: '/transportation', name: 'Transportation' },
    { link: '/adventure', name: 'Adventure' },
    { link: '/cuisine', name: 'Cuisine' },
    { link: '/about', name: 'About' },
  ];
}
