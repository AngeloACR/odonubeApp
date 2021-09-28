import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tratamientos',
  templateUrl: './tratamientos.component.html',
  styleUrls: ['./tratamientos.component.scss']
})
export class TratamientosComponent implements OnInit {
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