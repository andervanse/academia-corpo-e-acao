import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PlanoTreino, Usuario } from "../models/login-credentials.model";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators/map";


@Injectable()
export class PlanoTreinoService {

    constructor(private http: HttpClient){}

    obterUsuarios(nome :string): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${environment.ApiBaseUrl}assets/usuarios.json`)
        .pipe(
            map((resp) => {
                let usersFound = (<Usuario[]>resp).filter((usr) => {
                    console.log(usr);
                    return usr['login'].indexOf(nome) > -1 && !usr['is-admin']
                });

                return usersFound;
            })
        );        
    }

    obterUltimoPlanoTreino(treinoId :string): Observable<PlanoTreino[]> {
        return this.http.get<PlanoTreino[]>(`${environment.ApiBaseUrl}assets/treinos.json`)
        .pipe(
            map((resp) => {
                console.log(resp);
                let itemFound = (<PlanoTreino[]>resp).filter((treino) => {
                    return treino.id === treinoId;
                });

                return itemFound;
            })
        );         
    }

    salvarPlanoTreino(planoTreino :PlanoTreino): Observable<any> {
        return this.http.put(`${environment.ApiBaseUrl}assets/treinos.json`, planoTreino);
    }    
}