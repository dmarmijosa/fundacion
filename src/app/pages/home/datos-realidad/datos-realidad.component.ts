import { Component, OnInit } from '@angular/core';
import { DatosRealidad } from 'src/app/interfaces/datos-realidad.interface';

@Component({
  selector: 'app-datos-realidad',
  templateUrl: './datos-realidad.component.html',
  styleUrls: ['./datos-realidad.component.css'],
})
export class DatosRealidadComponent implements OnInit {
  datos: DatosRealidad[] = [
    {
      titulo: 'datos-realidad.title1',
      dato: 'datos-realidad.content1',
    },
    {
      titulo: 'datos-realidad.title2',
      dato: 'datos-realidad.content2',
    },
    {
      titulo: 'datos-realidad.title3',
      dato: 'datos-realidad.content3',
    },
    {
      titulo: 'datos-realidad.title4',
      dato: 'datos-realidad.content4',
    },
    {
      titulo: 'datos-realidad.title5',
      dato: 'datos-realidad.content5',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
