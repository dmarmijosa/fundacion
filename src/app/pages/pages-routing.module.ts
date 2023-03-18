import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProgramsComponent } from './programs/programs.component';
import { AportesComponent } from './aportes/aportes.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { ContactosComponent } from './contactos/contactos.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'programas', component: ProgramsComponent},
  {path:'aportes', component: AportesComponent},
  {path:'testimonios', component: TestimoniosComponent},
  {path:'contactos', component: ContactosComponent},
  {
    path:'**', redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
