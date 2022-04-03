import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardRepository } from 'src/app/models/card.repository';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  title = "blog listesi";

  cards: Card[];

  popularCards: Card[];

  cardRepository: CardRepository;






  constructor() {
    this.cardRepository = new CardRepository();
    this.cards = this.cardRepository.getCards();
    this.popularCards = this.cardRepository.getPopularCards();

  }

  ngOnInit(): void {
  }




}
