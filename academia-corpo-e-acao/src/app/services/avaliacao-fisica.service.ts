import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AvaliacaoFisica } from "../models/avaliacao-fisica.model";


@Injectable()
export class AvaliacaoFisicaService {

    constructor(
        private http: HttpClient) { }

    obterAvaliacaoFisica(usuarioId: number, avaliacaoId: number): Observable<AvaliacaoFisica> {
        return this.http.get<AvaliacaoFisica>(`${environment.apiBaseUrl}/api/avaliacaoFisica/${usuarioId}/${avaliacaoId}`)
            .pipe(
                map((resp) => {
                    return resp[0];
                })
            );
    }

    obterAvaliacoesFisicas(usuarioId: number): Observable<AvaliacaoFisica[]> {
        return this.http.get<AvaliacaoFisica[]>(`${environment.apiBaseUrl}/api/avaliacaoFisica/${usuarioId}`)
            .pipe(
                map((resp) => {
                    return resp;
                })
            );
    }

    salvarAvaliacaoFisica(avaliacaoFisica: AvaliacaoFisica): Observable<any> {
        return this.http.post(`${environment.apiBaseUrl}/api/avaliacaoFisica`, avaliacaoFisica);
    }

    excluirAvaliacaoFisica(avaliacaoFisicaId: number): Observable<any> {
        return this.http.delete(`${environment.apiBaseUrl}/api/avaliacaoFisica/${avaliacaoFisicaId}`);
    }    
}