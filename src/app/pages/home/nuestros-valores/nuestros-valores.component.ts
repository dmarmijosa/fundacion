import { Component, OnInit } from '@angular/core';
import { ImagenesIterfaces } from 'src/app/interfaces/imagenes-valores.interface';

@Component({
  selector: 'app-nuestros-valores',
  templateUrl: './nuestros-valores.component.html',
  styleUrls: ['./nuestros-valores.component.css'],
})
export class NuestrosValoresComponent implements OnInit {
  imagenes: ImagenesIterfaces[] = [
    {
      src: '../../../../assets/images/visitas-en-carceles-scaled.jpeg',
      nombre: 'nuestros-valores.valor1',
    },
    {
      src: '.../../../../assets/images/carcel-horrores-becker.jpg',
      nombre: 'nuestros-valores.valor2',
    },
    {
      src: '../../../../assets/images/resizer.jpeg',
      nombre: 'nuestros-valores.valor3',
    },
    {
      src: '../../../../assets/images/f.elconfidencial.com_original_c57_876_15f_c5787615f76dea372669feed96cb391f.jpg',
      nombre: 'nuestros-valores.valor4',
    },
    {
      src: '../../../../assets/images/DSC_0219-1.jpg',
      nombre: 'nuestros-valores.valor5',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
