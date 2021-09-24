import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVuchersComponent } from './registro-vuchers.component';

describe('RegistroVuchersComponent', () => {
  let component: RegistroVuchersComponent;
  let fixture: ComponentFixture<RegistroVuchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroVuchersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroVuchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
