import { Component, OnInit } from '@angular/core';
import { Programas } from 'src/app/interfaces/programs.interface';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css'],
})
export class ProgramsComponent implements OnInit {
  programas: Programas[] = [
    { nombre: 'programas.programa1', icono: 'fa fa-balance-scale-left' },
    { nombre: 'programas.programa2', icono: 'fa fa-church' },
    { nombre: 'programas.programa3', icono: 'fa fa-truck-medical' },
    { nombre: 'programas.programa4', icono: 'fa fa-users' },
    { nombre: 'programas.programa5', icono: 'fa fa-brain' },
    { nombre: 'programas.programa6', icono: "fa fa-home" }
  ];

  constructor() {}

  ngOnInit(): void {}
}
