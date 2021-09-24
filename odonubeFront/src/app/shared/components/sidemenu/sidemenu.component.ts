import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { faQuestionCircle, faCalendarPlus, faComments, faIdCard, faUserCog, faAddressBook, faDollarSign } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-sidemenu',
	templateUrl: './sidemenu.component.html',
	styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

	boxOn: boolean[] = [];
	menuOn: number = 0;
	prevMenu: number = 0;

	user: any;
	isSuperAdmin: boolean = true;
	isDoctor: boolean = false;

	myMenu: any;

	constructor(
		private auth: AuthService
	) {

	}

  ngOnInit() {
/*     this.user = this.auth.decode();
    this.isDoctor = this.user.type === "Doctor";
    this.isSuperAdmin = this.user.type === "SuperAdmin"; */
    if (this.isDoctor) {
      this.setDoctorMenu();
    } else if (this.isSuperAdmin) {
      this.setSuperAdminMenu();
    }
  }

  setDoctorMenu() {
    this.myMenu = [
      {
        name: "Pacientes",
        link: "/pacientes",
        id: 0,
        icon: faUserCog,
        boxOn: false,
        childs: [
          {
            name: "Registrar pacientes",
            link: "/pacientes/registro",
            id: 0
          },
          {
            name: "Ver pacientes",
            link: "/pacientes/lista",
            id: 1
          }
        ]
      }
    ];
  }

  setSuperAdminMenu() {
    this.myMenu = [
      {
        name: "Pacientes",
        link: "/pacientes",
        id: 0,
        icon: faUserCog,
        boxOn: false,
        childs: [
          {
            name: "Registrar pacientes",
            link: "/pacientes/registro",
            id: 0
          },
          {
            name: "Ver pacientes",
            link: "/pacientes/lista",
            id: 1
          }
        ]
      },
      {
        name: "Doctores",
        link: "/doctores",
        id: 1,
        icon: faCalendarPlus,
        boxOn: false,
        childs: [
          {
            name: "Registrar doctores",
            link: "/doctores/registro",
            id: 0
          },
          {
            name: "Ver doctores",
            link: "/doctores/lista",
            id: 1
          }
        ]
      }
    ];
  }

  tMenu(event: any, item: any) {
    if (this.prevMenu == null) {
      this.prevMenu = item.id;
    }

    this.menuOn = item.id;
    if (this.prevMenu != this.menuOn) {
      this.closeMenus();
    }
    this.prevMenu = this.menuOn;
    this.myMenu[item.id].boxOn = !this.myMenu[item.id].boxOn;
    this.myMenu[item.id].class = {
      aBox: this.myMenu[item.id].boxOn
    };
  }

  closeMenus() {
    this.myMenu.forEach((item: any) => {
      item.boxOn = false;
      item.class = {
        aBox: false
      };
    });
  }
}
