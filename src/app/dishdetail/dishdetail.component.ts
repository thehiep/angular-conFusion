import { Component, Inject, Input, OnInit, ViewChild } from "@angular/core";
import { Dish } from "../shared/dish";
import { Params } from "@angular/router";
import { Location } from "@angular/common";
import { DishService } from "../services/dish.service";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Comment } from "../shared/comment";
@Component({
  selector: "app-dishdetail",
  templateUrl: "./dishdetail.component.html",
  styleUrls: ["./dishdetail.component.css"],
})
export class DishdetailComponent implements OnInit {
  dish: Dish;
  dishIds: string[];
  prev: string;
  next: string;
  comment: Comment;
  commentForm: FormGroup;
  errMess: string;
  dishCopy: Dish;
  @ViewChild("fform") commentFormDirective;
  formErrors = {
    author: "",
    comment: "",
    rating: "",
  };

  validationMessage = {
    author: {
      required: "Name is required",
      minlength: "Name must be at least 2 characters long",
    },
    comment: {
      required: "Coment is required",
      minlength: "Comment must be at least 2 characters long",
    },
  };
  constructor(
    private dishService: DishService,
    private location: Location,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    @Inject("BaseURL") private BaseURL
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.dishService
      .getDishIds()
      .subscribe((dishIds) => (this.dishIds = dishIds));
    this.route.params
      .pipe(switchMap((param: Params) => this.dishService.getDish(param["id"])))
      .subscribe(
        (dish) => {
          this.dish = dish;
          this.dishCopy = dish;
          this.setPrevNext(dish.id);
        },
        (errmess) => (this.errMess = <any>errmess)
      );
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev =
      this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next =
      this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack() {
    this.location.back();
  }
  createForm() {
    this.commentForm = this.fb.group({
      author: ["", [Validators.required, Validators.minLength(2)]],
      rating: [0],
      comment: ["", [Validators.required, Validators.minLength(2)]],
    });
    this.commentForm.valueChanges.subscribe((data) => {
      this.onValueChanged(data);
    });
  }
  onSubmit() {
    this.comment = this.commentForm.value;
    this.commentForm.reset({
      author: "",
      comment: "",
      rating: 0,
    } as Comment);
    this.dishCopy.comments.push({
      ...this.comment,
      date: new Date().toISOString(),
    });
    this.dishService.putDish(this.dishCopy).subscribe(
      (dish) => {
        this.dish = dish;
        this.dishCopy = dish;
      },
      (errMess) => {
        (this.dish = null), (this.dishCopy = null);
        this.errMess = <any>errMess;
      }
    );
  }
  onValueChanged(data?: any) {
    if (!this.commentForm) return;
    const form = this.commentForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = "";
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const message = this.validationMessage[field];
        for (const key in control.errors) {
          this.formErrors[field] += message[key];
        }
      }
    }
  }
}
