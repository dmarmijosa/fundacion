import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosRealidadComponent } from './datos-realidad.component';

describe('DatosRealidadComponent', () => {
  let component: DatosRealidadComponent;
  let fixture: ComponentFixture<DatosRealidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosRealidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosRealidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
