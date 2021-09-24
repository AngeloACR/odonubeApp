import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVisitasComponent } from './registro-visitas.component';

describe('RegistroVisitasComponent', () => {
  let component: RegistroVisitasComponent;
  let fixture: ComponentFixture<RegistroVisitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroVisitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroVisitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
