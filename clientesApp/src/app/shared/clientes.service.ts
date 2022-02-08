import { Cliente } from './interfaces/ICliente';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  readonly url: string = 'https://localhost:7069/api'

  constructor(private http: HttpClient) { }

  listarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.url}/cliente`)
      .pipe(
        retry(2),
        catchError(this.manipulaErro)
      );
  }

  cadastrarClientes(nome: string, sobrenome: string, cpf: string, dataNascimento: string, idade: number, profissao: string, sucesso: any) {
    return this.http.post<Cliente>(`${this.url}/cliente`,
      { id: '', nome, sobrenome, cpf, dataNascimento, idade, profissao }
    ).subscribe(
      dados => dados,
      respostaRequisicao => {
        if (respostaRequisicao.status == 200) {
          sucesso;
        }
      },
    );
  };

  buscarPeloId(id: string): Observable<Cliente> {
    const urlNova = `${this.url}/cliente/${id}`;
    return this.http.get<Cliente>(urlNova);
  }

  editar(cliente: Cliente): Observable<Cliente> {
    const urlNova = `${this.url}/cliente`;
    return this.http.put<Cliente>(urlNova, cliente)
  }

  excluir(id: string): Observable<Cliente> {
    const urlNova = `${this.url}/cliente/${id}`;
    return this.http.delete<Cliente>(urlNova).pipe(
      retry(2),
      catchError(this.manipulaErro)
    );
  }

  manipulaErro(error: HttpErrorResponse) {
    let mensagemErro = '';
    if (error.error instanceof ErrorEvent) {
      mensagemErro = error.error.message;
    } else {
      mensagemErro = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    return throwError(mensagemErro);
  };
}
