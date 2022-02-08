import { Cliente } from './../../shared/interfaces/ICliente';
import { MensagemService } from './../../shared/mensagem/mensagem.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientesService } from './../../shared/clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss']
})
export class ExcluirComponent implements OnInit {
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

  excluir(): void {
    this.clienteService.excluir(`${this.objValues.id}`).subscribe(() => {
      this.mensagem.mostrar('Cliente excluído com sucesso!');
      setTimeout(() => {
        this.router.navigate(['/listar']);
      }, 1500);
    })
  }

  cancel(): void {
    this.router.navigate(['/listar']);
  }

}
