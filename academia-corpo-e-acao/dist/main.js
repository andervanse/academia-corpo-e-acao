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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div id=\"container\">\r\n    <div id=\"header\">\r\n        <app-menu></app-menu>\r\n    </div>\r\n\r\n    <div id=\"body\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <br>\r\n    <div id=\"footer\">\r\n        <app-footer></app-footer>\r\n    </div>\r\n</div>\r\n"

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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_contato_contato_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/contato/contato.component */ "./src/app/components/contato/contato.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _components_ficha_treino_ficha_treino_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/ficha-treino/ficha-treino.component */ "./src/app/components/ficha-treino/ficha-treino.component.ts");
/* harmony import */ var _components_logoff_logoff_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/logoff/logoff.component */ "./src/app/components/logoff/logoff.component.ts");
/* harmony import */ var _services_plano_treino_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/plano-treino.service */ "./src/app/services/plano-treino.service.ts");
/* harmony import */ var _components_ficha_treino_editar_editar_ficha_treino_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/ficha-treino/editar/editar-ficha-treino.component */ "./src/app/components/ficha-treino/editar/editar-ficha-treino.component.ts");
/* harmony import */ var _pipes_minimize_text_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/minimize-text.pipe */ "./src/app/pipes/minimize-text.pipe.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'home', redirectTo: '' },
    { path: 'contato', component: _components_contato_contato_component__WEBPACK_IMPORTED_MODULE_9__["ContatoComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'logoff', component: _components_logoff_logoff_component__WEBPACK_IMPORTED_MODULE_14__["LogoffComponent"] },
    { path: 'ficha-treino', component: _components_ficha_treino_ficha_treino_component__WEBPACK_IMPORTED_MODULE_13__["FichaTreinoComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]] },
    { path: 'ficha-treino/editar', component: _components_ficha_treino_editar_editar_ficha_treino_component__WEBPACK_IMPORTED_MODULE_16__["EditarFichaTreinoComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pipes_minimize_text_pipe__WEBPACK_IMPORTED_MODULE_17__["MinimizeTextPipe"],
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_contato_contato_component__WEBPACK_IMPORTED_MODULE_9__["ContatoComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_ficha_treino_ficha_treino_component__WEBPACK_IMPORTED_MODULE_13__["FichaTreinoComponent"],
                _components_logoff_logoff_component__WEBPACK_IMPORTED_MODULE_14__["LogoffComponent"],
                _components_ficha_treino_editar_editar_ficha_treino_component__WEBPACK_IMPORTED_MODULE_16__["EditarFichaTreinoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].production })
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"], _services_plano_treino_service__WEBPACK_IMPORTED_MODULE_15__["PlanoTreinoService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
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

module.exports = "table thead {\r\n    text-align: center;\r\n}\r\n\r\ntable td {\r\n    text-align: center;\r\n    font-weight: normal;\r\n}\r\n\r\n.modal-card-title {\r\n    color: white;\r\n}\r\n\r\n.modal-card-head, .modal-card-foot {\r\n    background-color: #209cee;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n }\r\n\r\n.ng-invalid:not(form):not(.ng-pristine)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n }\r\n\r\ntable.table {\r\n    width:100%;\r\n}\r\n\r\ntd, a, button, input {\r\n    font-size: 16px;\r\n}\r\n\r\n.is-mobile {\r\n    display: none;\r\n}\r\n\r\n.is-desktop {\r\n    display: block;\r\n}\r\n\r\n.is-font-white {\r\n    color:white;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .modal-card {\r\n        width:98%;\r\n    }\r\n    .modal-card-title {\r\n        font-size: 20px;\r\n    }\r\n    .is-mobile {\r\n        display: block;\r\n    }\r\n    .is-desktop {\r\n        display: none;\r\n    }\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/ficha-treino/editar/editar-ficha-treino.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/ficha-treino/editar/editar-ficha-treino.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!aluno\">\r\n\r\n  <div class=\"box is-orange\">\r\n    <div class=\"field is-grouped\">\r\n      <p class=\"control\">\r\n        <input class=\"input\" type=\"text\" placeholder=\"Procurar Aluno\" width=\"200px\" #nameImput>\r\n        \r\n      </p>\r\n      <p class=\"control\">\r\n        <a class=\"button is-info fas fa-search\" (click)=\"onFind(nameImput.value)\"></a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"box is-orange\" *ngIf=\"!alunos\">\r\n    <span class=\"title is-5 is-font-white\">Nenhum aluno selecionado</span>\r\n  </div>\r\n\r\n  <div class=\"box is-orange\" *ngIf=\"alunos\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <td>Alunos</td>\r\n          <td>Editar Treino</td>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let aluno of alunos\">\r\n          <td>{{ aluno.nome }}</td>\r\n          <td><a class=\"button is-info\" (click)=\"onUserSelected(aluno)\">Selecionar</a></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"tile is-ancestor\" *ngIf=\"aluno\">\r\n  <div class=\"tile is-vertical\">\r\n    <div class=\"tile\">\r\n      <div class=\"tile is-parent is-vertical\" *ngIf=\"planoTreino\">\r\n\r\n        <div class=\"tile notification is-info\">\r\n          <p class=\"title is-4\">\r\n            {{ aluno.nome }} &nbsp;&nbsp;\r\n            <a class=\"button is-danger is-pulled-right\" (click)=\"onUserSelected(undefined)\">Sair</a>\r\n          </p>\r\n\r\n        </div>\r\n        <article class=\"tile is-child notification is-orange\" *ngFor=\"let grupo of planoTreino.gruposMusculares\">\r\n          <p class=\"title is-4\">{{ grupo.descricao }}</p>\r\n          <hr>\r\n          <p class=\"subtitle\">\r\n            <a class=\"button is-info\" (click)=\"onToggleExercicioModal(grupo.descricao)\">\r\n              Adicionar Exercício</a>\r\n          </p>\r\n          <table class=\"table is-striped is-narrow\">\r\n            <thead>\r\n              <tr>\r\n                <td>Exerc.</td>\r\n                <td>Ordem</td>\r\n                <td>Repet.</td>\r\n                <td></td>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let item of grupo.exercicios\">\r\n                <td>\r\n                  <span class=\"is-mobile\">{{ item.descricao | minimizeText:7 }}</span> \r\n                  <span class=\"is-desktop\">{{ item.descricao }}</span>\r\n                </td>\r\n                <td>{{ item.ordem }}</td>\r\n                <td>{{ item.repeticao }}</td>\r\n                <td>\r\n                  <a class=\"button is-danger fas fa-trash-alt\" (click)=\"onExcluirExercicio(grupo.descricao, item.descricao)\"></a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </article>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal\" #novoExercicioModal>\r\n  <div class=\"modal-background\"></div>\r\n  <div class=\"modal-card\">\r\n    <form #exercicioForm=\"ngForm\" novalidate autocomplete=\"off\" (ngSubmit)=\"onNovoExercicioSubmit()\">\r\n      <header class=\"modal-card-head is-blue\">\r\n        <p class=\"modal-card-title\">\r\n          {{ grupoSelecionado }}\r\n        </p>\r\n        <button class=\"delete\" aria-label=\"close\" (click)=\"onToggleExercicioModal(grupoSelecionado)\"></button>\r\n      </header>\r\n      <section class=\"modal-card-body\">\r\n        <div class=\"field\">\r\n          <p class=\"control\">\r\n            <input class=\"input\" type=\"text\" placeholder=\"Exercício\" name=\"descricao\" ngModel minlength=\"3\" required>\r\n          </p>\r\n        </div>\r\n        <div class=\"field\">\r\n          <p class=\"control\">\r\n            <input class=\"input\" type=\"number\" placeholder=\"Ordem\" name=\"ordem\" ngModel required>\r\n          </p>\r\n        </div>\r\n        <div class=\"field\">\r\n          <p class=\"control\">\r\n            <input class=\"input\" type=\"text\" placeholder=\"Repetição\" name=\"repeticao\" ngModel required>\r\n          </p>\r\n        </div>\r\n      </section>\r\n      <footer class=\"modal-card-foot is-blue\">\r\n        <button class=\"button is-success\" type=\"submit\">Salvar</button>\r\n        <button class=\"button\" (click)=\"onToggleExercicioModal(grupoSelecionado)\">Cancelar</button>\r\n      </footer>\r\n    </form>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _models_login_credentials_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/login-credentials.model */ "./src/app/models/login-credentials.model.ts");
/* harmony import */ var _services_plano_treino_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/plano-treino.service */ "./src/app/services/plano-treino.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
    function EditarFichaTreinoComponent(planoTreinoService, authService) {
        this.planoTreinoService = planoTreinoService;
        this.authService = authService;
    }
    EditarFichaTreinoComponent.prototype.ngOnInit = function () {
    };
    EditarFichaTreinoComponent.prototype.onFind = function (nomeAluno) {
        var _this = this;
        if (nomeAluno.length > 2) {
            this.planoTreinoService.obterUsuarios(nomeAluno).subscribe(function (resp) {
                if (resp && resp.length > 0) {
                    _this.alunos = resp;
                }
                else {
                    _this.alunos = null;
                }
            });
        }
    };
    EditarFichaTreinoComponent.prototype.onUserSelected = function (aluno) {
        var _this = this;
        this.aluno = aluno;
        if (this.aluno) {
            this.planoTreinoService.obterUltimoPlanoTreino(this.aluno).subscribe(function (resp) {
                _this.planoTreino = resp;
                console.log(resp);
                if (!_this.planoTreino) {
                    _this.planoTreino = new _models_login_credentials_model__WEBPACK_IMPORTED_MODULE_1__["PlanoTreino"]();
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
                console.log(resp);
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
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], EditarFichaTreinoComponent.prototype, "exercicioForm", void 0);
    EditarFichaTreinoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editar-ficha-treino',
            template: __webpack_require__(/*! ./editar-ficha-treino.component.html */ "./src/app/components/ficha-treino/editar/editar-ficha-treino.component.html"),
            styles: [__webpack_require__(/*! ./editar-ficha-treino.component.css */ "./src/app/components/ficha-treino/editar/editar-ficha-treino.component.css")]
        }),
        __metadata("design:paramtypes", [_services_plano_treino_service__WEBPACK_IMPORTED_MODULE_2__["PlanoTreinoService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
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

module.exports = "\r\ntable.table {\r\n    width:100%;\r\n}\r\n\r\ntd {\r\n    font-size: 14px;\r\n}\r\n\r\n@media only screen and (max-width: 568px) {\r\n    td {\r\n        font-size: 12px;\r\n    }\r\n}\r\n\r\ntable thead {\r\n    text-align: center;\r\n    font-weight: bolder;\r\n}\r\n\r\ntable td {\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/ficha-treino/ficha-treino.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/ficha-treino/ficha-treino.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tile is-ancestor\">\r\n  <div class=\"tile is-vertical\">\r\n    <div class=\"tile\">\r\n      <div class=\"tile is-parent is-vertical\" *ngIf=\"planoTreino\">\r\n        <article class=\"tile is-child notification is-orange\" *ngFor=\"let grupo of planoTreino.gruposMusculares\">\r\n          <p class=\"title is-4\">{{ grupo.descricao }}</p>\r\n          <p class=\"subtitle\"></p>\r\n          <table class=\"table is-striped\">\r\n            <thead>\r\n              <tr>\r\n                <td>Exercício</td>\r\n                <td>Ordem</td>\r\n                <td>Séries/Repet.</td>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let item of grupo.exercicios\">\r\n                <td>{{ item.descricao }}</td>\r\n                <td>{{ item.ordem }}</td>\r\n                <td>{{ item.repeticao }}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </article>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
        var usuario = this.authService.obterUsuario();
        this.planoTreinoService.obterUltimoPlanoTreino(usuario).subscribe(function (resp) {
            _this.planoTreino = resp;
            console.log(resp);
        });
    };
    FichaTreinoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ficha-treino',
            template: __webpack_require__(/*! ./ficha-treino.component.html */ "./src/app/components/ficha-treino/ficha-treino.component.html"),
            styles: [__webpack_require__(/*! ./ficha-treino.component.css */ "./src/app/components/ficha-treino/ficha-treino.component.css")]
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

module.exports = "\r\n    <div class=\"content has-text-centered\">\r\n      <p>\r\n        &copy; 2018 - Academia Corpo & Ação\r\n      </p>\r\n    </div>\r\n\r\n"

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

module.exports = "\r\ndiv.container {\r\n    width: 80%;    \r\n}\r\n\r\ndiv p {\r\n    font-size: 18px;\r\n}\r\n\r\nli {\r\n    padding: 8px;\r\n    font-size: 16px;\r\n}\r\n\r\n@media only screen and (max-width: 1020px) {\r\n    div.container {\r\n       width: 280px;\r\n    }\r\n\r\n    div p {\r\n        font-size: 14px;\r\n    }    \r\n\r\n    li {\r\n        font-size: 14px;\r\n    }    \r\n}\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"tile is-ancestor\">\r\n    <div class=\"tile is-vertical\">\r\n      <div class=\"tile\">\r\n        <div class=\"tile is-parent is-vertical\">\r\n\r\n          <article class=\"tile is-child notification is-orange\">\r\n            <span class=\"title is-5\">Horário de Funcionamento</span>\r\n            <hr>\r\n            <ul class=\"subtitle has-text-centerd\">\r\n              <li>Segunda a Sexta-feira: 6h às 23h</li>\r\n              <li>Sábado: 9h às 18h</li>    \r\n              <li>Domingo e Feriado: 10h às 17h</li>\r\n            </ul>\r\n          </article>\r\n\r\n          <article class=\"tile is-child notification is-orange\">\r\n            <span class=\"title is-5\">Avisos</span>\r\n            <hr>\r\n            <p>\r\n              Aviso de teste na página principal\r\n              Mais um aviso\r\n            </p>\r\n          </article>     \r\n          \r\n          <article class=\"tile is-child notification is-orange\">\r\n            <span class=\"title is-5\">Promoções</span>\r\n            <hr>\r\n            <p>\r\n              Pague 3 mensalidades e ganhe 1 grátis\r\n            </p>\r\n          </article>   \r\n          <article class=\"tile is-child notification is-orange\">\r\n            <span class=\"title is-5\">Mais conteúdo</span>\r\n            <hr>\r\n            <p>\r\n              Conteúdo informativo\r\n            </p>\r\n          </article>                   \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

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
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
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

module.exports = ".card-header-title {\r\n    color:white;\r\n}\r\n  \r\ndiv.container {\r\n      width: 30%;\r\n}\r\n  \r\n.ng-valid[required], .ng-valid.required  {\r\n   border-left: 5px solid #42A948; /* green */\r\n}\r\n  \r\n.ng-invalid:not(form):not(.ng-pristine)  {\r\n   border-left: 5px solid #a94442; /* red */\r\n}\r\n  \r\n@media only screen and (max-width: 1020px) {\r\n   div.container {\r\n      width: 255px;\r\n   }\r\n}\r\n  \r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero\">\r\n  <div class=\"hero-body\">\r\n\r\n    <div class=\"container\">\r\n        <div *ngIf=\"loginFailed\" class=\"notification is-danger\" (click)=\"onNotificationClick(loginForm)\">\r\n            <button class=\"delete\"></button>\r\n            <h4 class=\"title is-4 has-text-centered\">\r\n              *Usuário ou senha inválido\r\n            </h4>\r\n          </div>\r\n\r\n      <div class=\"card\">\r\n        <header class=\"card-header\">\r\n          <h5 class=\"card-header-title title is-5 is-orange\">\r\n            Login\r\n          </h5>\r\n        </header>\r\n        <div class=\"card-content\">\r\n          <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit(loginForm)\" novalidate> \r\n            <div class=\"field\">\r\n              <p class=\"control has-icons-left\">\r\n                <input class=\"input\" type=\"email\" placeholder=\"Email\" name=\"email\" ngModel required minlength=\"8\" maxlength=\"30\">\r\n                <span class=\"icon is-small is-left\">\r\n                  <i class=\"fas fa-envelope\"></i>\r\n                </span>\r\n              </p>\r\n            </div>\r\n            <div class=\"field\">\r\n              <p class=\"control has-icons-left\">\r\n                <input class=\"input\" type=\"password\" placeholder=\"Password\" name=\"password\" ngModel required minlength=\"6\">\r\n                <span class=\"icon is-small is-left\">\r\n                  <i class=\"fas fa-lock\"></i>\r\n                </span>\r\n              </p>\r\n            </div>\r\n            <button type=\"submit\" class=\"button is-info is-pulled-right\" [disabled]=\"!loginForm.form.valid\">Login</button>\r\n          </form>\r\n          <br>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

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
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.valid) {
            var credentials = new _models_login_credentials_model__WEBPACK_IMPORTED_MODULE_3__["LoginCredentials"]();
            credentials.login = form.value.email;
            credentials.senha = form.value.password;
            this.authService.autenticar(credentials).subscribe(function (resp) {
                _this.loginFailed = false;
                _this.router.navigate(['ficha-treino']);
            }, function (error) {
                console.log(error);
                _this.loginFailed = true;
            });
        }
    };
    LoginComponent.prototype.onNotificationClick = function (form) {
        form.reset();
        this.loginFailed = false;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
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

module.exports = "\r\n.navbar {\r\n    background-color: rgb(50, 157, 245);    \r\n}\r\n\r\n.navbar-item {\r\n    font-size: 20px;\r\n    color: white;\r\n}\r\n\r\na.button {\r\n    font-size: 16px;    \r\n}\r\n\r\n.hero-body {\r\n    padding: 20px;\r\n}\r\n\r\nspan.tag:not(body) {\r\n    height: 100%;\r\n}\r\n\r\n@media only screen and (max-width: 1087px) {\r\n    section.hero {\r\n        height: 140px;\r\n    }\r\n    .container img {\r\n        height: 100px;\r\n    }\r\n    .navbar-item {\r\n        color: black;\r\n    }\r\n    span.tag:not(body) {\r\n        width: 0%;\r\n        visibility: hidden;\r\n    }\r\n \r\n}"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\r\n\r\n  <div class=\"navbar-brand\">\r\n\r\n    <a class=\"navbar-item\" routerLink=\"home\">\r\n      <!-- <span class=\"tag is-info\" *ngIf=\"isAuthenticated()\">Logado</span> -->\r\n      <img src=\"assets/img/dumbell_512x512-icon.png\">\r\n    </a>\r\n\r\n    <a role=\"button\" class=\"navbar-burger burger\" (click)=\"onNavBarClick()\" #navBarBurger aria-label=\"menu\"\r\n      aria-expanded=\"false\" data-target=\"navbarBasic\">\r\n      <span aria-hidden=\"true\"></span>\r\n      <span aria-hidden=\"true\"></span>\r\n      <span aria-hidden=\"true\"></span>\r\n    </a>\r\n  </div>\r\n\r\n  <div id=\"navbarBasic\" class=\"navbar-menu\" #navBarMenu>\r\n    <div class=\"navbar-start\">\r\n      <a routerLink=\"home\" class=\"navbar-item\" (click)=\"onNavBarClick()\">\r\n        Home\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"navbar-end\">\r\n      <a *ngIf=\"isAdmin()\" [routerLink]=\"['ficha-treino', 'editar']\" class=\"navbar-item\" (click)=\"onNavBarClick()\">\r\n        Editar Fichas\r\n      </a>\r\n\r\n      <a *ngIf=\"isAuthenticated() && !isAdmin()\" routerLink=\"ficha-treino\" class=\"navbar-item\" (click)=\"onNavBarClick()\">\r\n        Ficha\r\n      </a>\r\n\r\n      <a routerLink=\"contato\" class=\"navbar-item\" (click)=\"onNavBarClick()\">\r\n        Contato\r\n      </a>\r\n      \r\n      <div class=\"navbar-item\">\r\n        <div class=\"buttons\">\r\n          <a *ngIf=\"!isAuthenticated()\" routerLink=\"login\" class=\"button is-orange\" (click)=\"onNavBarClick()\">\r\n            Log in\r\n          </a>\r\n          <a *ngIf=\"isAuthenticated()\" routerLink=\"logoff\" class=\"button is-orange\" (click)=\"onNavBarClick()\">\r\n              &nbsp;&nbsp; Sair &nbsp;&nbsp;\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</nav>\r\n\r\n<section class=\"hero\">\r\n  <div class=\"hero-body\">\r\n    <div class=\"container\">\r\n      <div class=\"has-text-centered\">\r\n        <img class=\"has-text-centered\" src=\"assets/img/corpo-e-acao-academia.png\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

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
        this.usuario = this.authService.usuario;
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

/***/ "./src/app/models/login-credentials.model.ts":
/*!***************************************************!*\
  !*** ./src/app/models/login-credentials.model.ts ***!
  \***************************************************/
/*! exports provided: LoginCredentials, Usuario, PlanoTreino, GrupoMuscular, Exercicio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginCredentials", function() { return LoginCredentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanoTreino", function() { return PlanoTreino; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoMuscular", function() { return GrupoMuscular; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exercicio", function() { return Exercicio; });
var LoginCredentials = /** @class */ (function () {
    function LoginCredentials() {
    }
    return LoginCredentials;
}());

var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());

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
    };
    MinimizeTextPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'minimizeText' })
    ], MinimizeTextPipe);
    return MinimizeTextPipe;
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
/* harmony import */ var _models_login_credentials_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/login-credentials.model */ "./src/app/models/login-credentials.model.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
        this.onAuthenticating = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    }
    AuthService.prototype.getHeaders = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]().append('Access-Control-Allow-Origin', _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl)
            .append('Content-type', 'application/json');
    };
    AuthService.prototype.obterUsuario = function () {
        var usuario = JSON.parse(localStorage.getItem('usuario'));
        if (usuario == null || usuario == undefined) {
            return null;
        }
        else {
            return {
                id: usuario['id'],
                nome: usuario['nome'],
                administrador: usuario['administrador'] || false
            };
        }
    };
    AuthService.prototype.autenticar = function (credentials) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + "api/auth", credentials, { headers: this.getHeaders() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            localStorage.setItem('token', resp['token']);
            localStorage.setItem('usuario', JSON.stringify(resp['usuario']));
            var user = new _models_login_credentials_model__WEBPACK_IMPORTED_MODULE_1__["Usuario"]();
            user.id = resp['usuario']['id'];
            user.nome = resp['usuario']['nome'];
            user.administrador = resp['usuario']['administrador'];
            return user;
        }));
    };
    AuthService.prototype.confirmarEmail = function (email, id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + "api/auth/" + email + "/" + id, {
            headers: this.getHeaders()
        });
    };
    AuthService.prototype.authenticate = function (token) {
        this.logout();
        if (token !== null && !Object(util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(token)) {
            localStorage.setItem('token', token);
            this.onAuthenticating.emit(true);
        }
    };
    AuthService.prototype.parseJwt = function (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(window.atob(base64));
    };
    ;
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('token');
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
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], AuthService);
    return AuthService;
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
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
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
    function PlanoTreinoService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    PlanoTreinoService.prototype.getHeaders = function () {
        var token = this.auth.getToken();
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]()
            .append('Content-type', 'application/json')
            .append('Access-Control-Allow-Origin', _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiBaseUrl)
            .append('Authorization', 'Bearer ' + token);
    };
    PlanoTreinoService.prototype.obterUsuarios = function (nome) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiBaseUrl + "api/usuario/" + nome, { headers: this.getHeaders() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp;
        }));
    };
    PlanoTreinoService.prototype.obterUltimoPlanoTreino = function (usuario) {
        var user = this.auth.obterUsuario();
        console.log(user);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiBaseUrl + "api/planoTreino/" + usuario.id, { headers: this.getHeaders() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp;
        }));
    };
    PlanoTreinoService.prototype.salvarPlanoTreino = function (planoTreino) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiBaseUrl + "api/planoTreino", planoTreino, { headers: this.getHeaders() });
    };
    PlanoTreinoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], PlanoTreinoService);
    return PlanoTreinoService;
}());



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
    apiBaseUrl: "https://localhost:5001/"
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

module.exports = __webpack_require__(/*! C:\Projects\CeA\academia-corpo-e-acao\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map