import { HttpClient } from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { Card } from 'src/app/models/card';
import { AlertifyService } from 'src/app/services/alertify.service';




@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  title = "blog listesi";

  cards: Card[]=[];

  FilteredCards: Card[]=[];

  filterCards: string = "";




  constructor(private alertifyService: AlertifyService, private http: HttpClient) {

  }

  ngOnInit(): void {

    this.http.get<Card[]>("http://localhost:3000/cards").subscribe(data => {
      this.cards = data;

      this.FilteredCards = this.cards;
    })

  }

  onInputChange() {
    this.FilteredCards = this.filterCards ?
      this.cards.filter(c => c.category.toLowerCase().indexOf(this.filterCards) !== -1 || c.category.indexOf(this.filterCards) !== -1) : this.cards;
  }

  addToList($event: any, card: Card) {
    if ($event.target.classList.contains("btn-success")) {
      $event.target.classList.remove("btn-success");
      $event.target.classList.add("btn-danger");
      $event.target.innerText = "Favorilerden Çıkar"


      this.alertifyService.success(card.category + " favorilere eklendi")
    }
    else {
      $event.target.classList.remove("btn-danger");
      $event.target.classList.add("btn-success");
      $event.target.innerText = "Favorilere Ekle"


      this.alertifyService.error(card.category + " favorilerden çıkarıldı")
    }
  }










}
