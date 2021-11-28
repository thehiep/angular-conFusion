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
import { DishService } from "./services/dish.service";
@NgModule({
  declarations: [AppComponent, MenuComponent, DishdetailComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
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
