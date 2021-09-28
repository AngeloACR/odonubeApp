import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { PacientesService } from '../../services/pacientes.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  @Input()
  editMode: number;
  @Input()
  usuario: any;

  @Output()
  onData = new EventEmitter<any>();

  registroPaciente: FormGroup;

  showError: {};
  errorMsg: string;

  constructor(
    private auth: AuthService,
    private pacientes: PacientesService,
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
    this.registroPaciente = new FormGroup({
      name: new FormControl('', Validators.required),
      parentsNames: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      occupation: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      reference: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      photoPath: new FormControl('', Validators.required),
    });
  }
  get fPaciente() {
    return this.registroPaciente.controls;
  }

  async endRegistro() {
    var aux = this.registroPaciente.value;
    let error;

    let paciente = {
      name: aux.name,
      parentsNames: aux.parentsNames,
      gender: aux.gender,
      age: aux.age,
      occupation: aux.occupation,
      address: aux.address,
      contact: aux.contact,
      reference: aux.reference,
      date: aux.date,
      photoPath: aux.photoPath,
    };
    error = this.catchPacienteErrors();
    if (error) {
      let errorMsg =
        'Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo';
      this.openError(errorMsg);
    } else {
      let response = await this.pacientes.create(paciente);
      console.log(response);
      this.router.navigateByUrl("pacientes/lista")
    }
  }

  catchPacienteErrors() {
    let aux1 = this.fPaciente.name.errors
      ? this.fPaciente.name.errors.required
      : false;
    let aux2 = this.fPaciente.parentsNames.errors
      ? this.fPaciente.parentsNames.errors.required
      : false;
    let aux3 = this.fPaciente.gender.errors
      ? this.fPaciente.gender.errors.required
      : false;
    let aux4 = this.fPaciente.age.errors
      ? this.fPaciente.age.errors.required
      : false;
    let aux5 = this.fPaciente.occupation.errors
      ? this.fPaciente.occupation.errors.minlength
      : false;
    let aux6 = this.fPaciente.address.errors
      ? this.fPaciente.address.errors.required
      : false;
    let aux7 = this.fPaciente.contact.errors
      ? this.fPaciente.contact.errors.required
      : false;
    let aux8 = this.fPaciente.reference.errors
      ? this.fPaciente.reference.errors.required
      : false;
    let aux9 = this.fPaciente.date.errors
      ? this.fPaciente.date.errors.required
      : false;
    let aux10 = this.fPaciente.photoPath.errors
      ? this.fPaciente.photoPath.errors.required
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
      aux9 //|| aux10;
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
    this.registroPaciente.reset();
  }
}
