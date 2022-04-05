import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/models/card';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
  providers: [CardService]
})
export class CardDetailComponent implements OnInit {

  card: Card;

  constructor(private cardService: CardService, private activatedRoute: ActivatedRoute,private alertifyService: AlertifyService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.cardService.getCardById(params["cardId"]).subscribe(data => {
        this.card = data;
      })
    })
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
