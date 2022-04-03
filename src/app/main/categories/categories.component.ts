import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryRepository } from 'src/app/models/category.repository';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories:Category[];

  categoryRepository:CategoryRepository;


  constructor() {
    this.categoryRepository = new CategoryRepository();
    this.categories=this.categoryRepository.getCategories();
   }

  ngOnInit(): void {
  }


}
