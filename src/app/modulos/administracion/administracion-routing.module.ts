import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';

const routes: Routes = [
  {
    path: 'crear-persona',
    component: CrearPersonaComponent
  },
  {
    path: 'editar-persona',
    component: EditarPersonaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
