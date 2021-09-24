import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPrescripcionesComponent } from './registro-prescripciones.component';

describe('RegistroPrescripcionesComponent', () => {
  let component: RegistroPrescripcionesComponent;
  let fixture: ComponentFixture<RegistroPrescripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroPrescripcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPrescripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
