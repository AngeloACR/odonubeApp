import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {
  localSource = 'http://localhost:6800';
  productionSource = 'https://dashboard.odonube.com/api';

  //mySource = this.localSource;
  mySource = this.productionSource;

  constructor(private http: HttpClient) {}

  create(data: any) {

    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //let endpoint = "/inquiry";
    let endpoint = '/pacientes/';
    var address = this.mySource;
    address = address + endpoint;
    let body = data;
    return new Promise((resolve, reject) => {
      this.http.post(address, body, { headers: headers }).subscribe(
        (data: any) => {
          resolve(data);
        },
        (error: any) => {
          reject(new Error(error.error.message));
        }
      );
    });
  }
  update() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //let endpoint = "/inquiry";
    let endpoint = '/pacientes/';
    var address = this.mySource;
    address = address + endpoint;
    let body = {};
    return new Promise((resolve, reject) => {
      this.http.put(address, body, { headers: headers }).subscribe(
        (data: any) => {
          resolve(data);
        },
        (error: any) => {
          reject(new Error(error.error.message));
        }
      );
    });
  }
  getOne() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //let endpoint = "/inquiry";
    let endpoint = '/pacientes/';
    var address = this.mySource;
    address = address + endpoint;
    let body = {};
    return new Promise((resolve, reject) => {
      this.http
        .get(address, {
          params: {},
          headers: headers,
        })
        .subscribe(
          (data: any) => {
            resolve(data);
          },
          (error: any) => {
            reject(new Error(error.error.message));
          }
        );
    });
  }
  getAll() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //let endpoint = "/inquiry";
    let endpoint = '/pacientes/all';
    var address = this.mySource;
    address = address + endpoint;
    let body = {};
    return new Promise((resolve, reject) => {
      this.http
        .get(address, {
          params: {},
          headers: headers,
        })
        .subscribe(
          (data: any) => {
            resolve(data);
          },
          (error: any) => {
            reject(new Error(error.error.message));
          }
        );
    });
  }
  deleteOne() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //let endpoint = "/inquiry";
    let endpoint = '/pacientes/';
    var address = this.mySource;
    address = address + endpoint;
    let body = {};
    return new Promise((resolve, reject) => {
      this.http
        .delete(address, {
          params: {},
          headers: headers,
        })
        .subscribe(
          (data: any) => {
            resolve(data);
          },
          (error: any) => {
            reject(new Error(error.error.message));
          }
        );
    });
  }
  deleteAll() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    //let endpoint = "/inquiry";
    let endpoint = '/pacientes/all';
    var address = this.mySource;
    address = address + endpoint;
    let body = {};
    return new Promise((resolve, reject) => {
      this.http
        .delete(address, {
          params: {},
          headers: headers,
        })
        .subscribe(
          (data: any) => {
            resolve(data);
          },
          (error: any) => {
            reject(new Error(error.error.message));
          }
        );
    });
  }
}
