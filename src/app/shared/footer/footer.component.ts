import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Rutas } from 'src/app/interfaces/rutas.models.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Output() banderaIdioma = new EventEmitter<string>();
  bandera:boolean = false;

  idioma:string= 'Ingles';
  rutasApp: Rutas[] = [
    { nombre: 'rutas.rutaHome', ruta: '/' },
    { nombre: 'rutas.rutaPrograms', ruta: 'programas' },
    { nombre: 'rutas.rutaAportes', ruta: 'aportes' },
    { nombre: 'rutas.rutaTestimonios', ruta: 'testimonios' },
    { nombre: 'rutas.rutatContactos', ruta: 'contactos' },
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
