import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { AlertifyService } from "../_services/alertify.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    public authservice: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    this.authservice.login(this.model).subscribe(
      (next) => {
        this.alertify.success("logged in successfully");
      },
      (error) => {
        this.alertify.error("Log in failed");
      },
      () => {
        this.router.navigate(["/members"]);
      }
    );
  }

  loggedIn() {
    // const token = localStorage.getItem("token");
    // return !!token;
    return this.authservice.loggedIn();
  }

  logout() {
    localStorage.removeItem("token");
    this.alertify.messsage("logged out");
    this.router.navigate(["/home"]);
  }
}
