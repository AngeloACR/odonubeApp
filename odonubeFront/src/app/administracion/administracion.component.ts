import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.scss']
})
export class AdministracionComponent implements OnInit {
  aMenu: any = {};

  menuOn: boolean = false;
  constructor() { }


  ngOnInit() {
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
}