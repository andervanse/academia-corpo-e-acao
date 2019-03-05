import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PlanoTreino } from "../models/plano-treino.models";
import { isNullOrUndefined } from "util";


@Injectable()
export class PlanoTreinoService {

    private planoTreinos :PlanoTreino[];
    
    constructor(private http: HttpClient) { }

    obterUltimoPlanoTreino(usuarioId: number): Observable<PlanoTreino> {
        return this.http.get<PlanoTreino>(`${environment.apiBaseUrl}/api/planoTreino/usuario/${usuarioId}`)
            .pipe(
                map((resp) => {

                    if (!isNullOrUndefined(resp.gruposMusculares)) {
                        let i, sortedArr = [];

                        for (i = 0; i < resp.gruposMusculares.length; i++) {
                            sortedArr = resp.gruposMusculares[i].exercicios.sort((a, b) => {
                                return a.ordem - b.ordem;
                            });
                            resp.gruposMusculares[i].exercicios = sortedArr;
                        }
                    }

                    return resp;
                })
            );
    }

    obterTemplatesPlanoTreino(): Observable<PlanoTreino[]> {
        return this.http.get<PlanoTreino[]>(`${environment.apiBaseUrl}/api/planoTreino/templates`)
            .pipe(
                map((resp) => {
                    return resp;
                })
            );
    }   

    obterTemplatePlanoTreino(planoTreinoId :number): Observable<PlanoTreino> {
        return this.http.get<PlanoTreino>(`${environment.apiBaseUrl}/api/planoTreino/templates/${planoTreinoId}`)
            .pipe(
                map((resp) => {
                    return resp;
                })
            );
    }     

    salvarPlanoTreino(planoTreino: PlanoTreino): Observable<any> {
        return this.http.post(`${environment.apiBaseUrl}/api/planoTreino`, planoTreino);
    }

    excluirPlanoTreino(planoTreinoId: number): Observable<any> {
        return this.http.delete(`${environment.apiBaseUrl}/api/planoTreino/${planoTreinoId}`);
    }    
}