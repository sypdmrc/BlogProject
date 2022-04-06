import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { Card } from "../models/card";

@Injectable()
export class CardService {

  url = "http://localhost:3000/cards";

  constructor(private http: HttpClient) { }

  getCards(category: string): Observable<Card[]> {

    let newUrl = this.url;

    if (category) {
      newUrl += "?category=" + category
    }


    return this.http.get<Card[]>(newUrl)
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError),
      )
  }

  getCardById(cardId: number): Observable<Card> {
    return this.http.get<Card>(this.url + "/" + cardId).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError),
    )
  }


  createCard(card: Card): Observable<Card> {

    const httpOptions={
      headers:new HttpHeaders({
        "Content-type": "application/json",
        "Authorization": "Token"
      })
    }

    return this.http.post<Card>(this.url,card,httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError),
    )

  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      //client ya da network
      return throwError(error.error.message)
    }
    else {
      //backend
      switch (error.status) {
        case 404:
          return throwError("404 Not Found");

        case 403:
          return throwError("Erişmek istediğiniz alana yetkiniz yok")

        case 500:
          return throwError("Server hatası")

        default:
          return throwError("Bilinmeyen bir hata oluştu")
      }
    }

  }
}
