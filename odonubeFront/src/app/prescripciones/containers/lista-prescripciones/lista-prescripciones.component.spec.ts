import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPrescripcionesComponent } from './lista-prescripciones.component';

describe('ListaPrescripcionesComponent', () => {
  let component: ListaPrescripcionesComponent;
  let fixture: ComponentFixture<ListaPrescripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPrescripcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPrescripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
