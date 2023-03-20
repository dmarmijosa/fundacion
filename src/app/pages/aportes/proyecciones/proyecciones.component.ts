import { Component, OnInit } from '@angular/core';
import { Proyecciones } from 'src/app/interfaces/proyecciones.interface';

@Component({
  selector: 'app-proyecciones',
  templateUrl: './proyecciones.component.html',
  styleUrls: ['./proyecciones.component.css'],
})
export class ProyeccionesComponent implements OnInit {
  proyecciones: Proyecciones[] = [
    {
      titulo: 'proyeccionesinfo.titulo1',
      dato: 'proyeccionesinfo.dato1',
    },
    {
      titulo: 'proyeccionesinfo.titulo2',
      dato: 'proyeccionesinfo.dato2',
    },
    {
      titulo: 'proyeccionesinfo.titulo3',
      dato: 'proyeccionesinfo.dato3',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
