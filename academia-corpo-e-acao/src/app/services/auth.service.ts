import { isUndefined } from "util";
import { Observable } from "rxjs";
import { LoginCredentials, Usuario } from "../models/login-credentials.model";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";
import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class AuthService {

    usuario : Usuario = null; 

    constructor(private http: HttpClient) { }

    onAuthenticating: EventEmitter<boolean> = new EventEmitter();

    private getHeaders(): HttpHeaders {
        return new HttpHeaders().append('Access-Control-Allow-Origin', environment.baseUrl)
                                .append('Content-type', 'application/json');
    }
    
    obterUsuario() :Usuario {
        return { id:'', nome: localStorage.getItem('usuario') }
    }

    autenticar(credentials: LoginCredentials): Observable<Usuario> {

        return this.http.post<Usuario>(`${environment.apiBaseUrl}api/auth`, credentials, { headers: this.getHeaders() })
            .pipe(
                map((resp) => {
                    localStorage.setItem('token', resp['token']);
                    localStorage.setItem('usuario', JSON.stringify(resp['usuario']));
                    let user = new Usuario();
                    user.id = resp['usuario']['id'];
                    user.nome = resp['usuario']['nome'];
                    return user;                     
                })
            );
    }

    private parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(window.atob(base64));
    };

    confirmarEmail(email: string, id: string): Observable<any> {
        return this.http.get<string>(`${environment.apiBaseUrl}api/auth/${email}/${id}`, {
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

    public getUser() {
        let userstr = JSON.parse(localStorage.getItem('usuario'));
        let user = new Usuario();
        user.id = userstr['id'];
        user.nome = userstr['nome'];
        return user;
    }

    public logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
    } 

}