import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../models/usuario.model";
import { PlanoTreino } from "../models/plano-treino.models";


@Injectable()
export class PlanoTreinoService {

    constructor(
        private http: HttpClient){}

    obterUltimoPlanoTreino(usuario :Usuario): Observable<PlanoTreino> {

        return this.http.get<PlanoTreino>(`${environment.apiBaseUrl}/api/planoTreino/${usuario.id}`)
        .pipe(
            map((resp) => {
                return resp;
            })
        );         
    }

    salvarPlanoTreino(planoTreino :PlanoTreino): Observable<any> {
        return this.http.post(`${environment.apiBaseUrl}/api/planoTreino`, planoTreino);
    }    
}