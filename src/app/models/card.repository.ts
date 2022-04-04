import { Card } from "./card";

export class CardRepository{
  private cards:Card[];

  constructor() {

    this.cards=[




    ]

   }

   getCards():Card[]{
     return this.cards;
   }

   getCardById(id:number):Card{
     return this.cards.find(i=>i.id==id)
   }

   getPopularCards():Card[]{
     return this.cards.filter(i=>i.isPopular==true)
   }
}
