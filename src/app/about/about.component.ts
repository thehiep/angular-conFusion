import { Component, OnInit } from "@angular/core";
import { LeaderService } from "../services/leader.service";
import { Leader } from "../shared/leader";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor(private leaderService: LeaderService) {}
  leaders: Leader[];
  ngOnInit() {
    this.leaderService
      .getLeaders()
      .subscribe((leaders) => (this.leaders = leaders));
  }
}
