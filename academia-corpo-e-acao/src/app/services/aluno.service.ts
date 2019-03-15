import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http: HttpClient) { }

  obterUsuarios(nome :string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.apiBaseUrl}/api/usuario/${nome}`)
    .pipe(
        map((resp) => {
            return resp;
        })
    );        
  }

  obterInfoUsuario(id :number): Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.apiBaseUrl}/api/usuario/${id}`)
    .pipe(
        map((resp) => {
            return resp;
        })
    );        
  }  

  salvarAluno(aluno: Usuario): Observable<any> {
    return this.http.post<any>(`${environment.apiBaseUrl}/api/usuario`, aluno)
      .pipe(
        map((resp) => {
          return resp;
        })
      );
  }  

  uploadFotoAluno(file: any): Observable<any> {
    const headers = new HttpHeaders().append("enctype", "multipart/form-data");

    return this.http.post<any>(`${environment.apiBaseUrl}/api/uploadFile`, file, {headers: headers, reportProgress: true, observe: 'events'})
      .pipe(
        map((resp) => {
          return resp;
        })
      );
  }    

}
