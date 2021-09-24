import { Component, OnInit, OnChanges } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "./services/auth.service";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnChanges {
  islogged: boolean = false;
  aMenu: any = {};

  menuOn: boolean = false;

  constructor(private auth: AuthService, private router: Router) {
/*     this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
      }
    }); */
  }

  ngOnInit() {
    this.islogged = this.auth.isAuthenticated();
    this.menuOn = true;
    this.aMenu = {
      aMenu: this.menuOn
    };
  }

  tMenu() {
    this.menuOn = !this.menuOn;
    this.aMenu = {
      aMenu: this.menuOn
    };
  }

  ngOnChanges() {
    this.islogged = this.auth.isAuthenticated();
  }
}
