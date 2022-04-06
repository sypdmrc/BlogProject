import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { CardService } from '../services/card.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.css'],
  providers: [CategoryService, CardService]
})
export class CardCreateComponent implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoryService, private cardService: CardService,private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  createCard(title: any, description: any, imageUrl: any, category: any) {

    const card = {
      id: 0,
      title: title.value,
      description: description.value,
      views: 0,
      comments: 0,
      imageUrl: imageUrl.value,
      category: category.value,
      isPopular: false,
      datePublished: new Date().getTime(),

    }

    this.cardService.createCard(card).subscribe(data => {
      this.router.navigate(["cards",data.id])
    })

  }

}
