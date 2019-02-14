import { Observable } from "rxjs";
import { PlanoTreino, Usuario, GrupoMuscular } from "../models/login-credentials.model";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth.service";


@Injectable()
export class PlanoTreinoService {

    constructor(
        private http: HttpClient,
        private auth: AuthService){}

    private getHeaders():HttpHeaders {
        const token = this.auth.getToken();

        return new HttpHeaders()
                      .append('Content-type', 'application/json')
                      .append('Access-Control-Allow-Origin', environment.apiBaseUrl)
                      .append('Authorization', 'Bearer ' + token);
    }
    
    obterUsuarios(nome :string): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${environment.apiBaseUrl}api/usuario/${nome}`, { headers: this.getHeaders() })
        .pipe(
            map((resp) => {
                return resp;
            })
        );        
    }

    obterUltimoPlanoTreino(usuario :Usuario): Observable<PlanoTreino> {
        let user = this.auth.obterUsuario();
        console.log(user);
        return this.http.get<PlanoTreino>(`${environment.apiBaseUrl}api/planoTreino/${usuario.id}`, { headers: this.getHeaders() })
        .pipe(
            map((resp) => {
                return resp;
            })
        );         
    }

    salvarPlanoTreino(planoTreino :PlanoTreino): Observable<any> {
        return this.http.post(`${environment.apiBaseUrl}api/planoTreino`, planoTreino, { headers: this.getHeaders() });
    }    
}