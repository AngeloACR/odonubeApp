import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {
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
