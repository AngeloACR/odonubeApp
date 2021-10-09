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
  selector: 'app-registro-vuchers',
  templateUrl: './registro-vuchers.component.html',
  styleUrls: ['./registro-vuchers.component.scss']
})
export class RegistroVuchersComponent implements OnInit {

  @Input()
  editMode: number;
  @Input()
  usuario: any;

  @Output()
  onData = new EventEmitter<any>();

  registroVauche: FormGroup;

  showError: {};
  errorMsg: string;

  constructor(
    private auth: AuthService,
    // private vauches: FinanzasService,
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
    this.registroVauche = new FormGroup({
      idVauche: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
      namecuenta: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      referencia: new FormControl('', Validators.required),
      monto: new FormControl('', Validators.required),
      metodo: new FormControl('', Validators.required),
      observacion: new FormControl('', Validators.required)
    });
  }
  get fVauche() {
    return this.registroVauche.controls;
  }

  async endRegistro() {
    try {
      var aux = this.registroVauche.value;
      let error;

      let vauche = {
        idVauche: aux.idVauche,
        tipo: aux.tipo,
        namecuenta: aux.namecuenta,
        date: aux.date,
        referencia: aux.referencia,
        monto: aux.monto,
        metodo: aux.metodo,
        observacion: aux.observacion,
      };

      error = this.catchVaucheErrors();
      if (error) {
        let errorMsg =
          'Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo';
        this.openError(errorMsg);
      } else {
        // let response = await this.vauches.create(vauche);
        // console.log(response);
        this.router.navigateByUrl("cuentas/lista")
      }
    } catch (e: any) {
      this.openError(e.message);
    }
  }

  catchVaucheErrors() {
    let aux1 = this.fVauche.idVauche.errors
      ? this.fVauche.idVauche.errors.required
      : false;
    let aux2 = this.fVauche.tipo.errors
      ? this.fVauche.tipo.errors.required
      : false;
    let aux3 = this.fVauche.namecuenta.errors
      ? this.fVauche.namecuenta.errors.required
      : false;
    let aux4 = this.fVauche.date.errors
      ? this.fVauche.date.errors.required
      : false;
    let aux5 = this.fVauche.referencia.errors
      ? this.fVauche.referencia.errors.required
      : false;
    let aux6 = this.fVauche.monto.errors
      ? this.fVauche.monto.errors.required
      : false;
    let aux7 = this.fVauche.metodo.errors
      ? this.fVauche.metodo.errors.required
      : false;
    let aux8 = this.fVauche.observacion.errors
      ? this.fVauche.observacion.errors.required
      : false;
    let error = aux1 || aux2 || aux3 || aux4 || aux5 || aux6 || aux7 || aux8;
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
    this.registroVauche.reset();
  }


}
