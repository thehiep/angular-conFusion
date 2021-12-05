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
import { MatDialogModule } from "@angular/material";
import { MatFormFieldModule } from "@angular/material";
import { MatInputModule } from "@angular/material";
import { MatCheckboxModule } from "@angular/material";
import { MatSelectModule } from "@angular/material";
import { MatSlideToggleModule } from "@angular/material";
import { MatProgressSpinnerModule } from "@angular/material";
import { MatSliderModule } from "@angular/material";
import { FormsModule } from "@angular/forms";
import { DishdetailComponent } from "./dishdetail/dishdetail.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

import { DishService } from "./services/dish.service";

import { AppRoutingModule } from "./app-routing/app-routing.module";
import { HomeComponent } from "./home/home.component";
import { PromotionService } from "./services/promotion.service";
import { LoginComponent } from "./login/login.component";
import { LeaderService } from "./services/leader.service";
import { ProcessHTTPMsgService } from "./services/process-httpmsg.service";

import { ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { baseURL } from "./shared/baseurl";
import { HighlightDirective } from './directives/highlight.directive';

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
    LoginComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    AppRoutingModule,

    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSliderModule,

    ReactiveFormsModule,

    HttpClientModule,
  ],
  providers: [
    DishService,
    PromotionService,
    LeaderService,
    ProcessHTTPMsgService,
    { provide: "BaseURL", useValue: baseURL },
  ],
  entryComponents: [LoginComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
