import { Component, OnInit } from '@angular/core';
import  {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  correo= {
    nombre:"",
    mensaje:''
  }

  miFormulario!:FormGroup;

  constructor(private fb:FormBuilder, private translateService: TranslateService) { }

  ngOnInit(): void {
    this.miFormulario = this.fb.group({
      nombre: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }
  enviar(){
    if(!this.miFormulario.valid){
      Swal.fire(
        this.translateService.instant('alert.header'),
        this.translateService.instant('alert.content'),
        'error'
      );
    }else{
      const email:string="fund.confraternidadcarcelaria@yahoo.com"
      this.correo.nombre=this.miFormulario.controls['nombre'].value;
      
      this.correo.mensaje=this.miFormulario.controls['mensaje'].value;
      const mailto = `mailto:${email}?subject=${encodeURIComponent(this.correo.nombre)}&body=${encodeURIComponent(this.correo.mensaje)}`;
      window.open(mailto);
      Swal.fire(
        this.translateService.instant('alert.headerOk'),
        this.translateService.instant('alert.contenteOK'),
        'success'
      )
      this.miFormulario.reset();
    }
  }

}
