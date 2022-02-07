import { InicioComponent } from './views/inicio/inicio.component';
import { ExcluirComponent } from './components/excluir/excluir.component';
import { VisualizarComponent } from './components/visualizar/visualizar.component';
import { EditarComponent } from './components/editar/editar.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { ListarComponent } from './components/listar/listar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'listar',
    component: ListarComponent
  },
  {
    path: 'cadastrar',
    component: CadastrarComponent
  },
  {
    path: 'editar/:id',
    component: EditarComponent
  },
  {
    path: 'visualizar/:id',
    component: VisualizarComponent
  },
  {
    path: 'excluir/:id',
    component: ExcluirComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
