import { Component, OnDestroy, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { SelectionStateService } from "../shared/data-access/selection.service";
import { CheckoutComponent } from "./checkout/checkout.component";
import { RouterModule } from "@angular/router";
import { ContactRequestComponent } from "./contact-request/contact-request.component";

@Component({
    selector: 'app-booking',
    standalone: true,
    template: `
        @if (selectionState.selection$().type === 'Book') {
            <app-checkout></app-checkout>
        } @else if (selectionState.selection$().type === 'Info') {
            <app-contact-request></app-contact-request>
        } @else {
            Oops! Something went wrong.
            <button mat-button [routerLink]="['/']">Go back</button>
        }
    `,
    imports: [MatToolbarModule,
        MatCardModule, MatInputModule, MatButtonModule, CheckoutComponent, RouterModule, ContactRequestComponent]
})
export class BookingComponent implements OnDestroy{
    selectionState = inject(SelectionStateService);

    ngOnDestroy() {
        this.selectionState.resetSelection();
    }
    
}