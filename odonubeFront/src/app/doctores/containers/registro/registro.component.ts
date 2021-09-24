import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  @Input()
  editMode: number;
  @Input()
  usuario: any;

  @Output()
  onData = new EventEmitter<any>();

  registroUsuario: FormGroup;

  showError: {};
  errorMsg: string;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
    this.showError = {
      errorAct: false
    };
  }

  initForm() {
    this.registroUsuario = new FormGroup(
      {
        username: new FormControl("", Validators.required),
        mail: new FormControl("", [Validators.required, Validators.email]),
        name: new FormControl("", Validators.required),
        tlf: new FormControl("", Validators.required),
        tipo: new FormControl("", Validators.required),
        password: new FormControl("", [
          Validators.required,
          Validators.minLength(6)
        ]),
        cpassword: new FormControl("", Validators.required)
      }
    );
  }
  get fUsuario() {
    return this.registroUsuario.controls;
  }

  endRegistro() {
    var userAux = this.registroUsuario.value;
    var userValues;
    let tipo = userAux.tipo;
    let error;
    let refreshList;
    let endpoint;

    userValues = {
      username: userAux.username,
      name: userAux.name,
      tlf: userAux.tlf,
      mail: userAux.mail,
      password: userAux.password,
      type: userAux.tipo
    };

    switch (tipo) {
      case "SuperAdmin":
        endpoint = "/superadmins";
        break;
      case "Vendedor":
        endpoint = "/vendedores";
        break;
      default:
        endpoint = "/admins";

        break;
    }
    error = this.catchUsuarioErrors();
    if (error) {
      let errorMsg =
        "Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo";
      this.openError(errorMsg);
    } else {
    }
  }

  catchUsuarioErrors() {
    let aux1 = this.fUsuario.name.errors
      ? this.fUsuario.name.errors.required
      : false;
    let aux2 = this.fUsuario.mail.errors
      ? this.fUsuario.mail.errors.required
      : false;
    let aux3 = this.fUsuario.username.errors
      ? this.fUsuario.username.errors.required
      : false;
    let aux4 = this.fUsuario.password.errors
      ? this.fUsuario.password.errors.required
      : false;
    let aux5 = this.fUsuario.password.errors
      ? this.fUsuario.password.errors.minlength
      : false;
    let aux6 = this.fUsuario.cpassword.errors
      ? this.fUsuario.cpassword.errors.required
      : false;
    let aux7 = this.fUsuario.cpassword.errors
      ? this.fUsuario.cpassword.errors.ConfirmPassword
      : false;
    let error = aux1 || aux2 || aux3 || aux4 || aux5 || aux6 || aux7;
    return error;
  }

  openError(msg: string) {
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

  resetForms() {
    this.registroUsuario.reset();
  }
}

