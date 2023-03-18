import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioridadesNecesidadesInfoComponent } from './prioridades-necesidades-info.component';

describe('PrioridadesNecesidadesInfoComponent', () => {
  let component: PrioridadesNecesidadesInfoComponent;
  let fixture: ComponentFixture<PrioridadesNecesidadesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrioridadesNecesidadesInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrioridadesNecesidadesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
