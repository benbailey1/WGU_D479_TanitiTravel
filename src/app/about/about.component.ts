import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatToolbarModule, MatCardModule, MatInputModule, MatButtonModule, MatDividerModule, MatExpansionModule],
  template: `
    <mat-card class="about-card">
      <mat-card-header>
        <mat-card-title>About Taniti Island</mat-card-title>
      </mat-card-header>
        <br />
      <mat-card-content>
        <p>
          Taniti Island, nestled in the Pacific, spans less than 500 square
          miles but boasts diverse landscapes, from sandy and rocky beaches to
          lush tropical rainforests and a mountainous interior with an active
          volcano. Home to about 20,000 indigenous residents, the island's
          economy was historically centered around fishing and agriculture until
          the recent surge in tourism.
        </p>
        <br />
        <mat-accordion>
        <mat-expansion-panel>
            <mat-expansion-panel-header>
                Restaurants
            </mat-expansion-panel-header>
            <p>
                Visitors can choose from 10 restaurants, including five specializing
                in local fish and rice dishes, three offering American-style meals,
                and two serving Pan-Asian cuisine.
            </p>
        </mat-expansion-panel>

        <mat-expansion-panel>
            <mat-expansion-panel-header>
                Grocery Stores
            </mat-expansion-panel-header>
            <p>
                Taniti has two supermarkets, two smaller grocery stores, and a 24-hour
                convenience store to cater to tourists' needs.
            </p>
        </mat-expansion-panel>

        <mat-expansion-panel>
            <mat-expansion-panel-header>
                Lodging
            </mat-expansion-panel-header>
            <p>
            Accommodation options range from budget-friendly hostels to a
            luxurious four-star resort, along with many small, family-owned hotels
            and an increasing number of bed and breakfasts. All lodgings are
            strictly regulated and regularly inspected by the local government.
            </p>
        </mat-expansion-panel>

        <mat-expansion-panel>
            <mat-expansion-panel-header>
            Entertainment
            </mat-expansion-panel-header>
            <p>
                The island offers a variety of activities beyond its beautiful beaches
                and rainforest explorations. Visitors can enjoy a local history
                museum, chartered fishing tours, snorkeling, zip-lining, pubs, a
                microbrewery, a new dance club, a movie theater, helicopter rides, an
                arcade, art galleries, and bowling. A nine-hole golf course is also
                expected to open soon. Many of these activities are concentrated in
                Merriton Landing, a rapidly developing area on the north side of
                Yellow Leaf Bay.
            </p>
        </mat-expansion-panel>

        <mat-expansion-panel>
            <mat-expansion-panel-header>
                Sightseeing
            </mat-expansion-panel-header>
            <p>
                Most tourists spend their time in Taniti City, known for its native
                architecture and the surrounding white sandy beaches of Yellow Leaf
                Bay. Popular activities include island tours by boat or bus,
                rainforest hikes, and visits to the active volcano.
            </p> 
        </mat-expansion-panel>

        <mat-expansion-panel>
            <mat-expansion-panel-header>
                Getting to Taniti
            </mat-expansion-panel-header>
            <p>
                Most visitors arrive by air, landing at a small airport that
                accommodates small jets and propeller planes, with plans for expansion
                to handle larger jets. A small cruise ship also docks in Yellow Leaf
                Bay once a week.
            </p>
        </mat-expansion-panel>

        <mat-expansion-panel>
            <mat-expansion-panel-header>
                Ground Transportation
            </mat-expansion-panel-header>
            <p>
                Public buses operate in Taniti City from 5 a.m. to 11 p.m. daily,
                while private buses serve other parts of the island. Taxis are
                available in Taniti City, and rental cars can be rented near the
                airport. Bicycle rentals, including helmets (required by law), are
                also available. Taniti City is walkable, and Merriton Landing is
                particularly easy to explore on foot.
            </p>
        </mat-expansion-panel>
        </mat-accordion>
      </mat-card-content>
    </mat-card>

    <mat-card class="about-card">
  <mat-card-header>
    <mat-card-title>Frequently Asked Questions</mat-card-title>
  </mat-card-header>
  <br/>
  <mat-card-content>
    <mat-accordion>
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>
            What type of power outlets are used on Taniti?
          </mat-panel-title>
        </mat-expansion-panel-header>
        <p>You can expect 120-volt outlets, similar to those used in the United States.</p>
      </mat-expansion-panel>

      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>
            Are there any restrictions on alcohol sales?
          </mat-panel-title>
        </mat-expansion-panel-header>
        <p>Alcohol sales are prohibited between midnight and 9:00 a.m.</p>
      </mat-expansion-panel>

      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>
            What is the legal drinking age on Taniti?
          </mat-panel-title>
        </mat-expansion-panel-header>
        <p>The legal drinking age is 18, although it is not strictly enforced.</p>
      </mat-expansion-panel>

      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>
            Is English widely spoken on Taniti?
          </mat-panel-title>
        </mat-expansion-panel-header>
        <p>Many young Tanitians speak English fluently, though it is less common among older residents in rural areas.</p>
      </mat-expansion-panel>

      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>
            What medical facilities are available on Taniti?
          </mat-panel-title>
        </mat-expansion-panel-header>
        <p>The island has one hospital and several clinics, with many multilingual staff members.</p>
      </mat-expansion-panel>

      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>
            How safe is Taniti for tourists?
          </mat-panel-title>
        </mat-expansion-panel-header>
        <p>While violent crime is rare, petty crimes like pickpocketing have increased with tourism.</p>
      </mat-expansion-panel>

      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>
            Are there any national holidays to be aware of?
          </mat-panel-title>
        </mat-expansion-panel-header>
        <p>Taniti celebrates numerous national holidays, which may affect the availability of tourist attractions and restaurants.</p>
      </mat-expansion-panel>

      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>
            What currency is used on Taniti?
          </mat-panel-title>
        </mat-expansion-panel-header>
        <p>The U.S. dollar is the primary currency, but euros and yen are also accepted, and major credit cards are widely used.</p>
      </mat-expansion-panel>
    </mat-accordion>
  </mat-card-content>
</mat-card>
  `,
  styles: `
    .about-card {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
}

mat-card-content h2 {
  margin-top: 20px;
}

mat-card-content h5 {
  margin-top: 15px;
  margin-bottom: 10px;
}

`,
})
export class AboutComponent {}
