import { Observable } from "rxjs";
import { PlanoTreino, Usuario } from "../models/login-credentials.model";
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
        return this.http.get<Usuario[]>(`${environment.apiBaseUrl}api/usuario`, { headers: this.getHeaders() })
        .pipe(
            map((resp) => {
                let usersFound = (<Usuario[]>resp).filter((usr) => {
                    return usr['login'].indexOf(nome) > -1 && !usr['is-admin']
                });
                return usersFound;
            })
        );        
    }

    obterUltimoPlanoTreino(treinoId :string): Observable<PlanoTreino[]> {
        return this.http.get<PlanoTreino[]>(`${environment.apiBaseUrl}api/grupoMuscular/${this.auth.getUser().id}`, { headers: this.getHeaders() })
        .pipe(
            map((resp) => {
                let itemFound = (<PlanoTreino[]>resp).filter((treino) => {
                    return treino.id === treinoId;
                });
                return itemFound;
            })
        );         
    }

    salvarPlanoTreino(planoTreino :PlanoTreino): Observable<any> {
        return this.http.put(`${environment.apiBaseUrl}api/grupoMuscular`, planoTreino, { headers: this.getHeaders() });
    }    
}