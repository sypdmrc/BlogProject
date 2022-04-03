import { Category } from "./category";

export class CategoryRepository{
  private categories: Category[];

  constructor(){

    this.categories=[
      {id:1,name:"HTML"},
      {id:2,name:"CSS"},
      {id:3,name:"BOOTSTRAP"},
      {id:4,name:"JAVASCRIPT"},
      {id:5,name:"JQUERY"},
      {id:6,name:"REACT"},
      {id:7,name:"ANGULAR"},
    ]
  }

  getCategories():Category[]{
    return this.categories;
  }

}
