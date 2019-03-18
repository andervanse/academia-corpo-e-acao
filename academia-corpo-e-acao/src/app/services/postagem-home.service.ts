import { PostagemHome } from "../models/postagem-home.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { isNullOrUndefined } from "util";
import { Observable, of } from "rxjs";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";

@Injectable()
export class PostagemHomeService {

    postagemHome: PostagemHome;
    postagensHome: PostagemHome[] = [];

    constructor(
        private http: HttpClient) { }  


    novaPostagem(usuarioId: number) :PostagemHome {
        let postagem = new PostagemHome();
        postagem.id = null;
        postagem.usuarioId = usuarioId;
        postagem.ordem = null;
        postagem.urlImagem = null;
        return postagem;
    }    

    obterPostagemHome(postagemHomeId: number): Observable<PostagemHome> {
        if (isNullOrUndefined(this.postagemHome) || this.postagemHome.id !== postagemHomeId) {
            return this.http.get<PostagemHome>(`${environment.apiBaseUrl}/api/postagemhome/${postagemHomeId}`)
                .pipe(
                    map((resp) => {
                        this.postagemHome = resp[0];
                        return this.postagemHome;
                    })
                );

        } else {
            return of(this.postagemHome);
        }
    }

    obterPostagensHome(): Observable<PostagemHome[]> {
        return this.http.get<PostagemHome[]>(`${environment.apiBaseUrl}/api/postagemhome`)
            .pipe(
                map((resp) => {
                    this.postagensHome = resp.sort((a, b) => {
                        if (a.ordem > b.ordem) {
                          return 1;
                        } else if (a.ordem < b.ordem) {
                            return -1;
                        } else {
                            return 0;
                        }
                    } );

                    return this.postagensHome;
                })
            );
    }

    
    salvarPostagemHome(PostagemHome: PostagemHome): Observable<any> {
        return this.http.post(`${environment.apiBaseUrl}/api/postagemhome`, PostagemHome)
            .pipe(
                map((resp) => {
                    this.postagensHome.push(PostagemHome);
                    return this.postagensHome;
                })
            );
    }

    excluirPostagemHome(PostagemHomeId: number): Observable<any> {
        this.postagemHome = null;
        return this.http.delete(`${environment.apiBaseUrl}/api/postagemhome/${PostagemHomeId}`)
            .pipe(
                map((resp) => {
                    let idx = this.postagensHome.findIndex(a => { return a.id == PostagemHomeId });
                    this.postagensHome.splice(idx, 1);
                    return this.postagensHome;
                })
            );
    }

    deleteImagem(keyName: string): Observable<any> {
        return this.http.delete<any>(`${environment.apiBaseUrl}/api/uploadFile/${keyName}`)
          .pipe(
            map((resp) => {
              return resp;
            })
          );
    } 

    uploadImagem(file: any): Observable<any> {
        return this.http.post<any>(`${environment.apiBaseUrl}/api/uploadFile`, file)
          .pipe(
            map((resp) => {
              return resp;
            })
          );
    }   
}