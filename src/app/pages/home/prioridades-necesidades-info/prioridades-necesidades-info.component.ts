import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prioridades-necesidades-info',
  templateUrl: './prioridades-necesidades-info.component.html',
  styleUrls: ['./prioridades-necesidades-info.component.css'],
})
export class PrioridadesNecesidadesInfoComponent implements OnInit {
  titulo: string = 'fundamentos';

  fundamentos: string[] = [
    'fundamentosDoctrinales.dato1',
    'fundamentosDoctrinales.dato2',
    'fundamentosDoctrinales.dato3',
    'fundamentosDoctrinales.dato4',
    'fundamentosDoctrinales.dato5',
    'fundamentosDoctrinales.dato6'
  ];

  constructor() {}

  ngOnInit(): void {}
}
