import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.css'],
  providers: [CategoryService]
})
export class CardCreateComponent implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  createCard(title: any, description: any, imageUrl: any, category: any) {

    const card={
      title:title.value,
      description:description.value,
      imageUrl:imageUrl.value,
      category:category.value,
      isPopular:false,
      datePublished:new Date().getTime(),

    }

  }

}