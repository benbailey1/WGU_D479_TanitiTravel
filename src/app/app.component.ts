import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { TitleCasePipe } from '@angular/common';
import { FooterComponent } from './shared/ui/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, HomeComponent, MatToolbarModule, 
    RouterModule, MatButtonModule, TitleCasePipe,
    FooterComponent,
  ],
  template: `
  <span class="site-wrapper">
    <header>
      <mat-toolbar color="primary">
        <span>Taniti</span>
        <span class="spacer"></span>
        @for(item of navItems; track item.link) {
            <a mat-button [routerLink]="item.link">{{item.name | titlecase }}</a>
        }
      </mat-toolbar>
    </header>
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  </span>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Taniti Travel';

  navItems: { link: string, name: string}[] = [
    {link: '/home', name: 'Home'},
    {link: '/lodging', name: 'Lodging'},
    {link: '/transportation', name: 'Transportation'},
    {link: '/adventure', name: 'Adventure'},
    {link: '/cuisine', name: 'Cuisine'},
    {link: '/about', name: 'About'},
  ]
}
