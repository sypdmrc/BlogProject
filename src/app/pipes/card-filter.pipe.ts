import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../models/card';

@Pipe({
  name: 'cardFilter'
})
export class CardFilterPipe implements PipeTransform {

  transform(cards: Card[], filterCards: string): Card[] {
    filterCards = filterCards.toLowerCase();

    return filterCards? cards.filter((c:Card)=>c.category.toLowerCase().indexOf(filterCards)!==-1 || c.title.toLowerCase().indexOf(filterCards)!==-1) :cards;




  }

}
