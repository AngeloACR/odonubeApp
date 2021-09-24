import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVuchersComponent } from './lista-vuchers.component';

describe('ListaVuchersComponent', () => {
  let component: ListaVuchersComponent;
  let fixture: ComponentFixture<ListaVuchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaVuchersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVuchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
