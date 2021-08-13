import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AppService {
  configUrl = "assets/data/dashboard-link.json";
  constructor(private http: HttpClient) {}

  getTitle(): Observable<{}> {
    return this.http.get<any>(this.configUrl);
  }
}
