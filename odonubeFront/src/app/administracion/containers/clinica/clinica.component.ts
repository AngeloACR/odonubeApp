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
  selector: 'app-clinica',
  templateUrl: './clinica.component.html',
  styleUrls: ['./clinica.component.scss']
})
export class ClinicaComponent implements OnInit {

  @Input()
  editMode: number;
  @Input()
  usuario: any;

  @Output()
  onData = new EventEmitter<any>();

  registroClinica: FormGroup;

  showError: {};
  errorMsg: string;

  constructor(
    private auth: AuthService,
    private clinica: AdministracionService,
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
    this.registroClinica = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      reporth: new FormControl('', Validators.required),
      reportf: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
    });
  }
  get fClinica() {
    return this.registroClinica.controls;
  }

  async endRegistro() {
    var aux = this.registroClinica.value;
    let error;

    let clinica = {
      name: aux.name,
      phone: aux.phone,
      address: aux.address,
      reporth: aux.reporth,
      reportf: aux.reportf,
      img: aux.img,
    };
    error = this.catchClinicaErrors();
    if (error) {
      let errorMsg =
        'Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo';
      this.openError(errorMsg);
    } else {
      let response = await this.clinica.create(clinica);
      console.log(response);
      this.router.navigateByUrl("clinica/lista")
    }
  }

  catchClinicaErrors() {
    let aux1 = this.fClinica.name.errors
      ? this.fClinica.name.errors.required
      : false;
    let aux2 = this.fClinica.phone.errors
      ? this.fClinica.phone.errors.required
      : false;
    let aux3 = this.fClinica.address.errors
      ? this.fClinica.address.errors.required
      : false;
    let aux4 = this.fClinica.reporth.errors
      ? this.fClinica.reporth.errors.required
      : false;
    let aux5 = this.fClinica.reportf.errors
      ? this.fClinica.reportf.errors.required
      : false;
    let aux6 = this.fClinica.img.errors
      ? this.fClinica.img.errors.required
      : false;
    let error =
      aux1 ||
      aux2 ||
      aux3 ||
      aux4 ||
      aux5 ||
      aux6
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
    this.registroClinica.reset();
  }

}
