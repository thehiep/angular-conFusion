import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButton, MatListModule } from "@angular/material";
import { MatGridListModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from "./app.component";
import "hammerjs";
import { MenuComponent } from "./menu/menu.component";
import { MatCardModule } from "@angular/material";
import { MatButtonModule } from "@angular/material";
import { DishdetailComponent } from "./dishdetail/dishdetail.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

import { DishService } from "./services/dish.service";

import { AppRoutingModule } from "./app-routing/app-routing.module";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [DishService],
  bootstrap: [AppComponent],
})
export class AppModule {}
