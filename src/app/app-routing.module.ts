import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [

  { path: "anasayfa", component: AppComponent },
  { path: "", redirectTo: "anasayfa", pathMatch: "full" }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
