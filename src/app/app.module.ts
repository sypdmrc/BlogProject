import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './main/card/card.component';
import { CardDetailComponent } from './main/card-detail/card-detail.component';
import { VisitedComponent } from './main/visited/visited.component';
import { CloudComponent } from './main/cloud/cloud.component';
import { CategoriesComponent } from './main/categories/categories.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CardComponent,
    CardDetailComponent,
    VisitedComponent,
    CloudComponent,
    CategoriesComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
