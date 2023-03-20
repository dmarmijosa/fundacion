import { Component, OnInit } from '@angular/core';
import { Testimonios } from '../../interfaces/testimonios.interface';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css'],
})
export class TestimoniosComponent implements OnInit {
  testimonios: Testimonios[] = [
    {
      titulo: 'testimonios.testimonio1.testimonio',
      parrafo1: 'testimonios.testimonio1.p1',
      parrafo2: 'testimonios.testimonio1.p2',
      urlImg: '../../../assets/images/testimonio.jpg',
    },
    
    {
      titulo: 'testimonios.testimonio2.testimonio',
      parrafo1: 'testimonios.testimonio2.p1',
      parrafo2: 'testimonios.testimonio2.p2',
      urlImg: '../../../assets/images/carcelLoja.jpg',
    },
    {
      titulo: 'testimonios.testimonio3.testimonio',
      parrafo1: 'testimonios.testimonio3.p1',
      parrafo2: 'testimonios.testimonio3.p2',
      urlImg: '../../../assets/images/centroEvangelico.jpg',
    },

  ];

  constructor() {}

  ngOnInit(): void {}
}
