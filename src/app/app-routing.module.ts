import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailComponent } from './main/card-detail/card-detail.component';
import { CardComponent } from './main/card/card.component';


const routes: Routes = [
  { path: "home", component: CardComponent },
  { path: "cards", component: CardComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "cards/category/:category", component: CardComponent },
  { path: "cards/:cardId", component: CardDetailComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
