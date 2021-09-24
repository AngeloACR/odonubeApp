import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaMedicaComponent } from './baja-medica.component';

describe('BajaMedicaComponent', () => {
  let component: BajaMedicaComponent;
  let fixture: ComponentFixture<BajaMedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaMedicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
