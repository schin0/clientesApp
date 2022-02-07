import { Cliente } from './../../shared/interfaces/ICliente';
import { ClientesService } from './../../shared/clientes.service';
import { HeaderService } from './../../shared/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  clientes: Array<Cliente> = [];
  displayedColumns = ['nome', 'sobrenome', 'cpf', 'id', 'dataNascimento', 'idade', 'profissao', 'visualizar', 'editar', 'deletar'];

  constructor(private headerService: HeaderService,
    private clienteService: ClientesService) {
    headerService.headerData = {
      title: "Clientes",
      icon: "people",
      routeUrl: "/listar"
    }
  }

  ngOnInit(): void {
    this.clienteService.listarClientes().subscribe(clientes => this.clientes = clientes);
  }
}
