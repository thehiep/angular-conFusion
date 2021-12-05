import { Component, Inject, OnInit } from "@angular/core";
import { DishService } from "../services/dish.service";
import { LeaderService } from "../services/leader.service";
import { PromotionService } from "../services/promotion.service";
import { Dish } from "../shared/dish";
import { Leader } from "../shared/leader";
import { Promotion } from "../shared/promotion";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  featureLeader: Leader;
  dishErrMess: string;
  constructor(
    private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService,
    @Inject("BaseURL") private BaseURL
  ) {}

  ngOnInit() {
    this.dishService.getFeatureDish().subscribe(
      (dish) => (this.dish = dish),
      (errmess) => (this.dishErrMess = <any>errmess)
    );
    this.promotionService
      .getFeaturePromotion()
      .subscribe((promo) => (this.promotion = promo));
    this.leaderService
      .getFeatureLeader()
      .subscribe((fea) => (this.featureLeader = fea));
  }
}
