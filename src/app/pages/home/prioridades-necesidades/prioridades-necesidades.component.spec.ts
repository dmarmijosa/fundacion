import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioridadesNecesidadesComponent } from './prioridades-necesidades.component';

describe('PrioridadesNecesidadesComponent', () => {
  let component: PrioridadesNecesidadesComponent;
  let fixture: ComponentFixture<PrioridadesNecesidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrioridadesNecesidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrioridadesNecesidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
