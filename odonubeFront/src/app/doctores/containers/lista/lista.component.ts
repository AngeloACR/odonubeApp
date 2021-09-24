import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { DbHandlerService } from "../../../services/db-handler.service";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { forkJoin } from "rxjs";
import {
  faTrashAlt,
  faFilePdf,
  faEdit,
  faEye
} from "@fortawesome/free-solid-svg-icons";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  faEye = faEye;
  faTrash = faTrashAlt;
  faPdf = faFilePdf;
  faEdit = faEdit;

  isEmpty: boolean;
  endpoint: string;
  name: string;
  addText: string;
  fields: any[];
  values: any[];

  title: string;
  filterForm: FormGroup;

  constructor(
    private auth: AuthService,
    private dbHandler: DbHandlerService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
/*     this.initComponent(
      "/cuentasporcobrar",
      "Lista de Cuentas Por Cobrar",
      "Agregar Cuentas Por Cobrar",
      "cuentasporcobrar"
    );
    this.initForm();
    this.isEmpty = true;
    let auxfields = this.dbHandler.getLocal(this.name + "Fields");
    let auxValues = this.dbHandler.getLocal(this.name + "Values");

    this.fields = ["Id", "Referencia", "Monto pendiente"];

    this.values = [];

    auxValues.forEach((value: any) => {
      let aux = [value._id, value.referencia, value.balance];
      this.values.push(aux);
    });

    if (this.values.length) {
      this.isEmpty = false;
    } */
  }

  initForm() {
    this.filterForm = new FormGroup({
      tipo: new FormControl("")
    });
  }

  initComponent(endpoint: any, title: any, addText: any, name: any) {
    this.endpoint = endpoint;
    this.title = title;
    this.addText = addText;
    this.name = name;
  }

  isAdmin: boolean;
  isSuperAdmin: boolean;
  isVendedor: boolean;

  deleteItem(event: any, index: any) {
/*     let auxValues = this.dbHandler.getLocal(this.name + "Values");
    let item = auxValues[index];
    var myEnd = this.endpoint;
    let type = this.auth.getType();
    this.isAdmin = type === "Admin";
    this.isVendedor = type === "Vendedor";
    this.isSuperAdmin = type === "SuperAdmin";

    //Autorizacion basada en roles. Modificar eventualmente a basada en reglas
    console.log(this.isSuperAdmin);
    console.log(this.isAdmin);
    if (!(this.isAdmin || this.isSuperAdmin)) {
      this.closeConfirm();
      let errorMsg = "Usuario no autorizado";
      this.openError(errorMsg);
    } else {
      this.dbHandler.deleteSomething(item._id, myEnd).subscribe((data: any) => {
        this.closeConfirm();
        if (!data.status) {
          let errorMsg = data.msg;
          this.openError(errorMsg);
        } else {
          this.dbHandler.actualizar();
        }
      });
    } */
  }

  deletedItem: any;
  confirmDelete(event: any, item: any) {
    this.deletedItem = item;
    this.openConfirm();
  }

  showConfirm: {};

  openConfirm() {
    this.showConfirm = {
      confirmAct: true
    };
  }

  closeConfirm() {
    this.showConfirm = {
      confirmAct: false
    };
  }

  openUpdate(event: any, item: any) {
    this.router.navigateByUrl("/actualizar/cuentaporcobrar/" + item);
  }

  agregar() {
    this.router.navigateByUrl("/registro/cuentaporcobrar");
  }

  habilitarElemento(event: any, elemento: any, isHabilitar: any) {}

  showError: {};
  errorMsg: string;

  openError(msg: any) {
    this.errorMsg = msg;
    this.showError = {
      errorAct: true
    };
  }

  closeError() {
    this.showError = {
      errorAct: false
    };
  }
}
