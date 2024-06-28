import { Injectable, computed, signal } from "@angular/core";
import { Origin } from "../interfaces/origin.enum";

export enum SelectionType {
    Book = 'Book',
    Info = 'Info'
}

interface Selection {
    type: SelectionType | null;
    originPage: Origin | null;
 }

@Injectable({
    providedIn: 'root'
})
export class SelectionStateService {
    private selection = signal<Selection>({ 
        type: null, 
        originPage: null 
    });

    // Readonly signal for consumption
    readonly selection$ = computed(() => this.selection());

   readonly bookingOptions$ = computed(() => this.getOptions(this.selection().originPage, SelectionType.Book));

   readonly infoOptions$ = computed(() => this.getOptions(this.selection().originPage, SelectionType.Info));

    setUserSelection(type: SelectionType, origin: Origin) {
        this.selection.update(currentSelection => ({
            // ...currentSelection,
            type: type,
            originPage: origin
        }));
    }

    resetSelection() {
        this.selection.set({ type: null, originPage: null });
    }

    private getOptions(originComponent: Origin | null, selectionType: SelectionType): string[] {
        if (!originComponent) return[];

        const options: Record<Origin, Record<SelectionType, string[]>> = {
            [Origin.Adventure]: {
                [SelectionType.Book]: [
                    'Guided Fishing Tours',
                    'Zip-Lining',
                    'Helicopter Tours',
                    'Boat Tours',
                    'Bus Tours',
                    'Guided Scuba Diving Adventure',
                    'Surf Lessons'
                ],
                [SelectionType.Info]: [
                    'Beaches',
                    'Rainforest',
                    'Volcano',
                    'Snorkeling',
                    'Adventure Gear Rentals',
                    'Adventure Gear Sales',
                    'Adventure Gear Repairs',
                    'Pubs',
                    'Dance Clubs',
                    'Movies',
                    'Art Galleries',
                    'Museums'
                ]
            },
            [Origin.Lodging]: {
                [SelectionType.Book]: [
                    'Taniti Hostel',
                    'Locally Owned Hotels',
                    'Taniti Resort',
                    'Bed & Breakfasts',
                    'Private Condos',
                    'Private Homes'
                ],
                [SelectionType.Info]: [
                    'Taniti Hostel',
                    'Locally Owned Hotels',
                    'Taniti Resort',
                    'Bed & Breakfasts',
                    'Private Condos',
                    'Private Homes'
                ]
            },
            [Origin.CuisinePage]: {
                [SelectionType.Book]: [
                    'Local Flair',
                    'American Eats',
                    'Pan-Asian Cuisine'
                ],
                [SelectionType.Info]: [
                    'Local Flair',
                    'American Eats',
                    'Pan-Asian Cuisine',
                    'Supermarkets',
                    'Grocery Stores',
                    'Convenience Store'
                ]
            },
            [Origin.Transportation]: {
                [SelectionType.Book]: [
                    'Flights',
                    'Cruises',
                    'Rental Cars',
                    'Bicycle Rentals',
                    'Taxis',
                    'Bus Tickets'
                ],
                [SelectionType.Info]: [
                    'Flights',
                    'Cruises',
                    'Rental Cars',
                    'Bicycle Rentals',
                    'Taxis',
                    'Bus Tickets'
                ]
            }
        }
        return options[originComponent][selectionType] || [];
    }
}