import { Component, OnInit } from '@angular/core';
import { DatosRealidad } from 'src/app/interfaces/datos-realidad.interface';
import { PrioridadesyNecesidad } from '../../../interfaces/prioridadynecesidad.interface';

@Component({
  selector: 'app-prioridades-necesidades',
  templateUrl: './prioridades-necesidades.component.html',
  styleUrls: ['./prioridades-necesidades.component.css'],
})
export class PrioridadesNecesidadesComponent implements OnInit {
  prioridades: PrioridadesyNecesidad[] = [
    {
      titulo: 'prioridadesynecesidades.title1',
      dato: 'prioridadesynecesidades.content1',
      urlImg: '../../../../assets/images/humanizar.webp',
    },
    {
      titulo: 'prioridadesynecesidades.title2',
      dato: 'prioridadesynecesidades.content2',
      urlImg: '../../../../assets/images/ayudaEspiritual.jpeg',
    },
    {
      titulo: 'prioridadesynecesidades.title3',
      dato: 'prioridadesynecesidades.content3',
      urlImg: '../../../../assets/images/ayudapsicologia.jpeg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
