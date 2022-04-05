import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/models/card';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CardService } from 'src/app/services/card.service';




@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [CardService]
})
export class CardComponent implements OnInit {

  title = "blog listesi";

  cards: Card[] = [];

  FilteredCards: Card[] = [];

  filterCards: string = "";

  error: any;




  constructor(private alertifyService: AlertifyService, private cardService: CardService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {

      this.cardService.getCards(params["category"]).subscribe(data => {
        this.cards = data;

        this.FilteredCards = this.cards;
      }, error => {
        this.error = error

      })

    })


  }

  onInputChange() {
    this.FilteredCards = this.filterCards ?
      this.cards.filter(c => c.category.toLowerCase().startsWith(this.filterCards)) : this.cards;
  }

  addToList($event: any, card: Card) {
    if ($event.target.classList.contains("btn-success")) {
      $event.target.classList.remove("btn-success");
      $event.target.classList.add("btn-danger");
      $event.target.innerText = "Favorilerden Çıkar"


      this.alertifyService.success(card.category.toUpperCase() + " favorilere eklendi")
    }
    else {
      $event.target.classList.remove("btn-danger");
      $event.target.classList.add("btn-success");
      $event.target.innerText = "Favorilere Ekle"


      this.alertifyService.error(card.category.toUpperCase() + " favorilerden çıkarıldı")
    }
  }










}
