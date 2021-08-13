import { Component } from "@angular/core";
import { HeroService } from "./hero.service";
import { Hero } from "./hero";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Tour of Heroes";
  heroes: Hero[];
  subscription: Subscription;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.subscription = this.heroService.getChileHeroes().subscribe((val) => {
      this.heroes = val;
    });
  }
}
