(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.center {\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div id=\"container\">\r\n    <div id=\"header\">\r\n        <app-menu></app-menu>\r\n    </div>\r\n\r\n    <div id=\"body\" [@routeAnimations]=\"prepareRoute(outlet)\">\r\n        <router-outlet #outlet=\"outlet\"></router-outlet>\r\n    </div>\r\n    \r\n    <br>\r\n    <div id=\"footer\">\r\n        <app-footer></app-footer>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_contato_contato_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contato/contato.component */ "./src/app/components/contato/contato.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _components_ficha_treino_ficha_treino_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/ficha-treino/ficha-treino.component */ "./src/app/components/ficha-treino/ficha-treino.component.ts");
/* harmony import */ var _components_logoff_logoff_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/logoff/logoff.component */ "./src/app/components/logoff/logoff.component.ts");
/* harmony import */ var _services_plano_treino_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/plano-treino.service */ "./src/app/services/plano-treino.service.ts");
/* harmony import */ var _components_ficha_treino_editar_editar_ficha_treino_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/ficha-treino/editar/editar-ficha-treino.component */ "./src/app/components/ficha-treino/editar/editar-ficha-treino.component.ts");
/* harmony import */ var _pipes_minimize_text_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/minimize-text.pipe */ "./src/app/pipes/minimize-text.pipe.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/usuario/usuario.component */ "./src/app/components/usuario/usuario.component.ts");
/* harmony import */ var _components_usuario_lista_usuario_lista_usuario_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/usuario/lista-usuario/lista-usuario.component */ "./src/app/components/usuario/lista-usuario/lista-usuario.component.ts");
/* harmony import */ var _components_usuario_cadastro_usuario_cadastro_usuario_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/usuario/cadastro-usuario/cadastro-usuario.component */ "./src/app/components/usuario/cadastro-usuario/cadastro-usuario.component.ts");
/* harmony import */ var _components_usuario_senha_usuario_senha_usuario_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/usuario/senha-usuario/senha-usuario.component */ "./src/app/components/usuario/senha-usuario/senha-usuario.component.ts");
/* harmony import */ var _services_aluno_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/aluno.service */ "./src/app/services/aluno.service.ts");
/* harmony import */ var _services_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/jwt-interceptor.service */ "./src/app/services/jwt-interceptor.service.ts");
/* harmony import */ var _services_error_interceptor_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/error-interceptor.service */ "./src/app/services/error-interceptor.service.ts");
/* harmony import */ var _components_usuario_info_usuario_info_usuario_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/usuario/info-usuario/info-usuario.component */ "./src/app/components/usuario/info-usuario/info-usuario.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'home', redirectTo: '' },
    { path: 'contato', component: _components_contato_contato_component__WEBPACK_IMPORTED_MODULE_10__["ContatoComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    { path: 'logoff', component: _components_logoff_logoff_component__WEBPACK_IMPORTED_MODULE_15__["LogoffComponent"] },
    { path: 'ficha-treino', component: _components_ficha_treino_ficha_treino_component__WEBPACK_IMPORTED_MODULE_14__["FichaTreinoComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]] },
    { path: 'ficha-treino/editar', component: _components_ficha_treino_editar_editar_ficha_treino_component__WEBPACK_IMPORTED_MODULE_17__["EditarFichaTreinoComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]] },
    { path: 'usuario', component: _components_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_21__["UsuarioComponent"], children: [
            { path: '', component: _components_usuario_lista_usuario_lista_usuario_component__WEBPACK_IMPORTED_MODULE_22__["ListaUsuarioComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]] },
            { path: 'info-usuario', component: _components_usuario_info_usuario_info_usuario_component__WEBPACK_IMPORTED_MODULE_28__["InfoUsuarioComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]] },
            { path: 'senha-usuario/:usuario', component: _components_usuario_senha_usuario_senha_usuario_component__WEBPACK_IMPORTED_MODULE_24__["SenhaUsuarioComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]] },
            { path: ':usuario', component: _components_usuario_cadastro_usuario_cadastro_usuario_component__WEBPACK_IMPORTED_MODULE_23__["CadastroUsuarioComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]] }
        ] },
    { path: '**', redirectTo: '' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pipes_minimize_text_pipe__WEBPACK_IMPORTED_MODULE_18__["MinimizeTextPipe"],
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _components_contato_contato_component__WEBPACK_IMPORTED_MODULE_10__["ContatoComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _components_ficha_treino_ficha_treino_component__WEBPACK_IMPORTED_MODULE_14__["FichaTreinoComponent"],
                _components_logoff_logoff_component__WEBPACK_IMPORTED_MODULE_15__["LogoffComponent"],
                _components_ficha_treino_editar_editar_ficha_treino_component__WEBPACK_IMPORTED_MODULE_17__["EditarFichaTreinoComponent"],
                _components_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_21__["UsuarioComponent"],
                _components_usuario_lista_usuario_lista_usuario_component__WEBPACK_IMPORTED_MODULE_22__["ListaUsuarioComponent"],
                _components_usuario_cadastro_usuario_cadastro_usuario_component__WEBPACK_IMPORTED_MODULE_23__["CadastroUsuarioComponent"],
                _components_usuario_senha_usuario_senha_usuario_component__WEBPACK_IMPORTED_MODULE_24__["SenhaUsuarioComponent"],
                _components_usuario_info_usuario_info_usuario_component__WEBPACK_IMPORTED_MODULE_28__["InfoUsuarioComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes, { useHash: true }),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_19__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].production })
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_26__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_error_interceptor_service__WEBPACK_IMPORTED_MODULE_27__["ErrorInterceptor"], multi: true },
                _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
                _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"],
                _services_plano_treino_service__WEBPACK_IMPORTED_MODULE_16__["PlanoTreinoService"],
                _services_aluno_service__WEBPACK_IMPORTED_MODULE_25__["AlunoService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/contato/contato.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contato/contato.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ndiv.container {\r\n    width: 80%;\r\n}\r\n\r\n@media only screen and (max-width: 1087px) {\r\n    div.container {\r\n        width: 285px;\r\n    }\r\n}\r\n\r\ndiv p {\r\n    font-size: 16px;\r\n}"

/***/ }),

/***/ "./src/app/components/contato/contato.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contato/contato.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card\">\r\n    <header class=\"card-header\">\r\n      <h5 class=\"card-header-title title is-5 is-orange\">\r\n        Endereço\r\n      </h5>\r\n    </header>\r\n    <div class=\"card-content\">\r\n      <p class=\"subtitle\">\r\n        Rua de Exemplo nº 200<br>\r\n        Vila Veloso, Carapicuíba - SP<br>\r\n        CEP 00000-000<br>\r\n        Tel. (11) 00000-0000\r\n      </p>\r\n    </div>\r\n    <footer class=\"card-footer\">\r\n      <p class=\"card-footer-item\">\r\n        <span>\r\n          Acompanhe-nos no <a href=\"https://twitter.com/codinghorror/status/506010907021828096\">Twitter</a>\r\n        </span>\r\n      </p>\r\n\r\n      <p class=\"card-footer-item\">\r\n        <span>\r\n          Compartilhe no <a href=\"#\">Facebook</a>\r\n        </span>\r\n      </p>\r\n\r\n    </footer>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/contato/contato.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contato/contato.component.ts ***!
  \*********************************************************/
/*! exports provided: ContatoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoComponent", function() { return ContatoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContatoComponent = /** @class */ (function () {
    function ContatoComponent() {
    }
    ContatoComponent.prototype.ngOnInit = function () {
    };
    ContatoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contato',
            template: __webpack_require__(/*! ./contato.component.html */ "./src/app/components/contato/contato.component.html"),
            styles: [__webpack_require__(/*! ./contato.component.css */ "./src/app/components/contato/contato.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContatoComponent);
    return ContatoComponent;
}());



/***/ }),

/***/ "./src/app/components/ficha-treino/editar/editar-ficha-treino.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ficha-treino/editar/editar-ficha-treino.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.center {\r\n    text-align: center;\r\n    margin: 10px;\r\n}\r\n\r\ntable thead {\r\n    text-align: center;\r\n}\r\n\r\np.title {\r\n    color: white;\r\n}\r\n\r\ntable td {\r\n    text-align: center;\r\n    font-weight: normal;\r\n}\r\n\r\n.modal-card-title {\r\n    color: white;\r\n}\r\n\r\n.modal-card-head, .modal-card-foot {\r\n    background-color: #209cee;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n }\r\n\r\n.ng-invalid:not(form):not(.ng-pristine)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n }\r\n\r\ntable.table {\r\n    width:100%;\r\n}\r\n\r\ntd, a, button, input {\r\n    font-size: 16px;\r\n}\r\n\r\n.is-mobile {\r\n    display: none;\r\n}\r\n\r\n.is-desktop {\r\n    display: block;\r\n}\r\n\r\n.is-font-white {\r\n    color:white;\r\n}\r\n\r\n.notification {\r\n   padding: 0.5rem 0.5rem 0.5rem 0.5rem;\r\n}\r\n\r\n@media only screen and (max-width: 568px) {\r\n    .modal-card {\r\n        width:98%;\r\n    }\r\n\r\n    .modal-card-title {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .is-mobile {\r\n        display: block;\r\n    }\r\n\r\n    .is-desktop {\r\n        display: none;\r\n    }\r\n\r\n    td {\r\n        font-size: 12px;\r\n    }  \r\n    \r\n    td a {\r\n        font-size: 12px;\r\n    }  \r\n\r\n    .tile.is-parent {\r\n        padding: 0.25rem;\r\n    }\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/ficha-treino/editar/editar-ficha-treino.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/ficha-treino/editar/editar-ficha-treino.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\r\n  <h3 class=\"title is-4\">Fichas</h3>\r\n</div>\r\n\r\n<div class=\"container\" *ngIf=\"!aluno\">\r\n  <div class=\"box is-orange\">\r\n    <div class=\"field is-grouped\">\r\n      <p class=\"control\"  style=\"width:65%;\">\r\n        <input class=\"input\" type=\"text\" placeholder=\"Procurar Aluno\" #nameImput>\r\n      </p>\r\n      <p class=\"control\">\r\n        <button class=\"button is-info\" name=\"btn-find\" (click)=\"onFind(nameImput.value)\" #btnFind>Procurar</button>\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"box is-orange\" *ngIf=\"!alunos\">\r\n    <span class=\"title is-5 is-font-white\">Nenhum aluno selecionado</span>\r\n  </div>\r\n  <div class=\"box is-orange\" *ngIf=\"alunos\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <td>Alunos</td>\r\n          <td>Editar Treino</td>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let aluno of alunos\">\r\n          <td>{{ aluno.nome }}</td>\r\n          <td><a class=\"button is-info\" (click)=\"onUserSelected(aluno)\">Selecionar</a></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"box is-orange\" *ngIf=\"loading\">\r\n    <span class=\"title is-5 is-font-white\">Carregando...</span>\r\n</div>\r\n<div class=\"tile is-ancestor\" *ngIf=\"aluno && !loading\">\r\n  <div class=\"tile is-vertical\">\r\n    <div class=\"tile\">\r\n      <div class=\"tile is-parent is-vertical\" *ngIf=\"planoTreino\">\r\n\r\n        <div class=\"box is-info is-orange\">\r\n          <p class=\"title is-4 field\">\r\n            {{ aluno.nome }}\r\n            <a class=\"button is-danger is-pulled-right\" (click)=\"onUserSelected(undefined)\">Trocar</a>\r\n          </p>\r\n        </div>\r\n\r\n        <input type=\"hidden\" name=\"id\" ngModel>\r\n        <article class=\"tile is-child notification is-orange\" *ngFor=\"let grupo of planoTreino.gruposMusculares\">\r\n          <p class=\"title is-5\">{{ grupo.descricao }}</p>\r\n          <hr>\r\n          <p class=\"subtitle\">\r\n            <a class=\"button is-info\" (click)=\"onToggleExercicioModal(grupo.descricao)\">\r\n              Adicionar Exercício\r\n            </a>\r\n          </p>\r\n          <table class=\"table is-striped is-narrow\">\r\n            <thead>\r\n              <tr>\r\n                <td style=\"width:60%;\">Exerc.</td>\r\n                <td style=\"width:10%;\">Ordem</td>\r\n                <td style=\"width:20%;\">Repet.</td>\r\n                <td style=\"width:10%;\"></td>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let item of grupo.exercicios\">\r\n                <td>\r\n                  <span class=\"is-mobile\">{{ item.descricao | minimizeText:7 }}</span>\r\n                  <span class=\"is-desktop\">{{ item.descricao }}</span>\r\n                </td>\r\n                <td>{{ item.ordem }}</td>\r\n                <td>{{ item.repeticao }}</td>\r\n                <td>\r\n                  <a class=\"button is-danger fas fa-trash-alt\"\r\n                    (click)=\"onExcluirExercicio(grupo.descricao, item.descricao)\"></a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </article>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal\" #novoExercicioModal>\r\n  <div class=\"modal-background\"></div>\r\n  <div class=\"modal-card\">\r\n    <form #exercicioForm=\"ngForm\" novalidate autocomplete=\"off\" (ngSubmit)=\"onNovoExercicioSubmit()\">\r\n      <header class=\"modal-card-head is-blue\">\r\n        <p class=\"modal-card-title\">\r\n          {{ grupoSelecionado }}\r\n        </p>\r\n        <button class=\"delete\" aria-label=\"close\" (click)=\"onToggleExercicioModal(grupoSelecionado)\"></button>\r\n      </header>\r\n      <section class=\"modal-card-body\">\r\n        <div class=\"field\">\r\n          <p class=\"control\">\r\n            <input class=\"input\" type=\"text\" placeholder=\"Exercício\" name=\"descricao\" ngModel minlength=\"3\" required>\r\n          </p>\r\n        </div>\r\n        <div class=\"field\">\r\n          <p class=\"control\">\r\n            <input class=\"input\" type=\"number\" placeholder=\"Ordem\" name=\"ordem\" ngModel required>\r\n          </p>\r\n        </div>\r\n        <div class=\"field\">\r\n          <p class=\"control\">\r\n            <input class=\"input\" type=\"text\" placeholder=\"Repetição\" name=\"repeticao\" ngModel required>\r\n          </p>\r\n        </div>\r\n      </section>\r\n      <footer class=\"modal-card-foot is-blue\">\r\n        <button class=\"button is-success\" type=\"submit\">Salvar</button>\r\n        <button class=\"button\" (click)=\"onToggleExercicioModal(grupoSelecionado)\">Cancelar</button>\r\n      </footer>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/ficha-treino/editar/editar-ficha-treino.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/ficha-treino/editar/editar-ficha-treino.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EditarFichaTreinoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarFichaTreinoComponent", function() { return EditarFichaTreinoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_plano_treino_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/plano-treino.service */ "./src/app/services/plano-treino.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_plano_treino_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/plano-treino.models */ "./src/app/models/plano-treino.models.ts");
/* harmony import */ var _services_aluno_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/aluno.service */ "./src/app/services/aluno.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditarFichaTreinoComponent = /** @class */ (function () {
    function EditarFichaTreinoComponent(alunoService, planoTreinoService) {
        this.alunoService = alunoService;
        this.planoTreinoService = planoTreinoService;
        this.loading = false;
    }
    EditarFichaTreinoComponent.prototype.ngOnInit = function () {
    };
    EditarFichaTreinoComponent.prototype.onFind = function (nomeAluno) {
        var _this = this;
        if (nomeAluno.length > 2) {
            this.btnFind.nativeElement.classList.add('is-loading');
            this.alunoService.obterUsuarios(nomeAluno).subscribe(function (resp) {
                if (resp && resp.length > 0) {
                    _this.alunos = resp;
                }
                else {
                    _this.alunos = null;
                }
                _this.btnFind.nativeElement.classList.remove('is-loading');
            }, function (error) {
                _this.alunos = null;
                _this.btnFind.nativeElement.classList.remove('is-loading');
            });
        }
    };
    EditarFichaTreinoComponent.prototype.onUserSelected = function (aluno) {
        var _this = this;
        this.aluno = aluno;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.aluno)) {
            this.loading = true;
            this.planoTreinoService.obterUltimoPlanoTreino(this.aluno).subscribe(function (resp) {
                _this.planoTreino = resp;
                if (!_this.planoTreino) {
                    _this.planoTreino = new _models_plano_treino_models__WEBPACK_IMPORTED_MODULE_3__["PlanoTreino"]();
                    _this.planoTreino.usuarioId = _this.aluno.id;
                }
                if (!_this.planoTreino.gruposMusculares) {
                    _this.planoTreino.gruposMusculares = [];
                }
                _this.addIfNotExists(_this.planoTreino.gruposMusculares, 'descricao', 'Membros Inferiores (Pernas)');
                _this.addIfNotExists(_this.planoTreino.gruposMusculares, 'descricao', 'Peitorais');
                _this.addIfNotExists(_this.planoTreino.gruposMusculares, 'descricao', 'Dorsais');
                _this.addIfNotExists(_this.planoTreino.gruposMusculares, 'descricao', 'Bíceps');
                _this.addIfNotExists(_this.planoTreino.gruposMusculares, 'descricao', 'Tríceps');
                _this.addIfNotExists(_this.planoTreino.gruposMusculares, 'descricao', 'Deltóides');
                _this.loading = false;
            }, function (error) {
                console.error(error);
                _this.loading = false;
            });
        }
    };
    EditarFichaTreinoComponent.prototype.addIfNotExists = function (array, field, descr) {
        var exists = array
            .find(function (grp) { return grp[field] === descr; });
        if (!exists) {
            array.push({ descricao: descr, exercicios: [] });
        }
    };
    EditarFichaTreinoComponent.prototype.onToggleExercicioModal = function (nomeGrupo) {
        this.grupoSelecionado = nomeGrupo;
        this.editarExercicio.nativeElement.classList.toggle('is-active');
    };
    EditarFichaTreinoComponent.prototype.onExcluirExercicio = function (nomeGrupo, nomeExercicio) {
        for (var i = 0; i < this.planoTreino.gruposMusculares.length; i++) {
            if (this.planoTreino.gruposMusculares[i].descricao === nomeGrupo) {
                for (var l = 0; l < this.planoTreino.gruposMusculares[i].exercicios.length; l++) {
                    if (this.planoTreino.gruposMusculares[i].exercicios[l].descricao === nomeExercicio) {
                        this.planoTreino.gruposMusculares[i].exercicios.splice(l, 1);
                    }
                }
            }
        }
    };
    EditarFichaTreinoComponent.prototype.onNovoExercicioSubmit = function () {
        var _this = this;
        if (this.exercicioForm.valid) {
            for (var i = 0; i < this.planoTreino.gruposMusculares.length; i++) {
                if (this.planoTreino.gruposMusculares[i].descricao === this.grupoSelecionado) {
                    var exists = this.planoTreino.gruposMusculares[i].exercicios
                        .find(function (exercicio) { return exercicio === _this.exercicioForm.value.exercicio; });
                    if (!exists) {
                        this.planoTreino.gruposMusculares[i].exercicios.push(this.exercicioForm.value);
                    }
                }
            }
            this.planoTreinoService.salvarPlanoTreino(this.planoTreino).subscribe(function (resp) {
            }, function (error) {
                console.log(error);
            });
            this.exercicioForm.reset();
            this.onToggleExercicioModal(this.grupoSelecionado);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('novoExercicioModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EditarFichaTreinoComponent.prototype, "editarExercicio", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('exercicioForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], EditarFichaTreinoComponent.prototype, "exercicioForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('btnFind'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EditarFichaTreinoComponent.prototype, "btnFind", void 0);
    EditarFichaTreinoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editar-ficha-treino',
            template: __webpack_require__(/*! ./editar-ficha-treino.component.html */ "./src/app/components/ficha-treino/editar/editar-ficha-treino.component.html"),
            styles: [__webpack_require__(/*! ./editar-ficha-treino.component.css */ "./src/app/components/ficha-treino/editar/editar-ficha-treino.component.css")]
        }),
        __metadata("design:paramtypes", [_services_aluno_service__WEBPACK_IMPORTED_MODULE_4__["AlunoService"],
            _services_plano_treino_service__WEBPACK_IMPORTED_MODULE_1__["PlanoTreinoService"]])
    ], EditarFichaTreinoComponent);
    return EditarFichaTreinoComponent;
}());



/***/ }),

/***/ "./src/app/components/ficha-treino/ficha-treino.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/ficha-treino/ficha-treino.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.table {\r\n    width:100%;\r\n}\r\n\r\ntd {\r\n    font-size: 14px;\r\n}\r\n\r\n.notification {\r\n    padding: 0.5rem 0.5rem 0.5rem 0.5rem;\r\n }\r\n\r\n@media only screen and (max-width: 568px) {\r\n    td {\r\n        font-size: 12px;\r\n    }\r\n\r\n    .tile.is-parent {\r\n        padding: 0.25rem;\r\n    }\r\n}\r\n\r\ntable thead {\r\n    text-align: center;\r\n    font-weight: bolder;\r\n}\r\n\r\ntable td {\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/ficha-treino/ficha-treino.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/ficha-treino/ficha-treino.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tile is-ancestor\">\r\n  <div class=\"tile is-vertical\">\r\n    <div class=\"tile\">\r\n\r\n      <div class=\"tile is-parent center\" *ngIf=\"loading\">\r\n        <div class=\"notification is-orange\">\r\n          <span class=\"title is-5\">Aguarde...</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"center\" *ngIf=\"!loading\">\r\n        <div class=\"tile is-parent is-vertical\" *ngIf=\"!planoTreino?.gruposMusculares\">\r\n          <article class=\"tile is-child notification is-orange\">\r\n            <p class=\"title is-4\">Não há plano de treino definido</p>\r\n          </article>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"tile is-parent is-vertical\" *ngIf=\"planoTreino\">\r\n        <article class=\"tile is-child notification is-orange\" *ngFor=\"let grupo of planoTreino.gruposMusculares\">\r\n          <p class=\"title is-5\">{{ grupo.descricao }}</p>\r\n          <p class=\"subtitle\"></p>\r\n          <table class=\"table is-striped\">\r\n            <thead>\r\n              <tr>\r\n                <td style=\"width:60%;\">Exercício</td>\r\n                <td style=\"width:10%;\">Ordem</td>\r\n                <td style=\"width:20%;\">Séries/Repet.</td>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let item of grupo.exercicios\">\r\n                <td>{{ item.descricao }}</td>\r\n                <td>{{ item.ordem }}</td>\r\n                <td>{{ item.repeticao }}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </article>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/ficha-treino/ficha-treino.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/ficha-treino/ficha-treino.component.ts ***!
  \*******************************************************************/
/*! exports provided: FichaTreinoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichaTreinoComponent", function() { return FichaTreinoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_plano_treino_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/plano-treino.service */ "./src/app/services/plano-treino.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _slideInAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../slideInAnimation */ "./src/app/slideInAnimation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FichaTreinoComponent = /** @class */ (function () {
    function FichaTreinoComponent(planoTreinoService, authService) {
        this.planoTreinoService = planoTreinoService;
        this.authService = authService;
    }
    FichaTreinoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        var usuario = this.authService.obterUsuario();
        this.planoTreinoService.obterUltimoPlanoTreino(usuario).subscribe(function (resp) {
            _this.loading = false;
            _this.planoTreino = resp;
        }, function (error) {
            _this.loading = false;
        });
    };
    FichaTreinoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ficha-treino',
            template: __webpack_require__(/*! ./ficha-treino.component.html */ "./src/app/components/ficha-treino/ficha-treino.component.html"),
            styles: [__webpack_require__(/*! ./ficha-treino.component.css */ "./src/app/components/ficha-treino/ficha-treino.component.css")],
            animations: [
                _slideInAnimation__WEBPACK_IMPORTED_MODULE_3__["slideInAnimation"]
            ]
        }),
        __metadata("design:paramtypes", [_services_plano_treino_service__WEBPACK_IMPORTED_MODULE_1__["PlanoTreinoService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], FichaTreinoComponent);
    return FichaTreinoComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content p {\r\n    color: white;\r\n}  "

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <div class=\"content has-text-centered\">\r\n      <p>\r\n        &copy; 2019 - Anderson.Davanse\r\n      </p>\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ndiv.container {\r\n    width: 80%;    \r\n}\r\n\r\ndiv p {\r\n    font-size: 18px;\r\n}\r\n\r\nli {\r\n    padding: 8px;\r\n    font-size: 16px;\r\n}\r\n\r\n@media only screen and (max-width: 1020px) {\r\n    div.container {\r\n       width: 280px;\r\n    }\r\n\r\n    div p {\r\n        font-size: 14px;\r\n    }    \r\n\r\n    li {\r\n        font-size: 14px;\r\n    }    \r\n\r\n    .hero-body {\r\n        padding: 0px;\r\n    }\r\n\r\n    section.hero {\r\n        height: 140px;\r\n    }\r\n    .container img {\r\n        height: 100px;\r\n    }\r\n    .navbar-item {\r\n        color: black;\r\n    }\r\n    span.tag:not(body) {\r\n        width: 0%;\r\n        visibility: hidden;\r\n    }    \r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <section class=\"hero\">\r\n    <div class=\"hero-body\">\r\n      <div class=\"container\">\r\n        <div class=\"has-text-centered\">\r\n          <img class=\"has-text-centered\" src=\"assets/img/corpo-e-acao-academia.png\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  \r\n  <div class=\"tile is-ancestor\">\r\n    <div class=\"tile is-vertical\">\r\n      <div class=\"tile\">\r\n        <div class=\"tile is-parent is-vertical\">\r\n\r\n          <article class=\"tile is-child notification is-orange\">\r\n            <span class=\"title is-5\">Horário de Funcionamento</span>\r\n            <hr>\r\n            <ul class=\"subtitle has-text-centerd\">\r\n              <li>Segunda a Sexta-feira: 6h às 23h</li>\r\n              <li>Sábado: 9h às 18h</li>    \r\n              <li>Domingo e Feriado: 10h às 17h</li>\r\n            </ul>\r\n          </article>\r\n\r\n          <article class=\"tile is-child notification is-orange\">\r\n            <span class=\"title is-5\">Avisos</span>\r\n            <hr>\r\n            <p>\r\n              Aviso de teste na página principal\r\n              Mais um aviso\r\n            </p>\r\n          </article>     \r\n          \r\n          <article class=\"tile is-child notification is-orange\">\r\n            <span class=\"title is-5\">Promoções</span>\r\n            <hr>\r\n            <p>\r\n              Pague 3 mensalidades e ganhe 1 grátis\r\n            </p>\r\n          </article>   \r\n          <article class=\"tile is-child notification is-orange\">\r\n            <span class=\"title is-5\">Mais conteúdo</span>\r\n            <hr>\r\n            <p>\r\n              Conteúdo informativo\r\n            </p>\r\n          </article>                   \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _slideInAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../slideInAnimation */ "./src/app/slideInAnimation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")],
            animations: [
                _slideInAnimation__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.hero-body {\r\n   padding: 1rem 0rem;\r\n}\r\n.card-header-title {\r\n    color:white;\r\n}\r\ndiv.container {\r\n      width: 30%;\r\n}\r\n.notification.is-danger {\r\n   background-color: #ff6666;\r\n   color: #fff;\r\n   font-size: 14px;\r\n}\r\n.ng-valid[required], .ng-valid.required  {\r\n   border-left: 5px solid #42A948; /* green */\r\n}\r\n.ng-invalid:not(form):not(.ng-pristine)  {\r\n   border-left: 5px solid #a94442; /* red */\r\n}\r\n@media only screen and (max-width: 1020px) {\r\n   div.container {\r\n      width: 100%;\r\n   }\r\n}\r\n  \r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero\">\r\n  <div class=\"hero-body\">\r\n\r\n    <div class=\"container\">\r\n        <div *ngIf=\"loginFailed\" class=\"notification is-danger\" (click)=\"onNotificationClick(loginForm)\">\r\n            <button class=\"delete\"></button>\r\n            <h5 class=\"title is-5 has-text-centered\">\r\n              {{ errorMessage }}\r\n            </h5>\r\n          </div>\r\n\r\n      <div class=\"card\">\r\n        <header class=\"card-header\">\r\n          <h5 class=\"card-header-title title is-5 is-orange\">\r\n            Login\r\n          </h5>\r\n        </header>\r\n        <div class=\"card-content\">\r\n          <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit(loginForm)\" novalidate> \r\n            <div class=\"field\">\r\n              <label for=\"login\">Login</label>\r\n              <div class=\"control\" id=\"login\">\r\n                <input class=\"input\" type=\"text\" placeholder=\"Login\" name=\"login\" ngModel required minlength=\"8\" maxlength=\"30\">\r\n              </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <label for=\"senha\">Senha</label>\r\n              <div class=\"control\" id=\"senha\">\r\n                <input class=\"input\" type=\"password\" placeholder=\"Senha\" name=\"password\" ngModel required minlength=\"6\">\r\n              </div>\r\n            </div>\r\n            <button type=\"submit\" class=\"button is-info is-pulled-right\" [disabled]=\"!loginForm.form.valid\" #btnLogin>Login</button>\r\n          </form>\r\n          <br>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _models_login_credentials_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/login-credentials.model */ "./src/app/models/login-credentials.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.loginFailed = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.errorMessage = '';
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.valid) {
            var credentials = new _models_login_credentials_model__WEBPACK_IMPORTED_MODULE_3__["LoginCredentials"]();
            credentials.login = form.value.login;
            credentials.senha = form.value.password;
            this.btnLogin.nativeElement.classList.add('is-loading');
            this.authService.autenticar(credentials).subscribe(function (resp) {
                _this.loginFailed = false;
                _this.errorMessage = '';
                _this.btnLogin.nativeElement.classList.remove('is-loading');
                _this.router.navigate(['ficha-treino']);
            }, function (error) {
                _this.btnLogin.nativeElement.classList.remove('is-loading');
                if (error.status == 400) {
                    _this.errorMessage = 'Usuário ou Senha inválidos';
                }
                else {
                    if (error.status == 0) {
                        _this.errorMessage = 'Serviço indisponível';
                    }
                    else {
                        _this.errorMessage = error.statusText;
                    }
                }
                _this.loginFailed = true;
            });
        }
    };
    LoginComponent.prototype.onNotificationClick = function (form) {
        this.loginFailed = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('btnLogin'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "btnLogin", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/logoff/logoff.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/logoff/logoff.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ndiv.container {\r\n    width: 330px;\r\n}\r\n\r\nfooter.card-footer {\r\n    margin: 8px;\r\n}\r\n\r\na.card-footer-item {\r\n    margin: 8px;\r\n}\r\n\r\n@media only screen and (max-width: 1020px) {\r\n    div.container {\r\n       width: 255px;\r\n    } \r\n}\r\n"

/***/ }),

/***/ "./src/app/components/logoff/logoff.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/logoff/logoff.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card\">\r\n    <header class=\"card-header\">\r\n      <p class=\"card-header-title title is-5 is-orange\">\r\n        Atenção\r\n      </p>\r\n    </header>\r\n    <div class=\"card-content\">\r\n      <div class=\"content\">\r\n        <p class=\"title is-5\">\r\n          Deseja sair?\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <footer class=\"card-footer\">\r\n      <a class=\"card-footer-item button\" (click)=\"onLogoff()\">Sim</a>\r\n      <a class=\"card-footer-item button\" routerLink=\"../home\">Não</a>\r\n    </footer>\r\n  </div>\r\n</div> "

/***/ }),

/***/ "./src/app/components/logoff/logoff.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/logoff/logoff.component.ts ***!
  \*******************************************************/
/*! exports provided: LogoffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoffComponent", function() { return LogoffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoffComponent = /** @class */ (function () {
    function LogoffComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LogoffComponent.prototype.ngOnInit = function () {
    };
    LogoffComponent.prototype.onLogoff = function () {
        this.authService.logout();
        this.router.navigate(['home']);
    };
    LogoffComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logoff',
            template: __webpack_require__(/*! ./logoff.component.html */ "./src/app/components/logoff/logoff.component.html"),
            styles: [__webpack_require__(/*! ./logoff.component.css */ "./src/app/components/logoff/logoff.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LogoffComponent);
    return LogoffComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.navbar {\r\n    background-color: rgb(50, 157, 245);    \r\n}\r\n\r\n.navbar-item {\r\n    font-size: 20px;\r\n    color: white;\r\n}\r\n\r\na.button {\r\n    font-size: 16px;    \r\n}\r\n\r\n.hero-body {\r\n    padding: 20px;\r\n}\r\n\r\nspan.tag:not(body) {\r\n    height: 100%;\r\n}\r\n\r\nhr {\r\n    margin: auto;\r\n}\r\n\r\n@media only screen and (max-width: 1087px) {\r\n    .navbar-item {\r\n        color: black;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\r\n\r\n  <div class=\"navbar-brand\">\r\n\r\n    <a class=\"navbar-item\" routerLink=\"home\">      \r\n      <img src=\"assets/img/dumbell_512x512-icon.png\">\r\n    </a>\r\n\r\n    <a role=\"button\" class=\"navbar-burger burger\" (click)=\"onNavBarClick()\" #navBarBurger aria-label=\"menu\"\r\n      aria-expanded=\"false\" data-target=\"navbarBasic\">\r\n      <span aria-hidden=\"true\"></span>\r\n      <span aria-hidden=\"true\"></span>\r\n      <span aria-hidden=\"true\"></span>\r\n    </a>\r\n  </div>\r\n\r\n  <div id=\"navbarBasic\" class=\"navbar-menu\" #navBarMenu>\r\n\r\n    <div class=\"navbar-end\">\r\n      <a class=\"navbar-item\" routerLink=\"home\" (click)=\"onNavBarClick()\">\r\n        Home\r\n      </a>\r\n      <a *ngIf=\"isAdmin()\" [routerLink]=\"['usuario']\" class=\"navbar-item\" (click)=\"onNavBarClick()\">\r\n        Alunos\r\n      </a>      \r\n      <a *ngIf=\"isAdmin()\" [routerLink]=\"['ficha-treino', 'editar']\" class=\"navbar-item\" (click)=\"onNavBarClick()\">\r\n        Editar Fichas\r\n      </a>\r\n      <a *ngIf=\"isAuthenticated()\" routerLink=\"ficha-treino\" class=\"navbar-item\" (click)=\"onNavBarClick()\">\r\n        Minha Ficha\r\n      </a>\r\n      <a *ngIf=\"isAuthenticated() && !isAdmin()\" [routerLink]=\"['usuario/info-usuario']\" class=\"navbar-item\" (click)=\"onNavBarClick()\">\r\n        Meus Dados\r\n      </a>\r\n      <a routerLink=\"contato\" class=\"navbar-item\" (click)=\"onNavBarClick()\">\r\n        Contato\r\n      </a>\r\n      <hr>\r\n      <div class=\"navbar-item\">\r\n        <div class=\"buttons\">\r\n          <a *ngIf=\"!isAuthenticated()\" routerLink=\"login\" class=\"button is-orange\" (click)=\"onNavBarClick()\">\r\n            Log in\r\n          </a>\r\n          <a *ngIf=\"isAuthenticated()\" routerLink=\"logoff\" class=\"button is-orange\" (click)=\"onNavBarClick()\">\r\n              &nbsp;&nbsp; Sair &nbsp;&nbsp;\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</nav>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(authService) {
        this.authService = authService;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.isAuthenticated = function () {
        return this.authService.isAuthenticated();
    };
    MenuComponent.prototype.isAdmin = function () {
        return this.authService.isAdmin();
    };
    MenuComponent.prototype.onNavBarClick = function () {
        this.navBarBurger.nativeElement.classList.toggle('is-active');
        this.navBarMenu.nativeElement.classList.toggle('is-active');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('navBarBurger'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MenuComponent.prototype, "navBarBurger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('navBarMenu'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MenuComponent.prototype, "navBarMenu", void 0);
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/usuario/cadastro-usuario/cadastro-usuario.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/usuario/cadastro-usuario/cadastro-usuario.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-header-title {\r\n   color:white;\r\n}\r\n\r\n.hero-body {\r\n   padding: 1.0rem 0rem 0rem 0rem;\r\n}\r\n\r\ndiv .container {\r\n   width: 30%;\r\n}\r\n\r\n.card-content {\r\n   padding: 3rem;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n   border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form):not(.ng-pristine)  {\r\n   border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\ntextarea.input {\r\n   height: 56px;\r\n}\r\n\r\n@media only screen and (max-width: 1020px) {\r\n   div .container {\r\n      width: 100%;\r\n   }\r\n   .card-content {\r\n      padding: 0.5rem 0.5rem 2.5rem 0.5rem;\r\n   }   \r\n}\r\n  \r\n"

/***/ }),

/***/ "./src/app/components/usuario/cadastro-usuario/cadastro-usuario.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/usuario/cadastro-usuario/cadastro-usuario.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero\">\r\n  <div class=\"hero-body\">\r\n\r\n    <div class=\"container\">\r\n      <div *ngIf=\"mensagemErro !== ''\" class=\"notification is-danger\" (click)=\"onNotificationClick()\">\r\n        <button class=\"delete\"></button>\r\n        <h4 class=\"title is-4 has-text-centered\">\r\n          {{ mensagemErro }}\r\n        </h4>\r\n      </div>\r\n\r\n      <div class=\"card\">\r\n        <header class=\"card-header\">\r\n          <h5 class=\"card-header-title title is-5 is-orange\">\r\n            Cadastro\r\n          </h5>\r\n        </header>\r\n        <div class=\"card-content\">\r\n          <form #alunoForm=\"ngForm\" (ngSubmit)=\"onSubmit(alunoForm)\" novalidate>\r\n            <input type=\"hidden\" name=\"id\" ngModel>\r\n            <div class=\"field\">\r\n              <label for=\"Nome\">Nome</label>\r\n              <div class=\"control\" id=\"nome\">\r\n                <input class=\"input\" type=\"text\" placeholder=\"Nome\" name=\"nome\" ngModel required minlength=\"8\"\r\n                  maxlength=\"60\">\r\n              </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <label for=\"email\">E-mail</label>\r\n              <div class=\"control\" id=\"email\">\r\n                <input class=\"input\" type=\"text\" placeholder=\"Email\" name=\"email\" ngModel minlength=\"6\" maxlength=\"60\">\r\n              </div>\r\n            </div>\r\n            <div class=\"field\">\r\n                <label for=\"celular\">Celular</label>\r\n                <div class=\"control\" id=\"celular\">\r\n                  <input class=\"input\" type=\"text\" placeholder=\"Celular\" name=\"celular\" ngModel maxlength=\"20\">\r\n                </div>\r\n              </div>            \r\n            <div class=\"field\">\r\n              <label for=\"peso\">Peso</label>\r\n              <div class=\"control\" id=\"peso\">\r\n                <input class=\"input\" type=\"number\" placeholder=\"Peso\" name=\"peso\" ngModel min=\"1\" max=\"999\">\r\n              </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <label for=\"altura\">Altura</label>\r\n              <div class=\"control\" id=\"altura\">\r\n                <input class=\"input\" type=\"number\" placeholder=\"Altura\" name=\"altura\" ngModel min=\"1\" max=\"999\">\r\n              </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <label for=\"observacao\">Observação</label>\r\n              <div class=\"control\" id=\"observacao\">\r\n                <textarea class=\"input\" type=\"text\" rows=\"4\" placeholder=\"Observação\" name=\"obs\" ngModel maxlength=\"1000\"></textarea>\r\n              </div>\r\n            </div>\r\n\r\n            <label for=\"novaSenha\">Definir nova senha</label>\r\n            <div class=\"box\" id=\"novaSenha\">\r\n              <div class=\"field\">\r\n                <label for=\"altura\">Senha</label>\r\n                <div class=\"control\" id=\"senha\">\r\n                  <input class=\"input\" type=\"password\" placeholder=\"Senha\" name=\"senha\" ngModel minlength=\"8\" maxlength=\"30\">\r\n                </div>\r\n              </div>\r\n              <div class=\"field\">\r\n                <label for=\"confirmaSenha\">Confirmação da Senha</label>\r\n                <div class=\"control\" id=\"confirmaSenha\">\r\n                  <input class=\"input\" type=\"password\" placeholder=\"Confirmar Senha\" name=\"confirmaSenha\" ngModel minlength=\"8\" maxlength=\"30\">\r\n                </div>\r\n              </div>              \r\n            </div>\r\n\r\n            <div class=\"is-pulled-right\">\r\n              <a type=\"button\" class=\"button is-danger\" [routerLink]=\"['/usuario']\">Voltar</a>\r\n              &nbsp;\r\n              <button type=\"submit\" class=\"button is-info\" [disabled]=\"!alunoForm.form.valid\">Salvar</button>              \r\n            </div>\r\n            \r\n          </form>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/usuario/cadastro-usuario/cadastro-usuario.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/usuario/cadastro-usuario/cadastro-usuario.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CadastroUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroUsuarioComponent", function() { return CadastroUsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_aluno_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/aluno.service */ "./src/app/services/aluno.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CadastroUsuarioComponent = /** @class */ (function () {
    function CadastroUsuarioComponent(router, route, alunoService) {
        this.router = router;
        this.route = route;
        this.alunoService = alunoService;
        this.mensagemErro = '';
    }
    CadastroUsuarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['usuario']) {
                _this.alunoService.obterUsuarios(params['usuario']).subscribe(function (usuario) {
                    if (usuario.length) {
                        _this.aluno = usuario[0];
                        _this.alunoForm.setValue({
                            id: _this.aluno.id || '',
                            nome: _this.aluno.nome || '',
                            email: _this.aluno.email || '',
                            celular: _this.aluno.celular || '',
                            peso: _this.aluno.peso || '',
                            altura: _this.aluno.altura || '',
                            obs: _this.aluno.observacao || '',
                            senha: '',
                            confirmaSenha: ''
                        });
                    }
                });
            }
        });
    };
    CadastroUsuarioComponent.prototype.onSubmit = function (loginForm) {
        var _this = this;
        if (loginForm.valid) {
            if ((!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(loginForm.value.password) && !Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(loginForm.value.confirmPassword))
                && (loginForm.value.password !== loginForm.value.confirmPassword)) {
                this.mensagemErro = 'Senha e confirmação de senha diferentes!';
            }
            var usrSenha = {
                id: loginForm.value.id,
                nome: loginForm.value.nome,
                email: loginForm.value.email,
                celular: loginForm.value.celular,
                peso: loginForm.value.peso,
                altura: loginForm.value.altura,
                observacao: loginForm.value.obs,
                senha: loginForm.value.senha,
                confirmaSenha: loginForm.value.confirmaSenha
            };
            this.alunoService.salvarAluno(usrSenha).subscribe(function (resp) {
                _this.mensagemErro = '';
                _this.router.navigate(['./usuario']);
            }, function (resp) {
                _this.mensagemErro = resp.error;
            });
        }
    };
    CadastroUsuarioComponent.prototype.onNotificationClick = function () {
        this.mensagemErro = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('alunoForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], CadastroUsuarioComponent.prototype, "alunoForm", void 0);
    CadastroUsuarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cadastro-usuario',
            template: __webpack_require__(/*! ./cadastro-usuario.component.html */ "./src/app/components/usuario/cadastro-usuario/cadastro-usuario.component.html"),
            styles: [__webpack_require__(/*! ./cadastro-usuario.component.css */ "./src/app/components/usuario/cadastro-usuario/cadastro-usuario.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_aluno_service__WEBPACK_IMPORTED_MODULE_3__["AlunoService"]])
    ], CadastroUsuarioComponent);
    return CadastroUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/components/usuario/info-usuario/info-usuario.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/usuario/info-usuario/info-usuario.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero-body {\r\n    padding: 1.0rem 0rem 0rem 0rem;\r\n }\r\n \r\ntextarea.input {\r\n    height: 86px;\r\n }"

/***/ }),

/***/ "./src/app/components/usuario/info-usuario/info-usuario.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/usuario/info-usuario/info-usuario.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero\">\r\n    <div class=\"hero-body\">\r\n      <div class=\"container\">\r\n        <div class=\"card\">\r\n          <header class=\"card-header\">\r\n            <h5 class=\"card-header-title title is-5 is-orange\">\r\n              Meus Dados\r\n            </h5>\r\n          </header>\r\n          <div class=\"card-content\">\r\n            <form>\r\n              <input type=\"hidden\" name=\"id\" ngModel>\r\n              <div class=\"field\">\r\n                <label for=\"Nome\">Nome</label>\r\n                <div class=\"control\" id=\"nome\">\r\n                  <div class=\"input\">{{ aluno.nome }}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"field\">\r\n                <label for=\"email\">E-mail</label>\r\n                <div class=\"control\" id=\"email\">\r\n                    <div class=\"input\">{{ aluno.email }}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"field\">\r\n                  <label for=\"celular\">Celular</label>\r\n                  <div class=\"control\" id=\"celular\">\r\n                      <div class=\"input\">{{ aluno.celular }}</div>\r\n                  </div>\r\n                </div>            \r\n              <div class=\"field\">\r\n                <label for=\"peso\">Peso</label>\r\n                <div class=\"control\" id=\"peso\">\r\n                    <div class=\"input\">{{ aluno.peso }}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"field\">\r\n                <label for=\"altura\">Altura</label>\r\n                <div class=\"control\" id=\"altura\">\r\n                    <div class=\"input\">{{ aluno.altura }}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"field\">\r\n                <label for=\"observacao\">Observação</label>\r\n                <div class=\"control\" id=\"observacao\">\r\n                  <textarea rows=\"4\" class=\"input\">{{ aluno.observacao }}</textarea>\r\n                </div>\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  "

/***/ }),

/***/ "./src/app/components/usuario/info-usuario/info-usuario.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/usuario/info-usuario/info-usuario.component.ts ***!
  \***************************************************************************/
/*! exports provided: InfoUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoUsuarioComponent", function() { return InfoUsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoUsuarioComponent = /** @class */ (function () {
    function InfoUsuarioComponent(authService) {
        this.authService = authService;
    }
    InfoUsuarioComponent.prototype.ngOnInit = function () {
        this.aluno = this.authService.obterUsuario();
    };
    InfoUsuarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-usuario',
            template: __webpack_require__(/*! ./info-usuario.component.html */ "./src/app/components/usuario/info-usuario/info-usuario.component.html"),
            styles: [__webpack_require__(/*! ./info-usuario.component.css */ "./src/app/components/usuario/info-usuario/info-usuario.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], InfoUsuarioComponent);
    return InfoUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/components/usuario/lista-usuario/lista-usuario.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/usuario/lista-usuario/lista-usuario.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table thead {\r\n    text-align: center;\r\n}\r\n\r\ntable td {\r\n    text-align: center;\r\n    font-weight: normal;\r\n}\r\n\r\n.modal-card-title {\r\n    color: white;\r\n}\r\n\r\n.modal-card-head, .modal-card-foot {\r\n    background-color: #209cee;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n }\r\n\r\n.ng-invalid:not(form):not(.ng-pristine)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n }\r\n\r\ntable.table {\r\n    width:100%;\r\n}\r\n\r\ntd, a, button, input {\r\n    font-size: 16px;\r\n}\r\n\r\n.is-mobile {\r\n    display: none;\r\n}\r\n\r\n.is-desktop {\r\n    display: block;\r\n}\r\n\r\n.is-font-white {\r\n    color:white;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .modal-card {\r\n        width:98%;\r\n    }\r\n    .modal-card-title {\r\n        font-size: 20px;\r\n    }\r\n    .is-mobile {\r\n        display: block;\r\n    }\r\n    .is-desktop {\r\n        display: none;\r\n    }\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/usuario/lista-usuario/lista-usuario.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/usuario/lista-usuario/lista-usuario.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <br>\r\n  <div>\r\n    <a class=\"button is-info is-medium\" [routerLink]=\"['./senha-usuario/0']\">Novo Aluno</a>\r\n  </div>\r\n  <br>\r\n  <div class=\"box is-orange\">\r\n    <div class=\"field is-grouped\">\r\n      <p class=\"control\">\r\n        <input class=\"input\" type=\"text\" placeholder=\"Procurar Aluno\" width=\"200px\" #nameImput>\r\n        \r\n      </p>\r\n      <p class=\"control\">\r\n        <a class=\"button is-info fas fa-search\" (click)=\"onFind(nameImput.value)\"></a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"box is-orange\" *ngIf=\"!alunos\">\r\n    <span class=\"title is-5 is-font-white\">Nenhum aluno selecionado</span>\r\n  </div>\r\n\r\n  <div class=\"box is-orange\" *ngIf=\"alunos\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <td>Alunos</td>\r\n          <td>Editar</td>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let aluno of alunos\">\r\n          <td>{{ aluno.nome }}</td>\r\n          <td><a class=\"button is-info\" (click)=\"onUserSelected(aluno)\">Selecionar</a></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/usuario/lista-usuario/lista-usuario.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/usuario/lista-usuario/lista-usuario.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListaUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaUsuarioComponent", function() { return ListaUsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_aluno_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/aluno.service */ "./src/app/services/aluno.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListaUsuarioComponent = /** @class */ (function () {
    function ListaUsuarioComponent(router, alunoService) {
        this.router = router;
        this.alunoService = alunoService;
    }
    ListaUsuarioComponent.prototype.ngOnInit = function () {
    };
    ListaUsuarioComponent.prototype.onFind = function (nomeAluno) {
        var _this = this;
        if (nomeAluno.length > 2) {
            this.alunoService.obterUsuarios(nomeAluno).subscribe(function (resp) {
                if (resp && resp.length > 0) {
                    _this.alunos = resp;
                }
                else {
                    _this.alunos = null;
                }
            });
        }
    };
    ListaUsuarioComponent.prototype.onUserSelected = function (aluno) {
        this.aluno = aluno;
        this.router.navigate(['/usuario', this.aluno.nome]);
    };
    ListaUsuarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lista-usuario',
            template: __webpack_require__(/*! ./lista-usuario.component.html */ "./src/app/components/usuario/lista-usuario/lista-usuario.component.html"),
            styles: [__webpack_require__(/*! ./lista-usuario.component.css */ "./src/app/components/usuario/lista-usuario/lista-usuario.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_aluno_service__WEBPACK_IMPORTED_MODULE_2__["AlunoService"]])
    ], ListaUsuarioComponent);
    return ListaUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/components/usuario/senha-usuario/senha-usuario.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/usuario/senha-usuario/senha-usuario.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-header-title {\r\n    color:white;\r\n }\r\n \r\n .hero-body {\r\n    padding: 1.0rem 0rem 0rem 0rem;\r\n }\r\n \r\n div .container {\r\n    width: 30%;\r\n }\r\n \r\n .card-content {\r\n    padding: 3rem;\r\n }\r\n \r\n .ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n }\r\n \r\n .ng-invalid:not(form):not(.ng-pristine)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n }\r\n \r\n @media only screen and (max-width: 1020px) {\r\n    div .container {\r\n       width: 100%;\r\n    }\r\n    .card-content {\r\n       padding: 0.5rem 0.5rem 2.5rem 0.5rem;\r\n    }   \r\n }\r\n   \r\n "

/***/ }),

/***/ "./src/app/components/usuario/senha-usuario/senha-usuario.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/usuario/senha-usuario/senha-usuario.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero\">\r\n    <div class=\"hero-body\">\r\n  \r\n      <div class=\"container\">\r\n        <div *ngIf=\"mensagemErro !== ''\" class=\"notification is-danger\" (click)=\"onNotificationClick()\">\r\n          <button class=\"delete\"></button>\r\n          <h4 class=\"title is-4 has-text-centered\">\r\n            {{ mensagemErro }}\r\n          </h4>\r\n        </div>\r\n  \r\n        <div class=\"card\">\r\n          <header class=\"card-header\">\r\n            <h5 class=\"card-header-title title is-5 is-orange\">\r\n              Novo do Aluno\r\n            </h5>\r\n          </header>\r\n          <div class=\"card-content\">\r\n            <form #alunoForm=\"ngForm\" (ngSubmit)=\"onSubmit(alunoForm)\" novalidate>\r\n              <input type=\"hidden\" name=\"id\" ngModel>\r\n              <div class=\"field\">\r\n                <label for=\"login\">Login</label>\r\n                <div class=\"control\" id=\"login\">\r\n                  <input class=\"input\" type=\"text\" placeholder=\"Login\" name=\"login\" ngModel required minlength=\"8\"\r\n                    maxlength=\"60\">\r\n                </div>\r\n              </div>\r\n              <div class=\"field\">\r\n                <label for=\"senha\">Senha</label>\r\n                <div class=\"control\" id=\"senha\">\r\n                  <input class=\"input\" type=\"password\" placeholder=\"Senha\" name=\"senha\" ngModel required minlength=\"6\" maxlength=\"60\">\r\n                </div>\r\n              </div>\r\n              <div class=\"field\">\r\n                  <label for=\"confirmaSenha\">Confirmação da Senha</label>\r\n                  <div class=\"control\" id=\"confirmaSenha\">\r\n                    <input class=\"input\" type=\"password\" placeholder=\"Confirmar Senha\" name=\"confirmaSenha\" ngModel required minlength=\"6\" maxlength=\"60\">\r\n                  </div>\r\n              </div>              \r\n  \r\n              <div class=\"is-pulled-right\">\r\n                <a type=\"button\" class=\"button is-danger\" [routerLink]=\"['/usuario']\">Voltar</a>\r\n                &nbsp;\r\n                <button type=\"submit\" class=\"button is-info\" [disabled]=\"!alunoForm.form.valid\">Salvar</button>              \r\n              </div>\r\n              \r\n            </form>\r\n          </div>\r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  "

/***/ }),

/***/ "./src/app/components/usuario/senha-usuario/senha-usuario.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/usuario/senha-usuario/senha-usuario.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SenhaUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenhaUsuarioComponent", function() { return SenhaUsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_aluno_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/aluno.service */ "./src/app/services/aluno.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SenhaUsuarioComponent = /** @class */ (function () {
    function SenhaUsuarioComponent(router, route, alunoService) {
        this.router = router;
        this.route = route;
        this.alunoService = alunoService;
    }
    SenhaUsuarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mensagemErro = '';
        this.route.params.subscribe(function (params) {
            if (params['usuario'] !== 0) {
                _this.alunoService.obterUsuarios(params['usuario'])
                    .subscribe(function (resp) {
                    _this.aluno = resp[0];
                    _this.alunoForm.setValue({
                        id: _this.aluno.id,
                        login: _this.aluno.login
                    });
                });
            }
        });
    };
    SenhaUsuarioComponent.prototype.onNotificationClick = function () {
        this.mensagemErro = '';
    };
    SenhaUsuarioComponent.prototype.onSubmit = function (loginForm) {
        var _this = this;
        if (loginForm.valid) {
            if (loginForm.value.password !== loginForm.value.confirmPassword) {
                this.mensagemErro = 'Senha e confirmação de senha diferentes!';
                return;
            }
            var aluno = {
                id: loginForm.value.id,
                nome: loginForm.value.login,
                login: loginForm.value.login,
                senha: loginForm.value.senha,
                confirmaSenha: loginForm.value.confirmaSenha
            };
            this.alunoService.salvarAluno(aluno).subscribe(function (resp) {
                _this.mensagemErro = '';
                _this.router.navigate(['./usuario']);
            }, function (error) {
                for (var prop in error.error) {
                    _this.mensagemErro += error.error[prop] + '\n';
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('alunoForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])
    ], SenhaUsuarioComponent.prototype, "alunoForm", void 0);
    SenhaUsuarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-senha-usuario',
            template: __webpack_require__(/*! ./senha-usuario.component.html */ "./src/app/components/usuario/senha-usuario/senha-usuario.component.html"),
            styles: [__webpack_require__(/*! ./senha-usuario.component.css */ "./src/app/components/usuario/senha-usuario/senha-usuario.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_aluno_service__WEBPACK_IMPORTED_MODULE_2__["AlunoService"]])
    ], SenhaUsuarioComponent);
    return SenhaUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/components/usuario/usuario.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/usuario/usuario.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.center {\r\n    text-align: center;\r\n    margin: 10px;\r\n}"

/***/ }),

/***/ "./src/app/components/usuario/usuario.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/usuario/usuario.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/usuario/usuario.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/usuario/usuario.component.ts ***!
  \*********************************************************/
/*! exports provided: UsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioComponent", function() { return UsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsuarioComponent = /** @class */ (function () {
    function UsuarioComponent() {
    }
    UsuarioComponent.prototype.ngOnInit = function () {
    };
    UsuarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuario',
            template: __webpack_require__(/*! ./usuario.component.html */ "./src/app/components/usuario/usuario.component.html"),
            styles: [__webpack_require__(/*! ./usuario.component.css */ "./src/app/components/usuario/usuario.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UsuarioComponent);
    return UsuarioComponent;
}());



/***/ }),

/***/ "./src/app/models/login-credentials.model.ts":
/*!***************************************************!*\
  !*** ./src/app/models/login-credentials.model.ts ***!
  \***************************************************/
/*! exports provided: LoginCredentials, UsuarioSenha */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginCredentials", function() { return LoginCredentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioSenha", function() { return UsuarioSenha; });
var LoginCredentials = /** @class */ (function () {
    function LoginCredentials() {
    }
    return LoginCredentials;
}());

var UsuarioSenha = /** @class */ (function () {
    function UsuarioSenha() {
    }
    return UsuarioSenha;
}());



/***/ }),

/***/ "./src/app/models/plano-treino.models.ts":
/*!***********************************************!*\
  !*** ./src/app/models/plano-treino.models.ts ***!
  \***********************************************/
/*! exports provided: PlanoTreino, GrupoMuscular, Exercicio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanoTreino", function() { return PlanoTreino; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoMuscular", function() { return GrupoMuscular; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exercicio", function() { return Exercicio; });
var PlanoTreino = /** @class */ (function () {
    function PlanoTreino() {
    }
    return PlanoTreino;
}());

var GrupoMuscular = /** @class */ (function () {
    function GrupoMuscular() {
    }
    return GrupoMuscular;
}());

var Exercicio = /** @class */ (function () {
    function Exercicio() {
    }
    return Exercicio;
}());



/***/ }),

/***/ "./src/app/models/usuario.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/usuario.model.ts ***!
  \*****************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());



/***/ }),

/***/ "./src/app/pipes/minimize-text.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/minimize-text.pipe.ts ***!
  \*********************************************/
/*! exports provided: MinimizeTextPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinimizeTextPipe", function() { return MinimizeTextPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MinimizeTextPipe = /** @class */ (function () {
    function MinimizeTextPipe() {
    }
    MinimizeTextPipe.prototype.transform = function (value, size) {
        if (value && value.length > size) {
            return value.substr(0, size - 3) + '...';
        }
        else {
            return value;
        }
    };
    MinimizeTextPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'minimizeText' })
    ], MinimizeTextPipe);
    return MinimizeTextPipe;
}());



