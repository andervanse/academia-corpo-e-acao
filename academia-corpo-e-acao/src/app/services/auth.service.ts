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
        let usuario = JSON.parse(localStorage.getItem('usuario'));
        
        if (usuario == null || usuario == undefined) {
            return null;
        } else {
            return {
                id: usuario['id'],
                nome: usuario['nome'],
                administrador: usuario['administrador'] || false
            }
        }
    }

    autenticar(credentials: LoginCredentials): Observable<Usuario> {

        return this.http.post<Usuario>(`${environment.apiBaseUrl}/api/auth`, credentials, { headers: this.getHeaders() })
            .pipe(
                map((resp) => {
                    localStorage.setItem('token', resp['token']);
                    localStorage.setItem('usuario', JSON.stringify(resp['usuario']));
                    let user = new Usuario();
                    user.id = resp['usuario']['id'];
                    user.nome = resp['usuario']['nome'];
                    user.administrador = resp['usuario']['administrador'];
                    return user;                     
                })
            );
    }

    confirmarEmail(email: string, id: string): Observable<any> {
        return this.http.get<string>(`${environment.apiBaseUrl}/api/auth/${email}/${id}`, {
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

    parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(window.atob(base64));
    };

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
               
        if (token !== null){
            
            let decodedToken = this.parseJwt(token);
            
            if (decodedToken.exp < Date.now() / 1000) {
                localStorage.clear();
                return false;
            }
        }

        return token !== null && !isUndefined(token);
    }

    public isAdmin(): boolean {
        let user = this.obterUsuario();
        return this.isAuthenticated() && user.administrador;
    }    

    public getToken() {
        return localStorage.getItem('token');
    }

    public logout() {
        localStorage.clear();
    } 

}