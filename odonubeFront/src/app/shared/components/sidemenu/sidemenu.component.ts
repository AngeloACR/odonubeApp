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
      },
      {
        name: "Tratamientos",
        link: "/tratamientos",
        id: 2,
        icon: faCalendarPlus,
        boxOn: false,
        childs: [
          {
            name: "Registrar tratamiento",
            link: "/tratamientos/registro",
            id: 0
          },
          {
            name: "Generar Baja médica",
            link: "/tratamientos/baja",
            id: 1
          }
        ]
      },
      {
        name: "Prescripciones",
        link: "/prescripciones",
        id: 3,
        icon: faCalendarPlus,
        boxOn: false,
        childs: [
          {
            name: "Registrar prescripcion",
            link: "/prescripciones/registro",
            id: 0
          },
          {
            name: "Lista de prescripciones",
            link: "/prescripciones/lista",
            id: 1
          },
          {
            name: "Registrar visita de paciente",
            link: "/prescripciones/visita",
            id: 2
          },
          {
            name: "Lista de visitas",
            link: "/prescripciones/visita-lista",
            id: 3
          }
        ]
      },
      {
        name: "Finanzas",
        link: "/finanzas",
        id: 4,
        icon: faCalendarPlus,
        boxOn: false,
        childs: [
          {
            name: "Registrar cuenta",
            link: "/finanzas/cuentas",
            id: 0
          },
          {
            name: "Registrar voucher",
            link: "/finanzas/voucher",
            id: 1
          },
          {
            name: "Lista de vouchers",
            link: "/finanzas/voucher-lista",
            id: 2
          }
        ]
      },
      {
        name: "Administración",
        link: "/administración",
        id: 5,
        icon: faCalendarPlus,
        boxOn: false,
        childs: [
          {
            name: "Registrar usuario",
            link: "/administracion/usuarios",
            id: 0
          },
          {
            name: "Lista de usuarios",
            link: "/administracion/usuarios-lista",
            id: 1
          },
          {
            name: "Registrar clínica",
            link: "/administracion/clinica",
            id: 2
          },
          {
            name: "Ver permisos",
            link: "/administracion/permisos",
            id: 3
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
