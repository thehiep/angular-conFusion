import { Inject, Injectable } from "@angular/core";
import { Dish } from "../shared/dish";
import { Observable, of } from "rxjs";
import { catchError, delay, map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ProcessHTTPMsgService } from "./process-httpmsg.service";

@Injectable({
  providedIn: "root",
})
export class DishService {
  constructor(
    private http: HttpClient,
    private processHTTPMsg: ProcessHTTPMsgService,
    @Inject("BaseURL") private BaseURL
  ) {}
  getDishes(): Observable<Dish[]> {
    return this.http
      .get<Dish[]>(this.BaseURL + "dishes")
      .pipe(catchError(this.processHTTPMsg.hanldeError));
  }
  getDish(id: string): Observable<Dish> {
    return this.http
      .get<Dish>(this.BaseURL + "dishes/" + id)
      .pipe(catchError(this.processHTTPMsg.hanldeError));
  }
  getFeatureDish(): Observable<Dish> {
    return this.http
      .get<Dish[]>(this.BaseURL + "dishes?featured=true")
      .pipe(map((dishes) => dishes[0]))
      .pipe(catchError(this.processHTTPMsg.hanldeError));
  }
  getDishIds(): Observable<string[] | any> {
    return this.getDishes()
      .pipe(map((dishes) => dishes.map((dish) => dish.id)))
      .pipe(catchError((error) => error));
  }
  putDish(dish: Dish): Observable<Dish> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.http
      .put<Dish>(this.BaseURL + "dishes/" + dish.id, dish, httpOptions)
      .pipe(catchError(this.processHTTPMsg.hanldeError));
  }
}
