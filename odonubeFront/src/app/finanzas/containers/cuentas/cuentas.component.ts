
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FinanzasService } from '../../services/finanzas.service';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})
export class CuentasComponent implements OnInit {
  @Input()
  editMode: number;
  @Input()
  usuario: any;

  @Output()
  onData = new EventEmitter<any>();

  registroCuenta: FormGroup;

  showError: {};
  errorMsg: string;

  constructor(
    private auth: AuthService,
    private cuentas: FinanzasService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
    this.showError = {
      errorAct: false,
    };
  }

  initForm() {
    this.registroCuenta = new FormGroup({
      idcuenta: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      typecuenta: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    });
  }
  get fCuenta() {
    return this.registroCuenta.controls;
  }

  async endRegistro() {
    try {
      var aux = this.registroCuenta.value;
      let error;

      let cuenta = {
        idcuenta: aux.idcuenta,
        name: aux.name,
        typecuenta: aux.typecuenta,
        status: aux.status
      };

      error = this.catchCuentaErrors();
      if (error) {
        let errorMsg =
          'Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo';
        this.openError(errorMsg);
      } else {
        let response = await this.cuentas.create(cuenta);
        console.log(response);
        this.router.navigateByUrl("cuentas/lista")
      }
    } catch (e: any) {
      this.openError(e.message);
    }
  }

  catchCuentaErrors() {
    let aux1 = this.fCuenta.idcuenta.errors
      ? this.fCuenta.idcuenta.errors.required
      : false;
    let aux2 = this.fCuenta.name.errors
      ? this.fCuenta.name.errors.required
      : false;
    let aux3 = this.fCuenta.typecuenta.errors
      ? this.fCuenta.typecuenta.errors.required
      : false;
    let aux4 = this.fCuenta.status.errors
      ? this.fCuenta.status.errors.required
      : false;
    let error = aux1 || aux2 || aux3 || aux4;
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
    this.registroCuenta.reset();
  }

}
