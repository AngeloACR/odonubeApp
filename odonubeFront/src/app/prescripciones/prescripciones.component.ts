import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prescripciones',
  templateUrl: './prescripciones.component.html',
  styleUrls: ['./prescripciones.component.scss']
})
export class PrescripcionesComponent implements OnInit {
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