import { Component, computed, inject } from "@angular/core";
import { ActivatedRoute, Params, RouterModule } from "@angular/router";
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
@Component({
    selector: 'app-thank-you',
    standalone: true,
    imports: [
        MatCardModule,
        MatButtonModule,
        RouterModule,
    ],
    template: `
    @if (type() === 'purchase') {
         <mat-card class="thank-you">
            <mat-card-header>
                <mat-card-title>Thank you for your purchase!</mat-card-title>
            </mat-card-header>
            <br/>
            <mat-card-content>
                <p>Your purchase is complete. We will send you an email with your receipt.</p>
                <p>One of our highly experienced Travel Agents will contact you to confirm your booking and will be more than happy to help you with any questions you may have!</p>
                <p>Thank you for choosing Taniti Travel!</p>
            </mat-card-content>
            <br/>
            <mat-card-actions class="btn">
                <button mat-button [routerLink]="'/home'">Return to Home</button>
            </mat-card-actions>
        </mat-card>
    } @else if (type() === 'contact') {
        <mat-card class="thank-you">
            <mat-card-header>
                <mat-card-title>Thank you for your request!</mat-card-title>
            </mat-card-header>
            <br />
            <mat-card-content>
                <p>One of our highly experienced Travel Agents will contact you during the time that you requested.</p>
                <p>Thank you for choosing Taniti Travel!</p>
            </mat-card-content>
            <br />
            <mat-card-actions class="btn">
                <button mat-button [routerLink]="'/home'">Return to Home</button>
            </mat-card-actions>
        </mat-card>
    }
       
    `,
    styles: `
        .thank-you {
            max-width: 500px;
            padding: 50px;
            margin: 20px auto;
        }
        .btn {
            justify-content: center;
            margin-top: auto;
        }
    `
})
export class ThankYouComponent {
    route = inject(ActivatedRoute);

    params = toSignal<Params>(this.route.params);

    type = computed(() => this.params()?.[('type' as keyof Params)] as string | undefined);
}