/***/ }),

/***/ "./src/app/services/aluno.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/aluno.service.ts ***!
  \*******************************************/
/*! exports provided: AlunoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoService", function() { return AlunoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlunoService = /** @class */ (function () {
    function AlunoService(http) {
        this.http = http;
    }
    AlunoService.prototype.obterUsuarios = function (nome) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + "/api/usuario/" + nome)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            return resp;
        }));
    };
    AlunoService.prototype.obterInfoUsuario = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + "/api/usuario/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            return resp;
        }));
    };
    AlunoService.prototype.salvarAluno = function (aluno) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + "/api/usuario", aluno)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            return resp;
        }));
    };
    AlunoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AlunoService);
    return AlunoService;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_usuario_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/usuario.model */ "./src/app/models/usuario.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.usuario = null;
        this.onAuthenticating = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    AuthService.prototype.obterUsuario = function () {
        var usuario = JSON.parse(localStorage.getItem('currentUser'));
        if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(usuario)) {
            return null;
        }
        else {
            return usuario['usuario'];
        }
    };
    AuthService.prototype.autenticar = function (credentials) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + "/api/auth", credentials)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            localStorage.setItem('currentUser', JSON.stringify(resp));
            var user = new _models_usuario_model__WEBPACK_IMPORTED_MODULE_5__["Usuario"]();
            return user;
        }));
    };
    AuthService.prototype.parseJwt = function (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(window.atob(base64));
    };
    ;
    AuthService.prototype.isAuthenticated = function () {
        var currentUser = localStorage.getItem('currentUser');
        if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(currentUser))
            return false;
        var token = JSON.parse(currentUser)['token'];
        if (token !== null) {
            var decodedToken = this.parseJwt(token);
            if (decodedToken.exp < Date.now() / 1000) {
                localStorage.clear();
                return false;
            }
        }
        return token !== null && !Object(util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(token);
    };
    AuthService.prototype.isAdmin = function () {
        var user = this.obterUsuario();
        return this.isAuthenticated() && user.administrador;
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/error-interceptor.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/error-interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/services/jwt-interceptor.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/jwt-interceptor.service.ts ***!
  \*****************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        request.headers
            .append('Content-type', 'application/json')
            .append('Access-Control-Allow-Origin', _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl);
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/services/plano-treino.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/plano-treino.service.ts ***!
  \**************************************************/
/*! exports provided: PlanoTreinoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanoTreinoService", function() { return PlanoTreinoService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlanoTreinoService = /** @class */ (function () {
    function PlanoTreinoService(http) {
        this.http = http;
    }
    PlanoTreinoService.prototype.obterUltimoPlanoTreino = function (usuario) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiBaseUrl + "/api/planoTreino/" + usuario.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(resp.gruposMusculares)) {
                var i = void 0, sortedArr = [];
                for (i = 0; i < resp.gruposMusculares.length; i++) {
                    sortedArr = resp.gruposMusculares[i].exercicios.sort(function (a, b) {
                        return a.ordem - b.ordem;
                    });
                    resp.gruposMusculares[i].exercicios = sortedArr;
                }
            }
            return resp;
        }));
    };
    PlanoTreinoService.prototype.salvarPlanoTreino = function (planoTreino) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiBaseUrl + "/api/planoTreino", planoTreino);
    };
    PlanoTreinoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PlanoTreinoService);
    return PlanoTreinoService;
}());



/***/ }),

/***/ "./src/app/slideInAnimation.ts":
/*!*************************************!*\
  !*** ./src/app/slideInAnimation.ts ***!
  \*************************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ])
]);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseUrl: "http://localhost:4200",
    apiBaseUrl: "https://localhost:5001"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\corpo-e-acao\academia-corpo-e-acao\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map