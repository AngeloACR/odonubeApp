import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AdministracionService } from '../../services/administracion.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.scss']
})
export class RegistrarUsuarioComponent implements OnInit {
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
    private user: AdministracionService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
    this.showError = {
      errorAct: false,
    };
  }

  initForm() {
    this.registroUsuario = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      repassword: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
    });
  }
  get fUsuario() {
    return this.registroUsuario.controls;
  }

  async endRegistro() {
    var aux = this.registroUsuario.value;
    let error;

    let usuario = {
      id: aux.id,
      name: aux.name,
      user: aux.user,
      password: aux.password,
      repassword: aux.repassword,
      descripcion: aux.descripcion,
      contact: aux.contact,
      tipo: aux.tipo,
      date: aux.date,
      img: aux.img,
    };
    error = this.catchUsuarioErrors();
    if (error) {
      let errorMsg =
        'Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo';
      this.openError(errorMsg);
    } else {
      let response = await this.user.create(usuario);
      console.log(response);
      this.router.navigateByUrl("usuarios/lista")
    }
  }

  catchUsuarioErrors() {
    let aux1 = this.fUsuario.id.errors
      ? this.fUsuario.id.errors.required
      : false;
    let aux2 = this.fUsuario.name.errors
      ? this.fUsuario.name.errors.required
      : false;
    let aux3 = this.fUsuario.user.errors
      ? this.fUsuario.user.errors.required
      : false;
    let aux4 = this.fUsuario.password.errors
      ? this.fUsuario.password.errors.required
      : false;
    let aux5 = this.fUsuario.repassword.errors
      ? this.fUsuario.repassword.errors.required
      : false;
    let aux6 = this.fUsuario.descripcion.errors
      ? this.fUsuario.descripcion.errors.required
      : false;
    let aux7 = this.fUsuario.tipo.errors
      ? this.fUsuario.tipo.errors.required
      : false;
    let aux8 = this.fUsuario.date.errors
      ? this.fUsuario.date.errors.required
      : false;
    let aux9 = this.fUsuario.img.errors
      ? this.fUsuario.img.errors.required
      : false;
    let error =
      aux1 ||
      aux2 ||
      aux3 ||
      aux4 ||
      aux5 ||
      aux6 ||
      aux7 ||
      aux8 ||
      aux9 
    return error;
  }

  openError(msg: string) {
    this.errorMsg = msg;
    this.showError = {
      errorAct: true,
    };
  }

  closeError() {
    this.showError = {
      errorAct: false,
    };
  }

  resetForms() {
    this.registroUsuario.reset();
  }

}
