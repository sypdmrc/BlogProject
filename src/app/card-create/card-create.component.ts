import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  model: any = {
    category: ""
  };

  cardForm = new FormGroup({

    title: new FormControl("Card Title"),
    description: new FormControl("Card Description"),
    imageUrl: new FormControl("Card Image"),
    category: new FormControl("html")


  })


  constructor(private categoryService: CategoryService, private cardService: CardService, private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  createCard() {

    console.log(this.cardForm)
    console.log(this.cardForm.value)
    console.log(this.cardForm.value.title)

    // const card = {
    //   id: 0,
    //   title: this.model.title,
    //   description: this.model.description,
    //   views: 0,
    //   comments: 0,
    //   imageUrl: this.model.imageUrl,
    //   category: this.model.category,
    //   isPopular: false,
    //   datePublished: new Date().getTime(),

    // }

    // this.cardService.createCard(card).subscribe(data => {
    //   this.router.navigate(["cards", data.id])
    // })

  }

  log(value: any) {
    console.log(value)

  }

  clearForm(){

    this.cardForm.patchValue({
      title:"",
      description:"",
      imageUrl:"",
      category:"",
    })

  }






}
