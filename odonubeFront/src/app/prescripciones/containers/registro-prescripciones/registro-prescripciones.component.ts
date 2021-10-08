import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PrescripcionesService } from '../../services/prescripciones.service';
@Component({
  selector: 'app-registro-prescripciones',
  templateUrl: './registro-prescripciones.component.html',
  styleUrls: ['./registro-prescripciones.component.scss']
})
export class RegistroPrescripcionesComponent implements OnInit {
  @Input()
  editMode: number;
  @Input()
  usuario: any;

  @Output()
  onData = new EventEmitter<any>();

  registroPrescripcion: FormGroup;

  showError: {};
  errorMsg: string;

  constructor(
    private auth: AuthService,
    private prescripciones: PrescripcionesService,
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
    this.registroPrescripcion = new FormGroup({
      prescripcion: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      appnt: new FormControl('', Validators.required),
      visit: new FormControl('', Validators.required),
      idPatient: new FormControl('', [Validators.required]),
      patientName: new FormControl('', Validators.required),
      patientAge: new FormControl('', Validators.required),
      patientGender: new FormControl('', Validators.required),
    });
  }

  get fPrescripcion() {
    return this.registroPrescripcion.controls;
  }

  async endRegistro() {
    try {
      var aux = this.registroPrescripcion.value;
      let error;

      let prescripcion = {
        prescripcion: aux.prescripcion,
        date: aux.date,
        appnt: aux.appnt,
        visit: aux.visit,
        idPatient: aux.idPatient,
        patientName: aux.patientName,
        patientAge: aux.patientAge,
        patientGender: aux.patientGender,
      };

      error = this.catchPrescripcionErrors();
      if (error) {
        let errorMsg =
          'Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo';
        this.openError(errorMsg);
      } else {
        let response = await this.prescripciones.create(prescripcion);
        console.log(response);
        this.router.navigateByUrl("prescripciones/lista")
      }
    } catch (e: any) {
      this.openError(e.message);
    }
  }

  catchPrescripcionErrors() {
    let aux1 = this.fPrescripcion.prescripcion.errors
      ? this.fPrescripcion.prescripcion.errors.required
      : false;
    let aux2 = this.fPrescripcion.date.errors
      ? this.fPrescripcion.date.errors.required
      : false;
    let aux3 = this.fPrescripcion.appnt.errors
      ? this.fPrescripcion.appnt.errors.required
      : false;
    let aux4 = this.fPrescripcion.visit.errors
      ? this.fPrescripcion.visit.errors.required
      : false;
    let aux5 = this.fPrescripcion.idPatient.errors
      ? this.fPrescripcion.idPatient.errors.minlength
      : false;
    let aux6 = this.fPrescripcion.patientName.errors
      ? this.fPrescripcion.patientName.errors.required
      : false;
    let aux7 = this.fPrescripcion.patientAge.errors
      ? this.fPrescripcion.patientAge.errors.required
      : false;
    let aux8 = this.fPrescripcion.patientGender.errors
      ? this.fPrescripcion.patientGender.errors.required
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
    this.registroPrescripcion.reset();
  }

}
