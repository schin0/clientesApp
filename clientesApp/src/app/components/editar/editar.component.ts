import { MensagemService } from './../../shared/mensagem/mensagem.service';
import { Cliente } from './../../shared/interfaces/ICliente';
import { ClientesService } from './../../shared/clientes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

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

  editarCliente(): void {
    this.clienteService.editar(this.objValues).subscribe(() => {
      this.mensagem.mostrar('Cliente atualizado com sucesso!');
      setTimeout(() => {
        this.router.navigate(['/listar']);
      }, 1500);
    })
  }

  cancel(): void {
    this.router.navigate(['/listar'])
  }
}
