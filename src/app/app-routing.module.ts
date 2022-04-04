import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardComponent } from './main/card/card.component';


const routes: Routes = [

  { path: "home", component: AppComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home/category/:category", component: CardComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
