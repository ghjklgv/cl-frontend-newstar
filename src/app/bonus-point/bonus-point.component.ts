import { Component, OnInit } from "@angular/core";
import { BsJs1Service } from "./bs-js1.service";
import { of } from "rxjs";
import { tap } from "rxjs/operators";
// import { CookieService } from "ngx-cookie-service";
import { CookieService } from "ngx-cookie";

@Component({
  selector: "app-bonus-point",
  templateUrl: "./bonus-point.component.html",
  styleUrls: ["./bonus-point.component.css"],
})
export class BonusPointComponent implements OnInit {
  constructor(
    private bsJs1Service: BsJs1Service,
    private cookieService: CookieService
  ) {}

  ngOnInit() {}

  redirectToKeiPage() {
    location.href = `${location.protocol}//kei.careline.localhost:${location.port}/bonusPoint`;
  }

  redirectToAnnPage() {
    location.href = `${location.protocol}//ann.careline.localhost:${location.port}/bonusPoint`;
  }

  answerCookie1() {
    this.cookieService.putObject("ck1", {
      domain: `localhost:${location.port}`,
      path: "/api",
    });
  }

  answerRxjs1() {
    const first$ = of("first", 2000)
      .pipe(tap(() => console.log("first")))
      .toPromise();
    const second$ = of("second", 1500)
      .pipe(tap(() => console.log("second")))
      .toPromise();
    const third$ = of("thrid", 800)
      .pipe(tap(() => console.log("thrid")))
      .toPromise();

    first$.then(() => {
      console.log("first");
      second$.then(() => {
        console.log("second");
        third$.then(() => console.log("thrid"));
      });
    });

    // 考題限制 : 執行順序需為 : first$ => second$ => third$
    // 預期的Console結果 :
    //  first
    //  second
    //  third

    // ToDo...
  }

  answerJs1() {
    let result: string;
    let arr: string[];
    arr = [];
    this.bsJs1Service.getSample().forEachChilds((child) => {
      arr = arr.filter(
        (item) =>
          item !== String(child.value) && item !== String(child.parent.value)
      );
      arr.push(String(child.value));
      arr.push(String(child.parent.value));
      result = "ToDo...";
    });
    result = String(arr);
    // 預期alert的結果 => js 1 answer : child_1_1 , child_1_2 , parent_1 , child_2_1 ,  parent_2 ,child_3_1 , child_3_2 , child_3_3 , parent_3
    alert(`js 1 answer : ${result}`);
  }
}
