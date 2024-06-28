import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransportationComponent } from './transportation/transportation.component';
import { AdventureComponent } from './adventure/adventure.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './book/book.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(
            (m) => m.HomeComponent
        )
    },
    {
        path: 'lodging',
        loadComponent: () => import('./lodging/lodging.component').then(
            (m) => m.LodgingComponent
        )
    },
    {
        path: 'transportation',
        loadComponent: () => import('./transportation/transportation.component').then(
            (m) => m.TransportationComponent
        )
    },
    {
        path: 'adventure',
        loadComponent: () => import('./adventure/adventure.component').then(
            (m) => m.AdventureComponent
        )
    },
    {
        path: 'cuisine',
        loadComponent: () => import('./cuisine/cuisine.component').then(
            (m) => m.CuisineComponent
        )
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about.component').then(
            (m) => m.AboutComponent
        )
    },
    {
        path: 'book/:id',
        loadComponent: () => import('./book/book.component').then(
            (m) => m.BookingComponent
        )
    },
    {
        path: 'thank-you/:type',
        loadComponent: () => import('./thank-you/thank-you.component').then(
            (m) => m.ThankYouComponent
        )
    },
    {
        // create a catch-all route in case the URL doesn't match any of the above
        path: '**',
        redirectTo: 'home'
    }
];
