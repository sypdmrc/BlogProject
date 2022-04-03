import { Component, OnInit, } from '@angular/core';
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

  FilteredCards:Card[];

  popularCards: Card[];

  cardRepository: CardRepository;

  filterCards:string="";




  constructor() {

    this.cardRepository = new CardRepository();
    this.cards = this.cardRepository.getCards();
    this.popularCards = this.cardRepository.getPopularCards();
    this.FilteredCards=this.cards;

  }

  ngOnInit():void {

  }

  onInputChange(){
    this.FilteredCards=this.filterCards?
    this.cards.filter(c=>c.category.toLowerCase().indexOf(this.filterCards)!==-1 || c.category.indexOf(this.filterCards)!==-1):this.cards;
  }












}
