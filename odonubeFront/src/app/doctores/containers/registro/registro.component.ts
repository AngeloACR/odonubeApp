import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { DoctoresService } from '../../services/doctores.service';
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

  registroDoctor: FormGroup;

  showError: {};
  errorMsg: string;

  constructor(
    private auth: AuthService,
    private doctores: DoctoresService,
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
    this.registroDoctor = new FormGroup({
      speciality: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      qualification: new FormControl('', Validators.required),
      address: new FormControl('', [Validators.required]),
      date: new FormControl('', Validators.required),
    });
  }
  get fDoctor() {
    return this.registroDoctor.controls;
  }

  async endRegistro() {
    try {
      var aux = this.registroDoctor.value;
      let error;

      let doctor = {
        speciality: aux.speciality,
        name: aux.name,
        contact: aux.contact,
        qualification: aux.qualification,
        address: aux.address,
        date: aux.date,
      };

      error = this.catchDoctorErrors();
      if (error) {
        let errorMsg =
          'Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo';
        this.openError(errorMsg);
      } else {
        let response = await this.doctores.create(doctor);
        console.log(response);
        this.router.navigateByUrl("doctores/lista")
      }
    } catch (e: any) {
      this.openError(e.message);
    }
  }

  catchDoctorErrors() {
    let aux1 = this.fDoctor.name.errors
      ? this.fDoctor.name.errors.required
      : false;
    let aux2 = this.fDoctor.contact.errors
      ? this.fDoctor.contact.errors.required
      : false;
    let aux3 = this.fDoctor.speciality.errors
      ? this.fDoctor.speciality.errors.required
      : false;
    let aux4 = this.fDoctor.qualification.errors
      ? this.fDoctor.qualification.errors.required
      : false;
    let aux5 = this.fDoctor.date.errors
      ? this.fDoctor.date.errors.minlength
      : false;
    let aux6 = this.fDoctor.address.errors
      ? this.fDoctor.address.errors.required
      : false;
    let error = aux1 || aux2 || aux3 || aux4 || aux5 || aux6;
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
    this.registroDoctor.reset();
  }
}
