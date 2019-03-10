import { Observable, of } from "rxjs";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AvaliacaoFisica, ComposicaoCorporal, MedidasAntropometricas, Medidas } from "../models/avaliacao-fisica.model";
import { isNullOrUndefined } from "util";


@Injectable()
export class AvaliacaoFisicaService {

    avaliacaoFisica: AvaliacaoFisica;
    avaliacoesFisicas: AvaliacaoFisica[] = [];

    constructor(
        private http: HttpClient) { }

    criarAvaliacao(avaliacaoId: number, usuarioId: number) {
       this.avaliacaoFisica = {
            id: avaliacaoId,
            usuarioId: usuarioId
        }
        return this.avaliacaoFisica;
    }    

    obterAvaliacaoFisica(usuarioId: number, avaliacaoId: number): Observable<AvaliacaoFisica> {
        if (isNullOrUndefined(this.avaliacaoFisica) || this.avaliacaoFisica.id !== avaliacaoId) {
            return this.http.get<AvaliacaoFisica>(`${environment.apiBaseUrl}/api/avaliacaoFisica/${usuarioId}/${avaliacaoId}`)
                .pipe(
                    map((resp) => {
                        this.avaliacaoFisica = resp[0];
                        return this.avaliacaoFisica;
                    })
                );

        } else {
            return of(this.avaliacaoFisica);
        }
    }

    obterAvaliacoesFisicas(usuarioId: number): Observable<AvaliacaoFisica[]> {
        return this.http.get<AvaliacaoFisica[]>(`${environment.apiBaseUrl}/api/avaliacaoFisica/${usuarioId}`)
            .pipe(
                map((resp) => {
                    this.avaliacoesFisicas = resp;
                    return this.avaliacoesFisicas;
                })
            );
    }

    adicionarComposicaoCorporal(comCorp: ComposicaoCorporal)
    {        
        this.avaliacaoFisica.composicaoCorporal = comCorp;
    }

    adicionarMedidasAntropometricas(medAntrop: MedidasAntropometricas)
    {
        this.avaliacaoFisica.medidasAntropometricas = medAntrop;
    }

    adicionarMedidas(medidas: Medidas)
    {
        this.avaliacaoFisica.medidas = medidas;
    }

    salvarAvaliacaoFisica(avaliacaoFisica: AvaliacaoFisica): Observable<any> {
        return this.http.post(`${environment.apiBaseUrl}/api/avaliacaoFisica`, avaliacaoFisica)
            .pipe(
                map((resp) => {
                    this.avaliacoesFisicas.push(avaliacaoFisica);
                    return this.avaliacoesFisicas;
                })
            );
    }

    excluirAvaliacaoFisica(avaliacaoFisicaId: number): Observable<any> {
        this.avaliacaoFisica = null;
        return this.http.delete(`${environment.apiBaseUrl}/api/avaliacaoFisica/${avaliacaoFisicaId}`)
            .pipe(
                map((resp) => {
                    let idx = this.avaliacoesFisicas.findIndex(a => { return a.id == avaliacaoFisicaId });
                    this.avaliacoesFisicas.splice(idx, 1);
                    return this.avaliacoesFisicas;
                })
            );
    }
}