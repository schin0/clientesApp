import { Router } from '@angular/router';
import { MensagemService } from './../../shared/mensagem/mensagem.service';
import { Cliente } from './../../shared/interfaces/ICliente';
import { ClientesService } from './../../shared/clientes.service';
import { HeaderService } from './../../shared/header/header.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  objValues: Cliente = {
    "nome": '',
    "sobrenome": '',
    "cpf": '',
    "dataNascimento": '',
    "idade": 0,
    "profissao": ''
  }

  constructor(private headerService: HeaderService,
    private clientesService: ClientesService,
    private mensageService: MensagemService,
    private router: Router) {
    headerService.headerData = {
      title: "Cadastrar",
      icon: "add",
      routeUrl: "/cadastrar"
    }
  }

  ngOnInit(): void {
  }

  campoVazio(): void {
    let verificacao;
    if (this.objValues.nome == '' ||
      this.objValues.sobrenome == '' ||
      this.objValues.cpf == '' ||
      this.objValues.dataNascimento == '' ||
      this.objValues.profissao == '') {
      verificacao = true;
    } else {
      verificacao = false;
    }
    this.verificarDados(verificacao);
  };

  verificarDados(verificacao: boolean): void {
    if (verificacao) {
      this.alertaCadastroSucesso();
    } else {
      let stringData = this.objValues.dataNascimento;
      this.calcularIdade(stringData);
    }
  }

  alertaCadastroSucesso(): void {
    this.mensageService.mostrar('Preencha todos os dados obrigatórios!', true);
  };

  calcularIdade(stringData: string) {
    moment.locale('pt-br');
    let dataFormatada = moment(stringData).format('L');;

    let hoje = new Date();
    var dataNascimento = new Date(stringData);
    var idade = hoje.getFullYear() - dataNascimento.getFullYear();
    var m = hoje.getMonth() - dataNascimento.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < dataNascimento.getDate())) {
      idade--;
    }
    if (idade <= 0) {
      this.mensageService.mostrar('Insira uma data válida!', true);
    } else {
      this.objValues.idade = idade;
      this.objValues.dataNascimento = dataFormatada;
      this.cadastrarCliente();
    }
  }

  cadastrarCliente(): void {
    this.clientesService.cadastrarClientes(
      this.objValues.nome,
      this.objValues.sobrenome,
      this.objValues.cpf,
      this.objValues.dataNascimento,
      this.objValues.idade,
      this.objValues.profissao,
      this.mensageService.mostrar('Cliente cadastrado com sucesso!')
    );
    this.limpar();
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1500);
  }

  limpar(): void {
    this.objValues = {
      "nome": '',
      "sobrenome": '',
      "cpf": '',
      "dataNascimento": '',
      "idade": 0,
      "profissao": ''
    }
  }

  cancelar(): void {
    this.router.navigate(['/']);
    this.limpar();
  }
}