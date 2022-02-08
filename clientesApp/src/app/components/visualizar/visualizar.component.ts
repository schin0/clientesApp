import { Router, ActivatedRoute } from '@angular/router';
import { ClientesService } from './../../shared/clientes.service';
import { MensagemService } from './../../shared/mensagem/mensagem.service';
import { Cliente } from './../../shared/interfaces/ICliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.scss']
})
export class VisualizarComponent implements OnInit {
  objValues: Cliente = {
    "nome": '',
    "sobrenome": '',
    "cpf": '',
    "dataNascimento": '',
    "idade": 0,
    "profissao": ''
  }
  constructor(private clienteService: ClientesService, private router: Router,
    private route: ActivatedRoute, private mensagem: MensagemService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.clienteService.buscarPeloId(id).subscribe(dados => {
      this.objValues = dados;
    });
  }

}
