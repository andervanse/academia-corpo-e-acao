import { Injectable, EventEmitter } from "@angular/core";
import { isUndefined } from "util";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { LoginCredentials, Usuario } from "../models/login-credentials.model";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators/map";

@Injectable()
export class AuthService {

    usuario : Usuario = null;

    constructor(private http: HttpClient) { }

    onAuthenticating: EventEmitter<boolean> = new EventEmitter();

    private getHeaders(): HttpHeaders {
        return new HttpHeaders().append('Access-Control-Allow-Origin', environment.ApiBaseUrl);
    }
    
    obterUsuario() :Usuario {
        return { id:'', nome: localStorage.getItem('usuario') }
    }

    autenticar(login: LoginCredentials): Observable<Usuario> {

        return this.http.get<Usuario[]>(`${environment.ApiBaseUrl}assets/usuarios.json`)
            .pipe(
                map((resp) => {
                    let user = null;
                    let userFound = false;
                    let users = Object.keys(resp).map(i => resp[i]);
                    
                    for (var i = 0; i < users.length; i++) {
                        if (resp[i].password === login.password) {
                            user = resp[i];
                            userFound = true;
                            localStorage.setItem('token', 'fakeToken_teste123');
                            localStorage.setItem('usuario', resp[i].nome);
                        }
                    }
                    
                    if (!userFound) {                        
                        throw new Error('Usuário ou senha inválidos');
                    } else {
                       return user;
                    }
                })
            );
    }

    confirmarEmail(email: string, id: string): Observable<any> {
        return this.http.get<string>(`${environment.ApiBaseUrl}api/Auth/${email}/${id}`, {
            headers: this.getHeaders()
        });
    }

    public authenticate(token: string) {
        this.logout();

        if (token !== null && !isUndefined(token)) {
            localStorage.setItem('token', token);
            this.onAuthenticating.emit(true);
        }
    }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        return token !== null && !isUndefined(token);
    }

    public isAdmin(): boolean {
        let user = this.obterUsuario();
        return this.isAuthenticated() && user.nome == "administrador";
    }    

    public getToken() {
        return localStorage.getItem('token');
    }

    public logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
    } 

}