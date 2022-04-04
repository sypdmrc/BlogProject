import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Card } from "../models/card";

@Injectable()
export class CardService {

  url = "http://localhost:3000/cards";

  constructor(private http: HttpClient) { }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.url)
  }

}
