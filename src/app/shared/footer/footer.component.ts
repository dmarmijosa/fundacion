import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Rutas } from 'src/app/interfaces/rutas.models.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  anioActual = new Date().getFullYear();


  constructor(
  ) {}

  ngOnInit(): void {}



}
