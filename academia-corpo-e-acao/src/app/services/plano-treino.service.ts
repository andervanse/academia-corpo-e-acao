import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PlanoTreino } from "../models/login-credentials.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";


@Injectable()
export class PlanoTreinoService {

    constructor(private http: HttpClient){}

    obterUltimoPlanoTreino(): Observable<PlanoTreino[]> {
        return this.http.get<PlanoTreino[]>(`${environment.ApiBaseUrl}assets/treinos.json`);
    }
}