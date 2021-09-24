import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  showError: any = {};
  errorMsg: string = '';

  constructor(private auth: AuthService, private router: Router) {
    /*     this.login = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    }); */
    this.login = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit() {}

  logUser() {
    /*     if (this.catchUserErrors()) {
      let errorMsg =
        "Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo";
      this.openError(errorMsg);
    } else {
      var data = this.login.value;
      this.auth.login(data).subscribe((logData: any) => {
        if (!logData.status) {
          let errorMsg = logData.msg;
          this.openError(errorMsg);
        } else {
          this.auth.storeData(logData);
        }
      });
    } */
    let logData = {
      token: 'kmslñkmasdfa',
      status: true,
    };
    this.auth.storeData(logData);
    console.log('login data')
    this.router.navigateByUrl('/doctores/registro')
  }

  get fLogin() {
    return this.login.controls;
  }

  flush() {
    this.login.setValue({
      username: '',
      password: '',
    });
  }
  registro() {
    this.router.navigateByUrl('/registro');
  }
  catchUserErrors() {
    let aux1 = this.fLogin.username.errors
      ? this.fLogin.username.errors.required
      : false;
    let aux2 = this.fLogin.password.errors
      ? this.fLogin.password.errors.required
      : false;
    let error = aux1 || aux2;
    return error;
  }
  openError(msg: any) {
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
}
