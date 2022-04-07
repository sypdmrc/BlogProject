import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { CardService } from '../services/card.service';
import { CategoryService } from '../services/category.service';
import { ImageValidator } from '../validators/image.validator';

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

    title: new FormControl("", [Validators.required, Validators.minLength(5)]),
    description: new FormControl("", [Validators.required]),
    imageUrl: new FormControl("", [Validators.required,ImageValidator.isValidExtension]),
    category: new FormControl("", [Validators.required])


  })

  get title() {
   return this.cardForm.get('title');
  }

  get description() {
    return this.cardForm.get('description');
   }

   get imageUrl() {
    return this.cardForm.get('imageUrl');
   }

   get category() {
    return this.cardForm.get('category');
   }


  constructor(private categoryService: CategoryService, private cardService: CardService, private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  createCard() {

    const card = {
      id: 0,
      title: this.cardForm.value.title,
      description: this.cardForm.value.description,
      views: 0,
      comments: 0,
      imageUrl: this.cardForm.value.imageUrl,
      category: this.cardForm.value.category,
      isPopular: false,
      datePublished: new Date().getTime(),

    }

    this.cardService.createCard(card).subscribe(data => {
      this.router.navigate(["cards", data.id])
    })

  }

  log(value: any) {
    console.log(value)

  }

  clearForm() {

    this.cardForm.patchValue({
      title: "",
      description: "",
      imageUrl: "",
      category: "",
    })

  }






}
