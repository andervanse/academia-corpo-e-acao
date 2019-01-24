import { Injectable, EventEmitter } from "@angular/core";
import { isUndefined } from "util";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { LoginCredentials, Usuario } from "../models/login-credentials.model";
import { environment } from "../../environments/environment";
import { of } from "rxjs/observable/of";

@Injectable()
export class AuthService {

    usuario : Usuario = null;

    constructor(private http: HttpClient) { }

    onAuthenticating: EventEmitter<boolean> = new EventEmitter();

    private getHeaders(): HttpHeaders {
        return new HttpHeaders().append('Access-Control-Allow-Origin', environment.ApiBaseUrl);
    }
    
    getUsuario() :Usuario {
        return this.usuario
    }
    autenticar(login: LoginCredentials): Observable<any> {
            if (login.login === 'teste123' && login.password === 'teste123') { 
                localStorage.setItem("token", 'fakeToken_teste123');
                this.usuario = { nome: login.login };
                return of(true);               
            } else {
               return  Observable.throw('failed');
            }

        /*
        return this.http.post<string>(`${environment.ApiBaseUrl}api/Auth`, login, {
            headers: this.getHeaders()
        }).pipe(
            map((resp) => {
                this.logout();
                const token = resp.toString();

                if (token !== null && !isUndefined(token)) {
                    localStorage.setItem("token", token);
                    this.onAuthenticating.emit(true);
                }
                this.authenticate(token);
                return resp;
            }, (error) => {
                return error[0];
            })
        );*/
    }

    confirmarEmail(email: string, id: string): Observable<any> {
        return this.http.get<string>(`${environment.ApiBaseUrl}api/Auth/${email}/${id}`, {
            headers: this.getHeaders()
        });
    }

    public authenticate(token: string) {
        this.logout();

        if (token !== null && !isUndefined(token)) {
            localStorage.setItem("token", token);
            this.onAuthenticating.emit(true);
        }
    }


    public isAuthenticated(): boolean {
        const token = localStorage.getItem("token");
        return token !== null && !isUndefined(token);
    }

    public getToken() {
        return localStorage.getItem('token');
    }

    public logout() {
        localStorage.removeItem("token");
    } 

}