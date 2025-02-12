import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
// import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
// import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";
import { MessagesComponent } from "./messages/messages.component";
import { BonusPointModule } from "./bonus-point/bonus-point.module";
import { AppService } from "./app.service";
import { CookieModule } from 'ngx-cookie';

// import { NineBlockComponent } from './nine-block/nine-block.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CookieModule.forRoot(),
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
    }),
    BonusPointModule,
  ],
  declarations: [AppComponent, HeroDetailComponent, MessagesComponent],

  providers: [HeroService, MessageService, AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
