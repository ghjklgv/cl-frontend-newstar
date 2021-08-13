import { Component, OnInit } from "@angular/core";

import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    // this.heroes.push({ name } as Hero);
    // this.heroService.setChileHeroes(this.heroes);
    this.heroService
      .addHero({ name } as Hero, this?.heroes?.length)
      .subscribe((hero) => {
        this.heroes.push(hero);
        this.heroService.setChileHeroes(this.heroes);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.setChileHeroes(this.heroes);
    this.heroService.deleteHero(hero).subscribe();
  }
}
