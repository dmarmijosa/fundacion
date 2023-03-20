import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Rutas } from '../../interfaces/rutas.models.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() banderaIdioma = new EventEmitter<string>();
  bandera:boolean = false;

  idioma:string= 'Ingles';
  rutasApp: Rutas[] = [
    { nombre: 'rutas.rutaHome', ruta: '' },
    { nombre: 'rutas.rutaPrograms', ruta: 'app/programas' },
    { nombre: 'rutas.rutaAportes', ruta: 'app/aportes' },
    { nombre: 'rutas.rutaTestimonios', ruta: 'app/testimonios' },
    { nombre: 'rutas.rutatContactos', ruta: 'app/contactos' },
  ];
  constructor(
  ) {}

  ngOnInit(): void {}

  cambiar(){
    this.bandera ? this.idioma="Ingles" : this.idioma="Español";
    this.bandera = !this.bandera;

    this.banderaIdioma.emit(this.idioma);
  }


}
