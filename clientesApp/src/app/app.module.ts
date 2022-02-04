import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { NavComponent } from './template/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListarComponent } from './components/listar/listar.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { ExcluirComponent } from './components/excluir/excluir.component';
import { EditarComponent } from './components/editar/editar.component';
import { VisualizarComponent } from './components/visualizar/visualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ListarComponent,
    CadastrarComponent,
    ExcluirComponent,
    EditarComponent,
    VisualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
