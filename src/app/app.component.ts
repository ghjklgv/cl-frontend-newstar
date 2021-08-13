import { Component } from "@angular/core";
import { HeroService } from "./hero.service";
import { Hero } from "./hero";
import { Subscription } from "rxjs";
import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Tour of Heroes";
  heroes: Hero[];
  subscription: Subscription;
  titles = { heroes: "", dashboard: "" };

  constructor(
    private heroService: HeroService,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.getHeroes();
    this.getTitle();
  }
  getHeroes(): void {
    this.subscription = this.heroService.getChileHeroes().subscribe((val) => {
      this.heroes = val;
    });
  }
  getTitle(): void {
    this.appService
      .getTitle()
      .subscribe((titles: { heroes: string; dashboard: string }) => {
        this.titles.heroes = titles.heroes;
        this.titles.dashboard = titles.dashboard;
      });
  }
}
