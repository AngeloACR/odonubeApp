import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faBars = faBars;

  @Output()
  menu = new EventEmitter<any>();

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  tMenu() {
    this.menu.emit();
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/auth');
  }
}
