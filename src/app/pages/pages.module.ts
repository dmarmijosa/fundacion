import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ProgramsComponent } from './programs/programs.component';
import { AportesComponent } from './aportes/aportes.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { ContactosComponent } from './contactos/contactos.component';
import { MisionVisionComponent } from './home/mision-vision/mision-vision.component';
import { NuestrosValoresComponent } from './home/nuestros-valores/nuestros-valores.component';
import { DatosRealidadComponent } from './home/datos-realidad/datos-realidad.component';
import { PrioridadesNecesidadesComponent } from './home/prioridades-necesidades/prioridades-necesidades.component';
import { PrioridadesNecesidadesInfoComponent } from './home/prioridades-necesidades-info/prioridades-necesidades-info.component';
import { TranslateModule } from '@ngx-translate/core';
import { ProyeccionesComponent } from './aportes/proyecciones/proyecciones.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ProgramsComponent,
    AportesComponent,
    TestimoniosComponent,
    ContactosComponent,
    MisionVisionComponent,
    NuestrosValoresComponent,
    DatosRealidadComponent,
    PrioridadesNecesidadesComponent,
    PrioridadesNecesidadesInfoComponent,
    ProyeccionesComponent,
    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TranslateModule.forChild(), 
    ReactiveFormsModule
  ]
})
export class PagesModule { }
