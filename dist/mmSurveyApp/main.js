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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = ".wrapper {\r\n  background-color: #e6f1f9;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n.header {\r\n  width: 100%;\r\n  height: 200px;\r\n  display: block;\r\n  background-color: #e6f1f9;\r\n  background-image: url('Formulario-01.png');\r\n  background-size: cover;\r\n  background-position: top center;\r\n}\r\n.container {\r\n  width: calc(100% - 150px);\r\n  padding: 55px;\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  background-color: white;\r\n  display: block;\r\n  border-top: 12px solid rgb(111, 182, 255);\r\n  position: relative;\r\n  top: -70px;\r\n}\r\n.shadow {\r\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\r\n}\r\n.footer {\r\n  width: 100%;\r\n  min-height: 300px;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  padding: 25px 0px;\r\n  display: block;\r\n  text-align: center;\r\n  font: 400 14px Roboto, RobotoDraft, Helvetica, Arial, sans-serif;\r\n\r\n  color: rgba(0, 0, 0, 0.66);\r\n}\r\n.footer h3 {\r\n  font-size: 1.25em;\r\n  font-weight: 500;\r\n  width: calc(100% - 150px);\r\n  padding: 25px;\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n  display: block;\r\n}\r\n.view h1 {\r\n  margin: 20px 5px;\r\n  font-weight: 700;\r\n  font-size: 25pt;\r\n}\r\n.view p {\r\n  text-align: left;\r\n  line-height: 1.5em;\r\n  word-break: keep-all;\r\n}\r\nbutton {\r\n  border: none;\r\n  background-color: #eee;\r\n  color: #444;\r\n  font-weight: 400;\r\n  padding: 12px;\r\n  margin: 5px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  min-width: 8em;\r\n}\r\nbutton:hover {\r\n  background-color: #ddd;\r\n}\r\n.question {\r\n  display: block;\r\n\r\n  width: 100%;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n\r\n  text-align: left;\r\n\r\n  padding: 5px;\r\n  margin: 5px;\r\n}\r\n.question label {\r\n  display: block;\r\n  padding: 5px;\r\n  margin: 5px 0px;\r\n}\r\n.question input {\r\n  display: inline-block;\r\n  width: 275px;\r\n  padding: 5px;\r\n  margin: 5px;\r\n}\r\n.question input[type=\"year\"] {\r\n  display: inline-block;\r\n  width: 120px;\r\n  padding: 5px;\r\n  margin: 5px;\r\n}\r\n.question select {\r\n  display: inline-block;\r\n  width: 85px;\r\n  padding: 5px;\r\n  margin: 5px;\r\n}\r\n.question select.area {\r\n  width: 200px;\r\n}\r\n.question span.error {\r\n  display: block;\r\n  padding: 5px;\r\n  margin: 5px 0px;\r\n  font-size: 0.8em;\r\n  color: red;\r\n}\r\n.question .asterix {\r\n  font-size: 1.1em;\r\n  color: red;\r\n}\r\nul {\r\n  padding: 5px;\r\n  text-align: left;\r\n}\r\nli {\r\n  padding: 10px;\r\n  text-transform: uppercase;\r\n  line-height: 1.1em;\r\n}\r\nstrong {\r\n  font-weight: 600;\r\n}\r\n.header-logo {\r\n  display: block;\r\n  margin: 0 auto;\r\n  height: calc(100% - 100px);\r\n  padding: 15px;\r\n}\r\n.inputfile {\r\n  width: 0.1px;\r\n  height: 0.1px;\r\n  opacity: 0;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  z-index: -1;\r\n}\r\n.inputfile + .labelfile {\r\n  font-size: 1.25em;\r\n  font-weight: 700;\r\n  color: white;\r\n  background-color: black;\r\n  display: inline-block;\r\n}\r\n.inputfile:focus + .labelfilel,\r\n.inputfile + .labelfile:hover {\r\n  background-color: red;\r\n}\r\n.inputfile + .labelfile {\r\n  cursor: pointer; /* \"hand\" cursor */\r\n}\r\n.inputfile:focus + .labelfile {\r\n  outline: 1px dotted #000;\r\n  outline: -webkit-focus-ring-color auto 5px;\r\n}\r\n.inputfile + .labelfile * {\r\n  pointer-events: none;\r\n}\r\n.labelfile {\r\n  border: none;\r\n  background-color: #eee;\r\n  color: #444;\r\n  font-weight: 400;\r\n  padding: 15px !important;\r\n  margin: 5px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  width: -webkit-fit-content !important;\r\n  width: -moz-fit-content !important;\r\n  width: fit-content !important;\r\n}\r\n.labelfile:hover {\r\n  background-color: #ddd;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n\r\n  <div class=\"header\">\r\n    <img src=\"../assets/favicon.png\" class=\"header-logo\">\r\n  </div>\r\n\r\n  <div class=\"container shadow\">\r\n\r\n    <div class=\"view welcome\" *ngIf=\"viewState == 'welcome'\">\r\n      <br>\r\n      <h1>INSTRUCCIONES:</h1>\r\n      <br>\r\n      <p>La presente prueba virtual contiene solo 3 PREGUNTAS.\r\n        <br>\r\n        <br> Cada respuesta (una sola por pregunta) debe brindarse seleccionando y ADJUNTANDO UN ARCHIVO que contenga el documento\r\n        solicitado\r\n        <br>( WORD o PDF, a su criterio).</p>\r\n      <br>\r\n      <button (click)=\"goTo('info-personal')\">SIGUIENTE</button>\r\n    </div>\r\n    <div class=\"view info-personal\" *ngIf=\"viewState == 'info-personal'\">\r\n\r\n      <h1>INFORMACIÓN DE CONTACTO</h1>\r\n\r\n      <div class=\"question\">\r\n        <label>NOMBRES Y APELLIDOS\r\n          <span class=\"asterix\">*</span>\r\n        </label>\r\n        <input placeholder=\"Ingresa tus nombres y apellidos\" type=\"text\" [(ngModel)]=\"info.name\">\r\n        <span class=\"error\" *ngIf=\"errors.info.name\">{{errors.info.name}}\r\n        </span>\r\n      </div>\r\n      <br>\r\n\r\n      <div class=\"question\">\r\n        <label>CORREO ELECTRONICO\r\n          <span class=\"asterix\">*</span>\r\n        </label>\r\n        <input placeholder=\"Ingresa tu dirección de correo electrónico\" type=\"email\" [(ngModel)]=\"info.email\">\r\n        <span class=\"error\" *ngIf=\"errors.info.email\">{{errors.info.email}}</span>\r\n      </div>\r\n      <br>\r\n\r\n      <div class=\"question\">\r\n        <label>IDENTIFICACIÓN (C.C o C.E)\r\n          <span class=\"asterix\">*</span>\r\n        </label>\r\n        <input placeholder=\"Ingresa tu numero de documento de identificación\" type=\"text\" [(ngModel)]=\"info.id.number\">\r\n        <select [(ngModel)]=\"info.id.type\">\r\n          <option *ngFor=\"let  idType of  idTypes\" [value]=\" idType\">{{ idType}}</option>\r\n        </select>\r\n        <span class=\"error\" *ngIf=\"errors.info.id.number\">{{errors.info.id.number}}</span>\r\n        <span class=\"error\" *ngIf=\"errors.info.id.type\">{{errors.info.id.type}}</span>\r\n      </div>\r\n      <br>\r\n\r\n      <div class=\"question\">\r\n        <label>NUMERO DE TARJETA PROFESIONAL\r\n          <span class=\"asterix\">*</span>\r\n        </label>\r\n        <input placeholder=\"Ingresa tu numero de tarjeta profesional\" type=\"email\" [(ngModel)]=\"info.professionalCard\">\r\n        <span class=\"error\" *ngIf=\"errors.info.professionalCard\">{{errors.info.professionalCard}}</span>\r\n      </div>\r\n      <br>\r\n\r\n      <div class=\"question\">\r\n        <label>CELULAR\r\n          <span class=\"asterix\">*</span>\r\n        </label>\r\n        <input type=\"tel\" [(ngModel)]=\"info.cellphone\" placeholder=\"Ingresa un numero de celular \">\r\n        <span class=\"error\" *ngIf=\"errors.info.cellphone\">{{errors.info.cellphone}}</span>\r\n      </div>\r\n      <br>\r\n\r\n      <div class=\"question\">\r\n        <label>CIUDAD\r\n          <span class=\"asterix\">*</span>\r\n        </label>\r\n        <input placeholder=\"Ingresa tu ciudad de residencia\" type=\"text\" [(ngModel)]=\"info.city\">\r\n        <span class=\"error\" *ngIf=\"errors.info.city\">{{errors.info.city}}</span>\r\n      </div>\r\n      <br>\r\n\r\n      <div class=\"question\">\r\n        <label>TELEFONO FIJO CON INDICATIVO (OPCIONAL)\r\n        </label>\r\n        <input type=\"tel\" [(ngModel)]=\"info.phone\" placeholder=\"Ingresa un numero de telefono \">\r\n      </div>\r\n      <br>\r\n\r\n      <div class=\"question\">\r\n        <label>DIRECCIÓN (OPCIONAL)\r\n        </label>\r\n        <input placeholder=\"Ingresa tu dirección\" type=\"text\" [(ngModel)]=\"info.address\">\r\n      </div>\r\n      <br>\r\n\r\n      <br>\r\n      <button (click)=\"goTo('welcome')\">ATRAS</button>\r\n      <button (click)=\"goTo('info-professional')\">SIGUIENTE</button>\r\n    </div>\r\n    <div class=\"view info-professional\" *ngIf=\"viewState == 'info-professional'\">\r\n\r\n      <h1>INFORMACIÓN PROFESIONAL</h1>\r\n\r\n      <div class=\"question\">\r\n        <label>UNIVERSIDAD EN QUE OBTUVO TITULO DE ABOGADO\r\n          <span class=\"asterix\">*</span>\r\n        </label>\r\n        <input placeholder=\"Nombre de la universidad\" type=\"text\" [(ngModel)]=\"professional.undegraduated.institution\">\r\n        <input placeholder=\"Año de graduación\" type=\"year\" [(ngModel)]=\"professional.undegraduated.year\">\r\n        <span class=\"error\" *ngIf=\"errors.professional.undegraduated.institution\">{{errors.professional.undegraduated.institution}}</span>\r\n        <span class=\"error\" *ngIf=\"errors.professional.undegraduated.year\">{{errors.professional.undegraduated.year}}</span>\r\n      </div>\r\n      <br>\r\n\r\n      <div class=\"question\">\r\n        <label>UNIVERSIDAD EN QUE OBTUVO TITULO DE POSTGRADO\r\n          <span class=\"asterix\">*</span>\r\n        </label>\r\n        <input placeholder=\"Nombre de la universidad\" type=\"text\" [(ngModel)]=\"professional.graduated.institution\">\r\n        <input placeholder=\"Año de graduación\" type=\"year\" [(ngModel)]=\"professional.graduated.year\">\r\n        <select [(ngModel)]=\"professional.title\" class=\"area\" (change)=\"onChange()\">\r\n          <option *ngFor=\"let title of titles\" [value]=\"title\">{{title}}</option>\r\n        </select>\r\n        <span class=\"error\" *ngIf=\"errors.professional.graduated.institution\">{{errors.professional.graduated.institution}}</span>\r\n        <span class=\"error\" *ngIf=\"errors.professional.graduated.year\">{{errors.professional.graduated.year}}</span>\r\n        <span class=\"error\" *ngIf=\"errors.professional.title\">{{errors.professional.title}}</span>\r\n      </div>\r\n      <br>\r\n\r\n      <div class=\"question\">\r\n        <label> SELECCIONE SU ESPECIALIDAD\r\n          <span class=\"asterix\">*</span>\r\n        </label>\r\n        <select [(ngModel)]=\"professional.area.type\" class=\"area\" (change)=\"onChange()\">\r\n          <option *ngFor=\"let area of areas\" [value]=\"area\">{{area}}</option>\r\n        </select>\r\n        <input placeholder=\"Especifique su especialidad\" type=\"text\" [(ngModel)]=\"professional.area.other\" *ngIf=\"isAreaOther\">\r\n        <span class=\"error\" *ngIf=\"errors.professional.area.main\">{{errors.professional.area.main}}</span>\r\n\r\n      </div>\r\n      <br>\r\n\r\n      <br>\r\n      <button (click)=\"goTo('info-personal')\">ATRAS</button>\r\n      <button (click)=\"goTo('exam')\">SIGUIENTE</button>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <div class=\"view info\" *ngIf=\"viewState == 'exam'\">\r\n\r\n      <h1>PRUEBAS ABOGADO ESPECIALISTA</h1>\r\n      <br>\r\n\r\n      <div class=\"question\">\r\n        <label>Favor redacte propuesta y sustentación de modificación de un artículo de una ley, decreto o resolución del área de\r\n          su especialidad ; en máximo una página tamaño carta.</label>\r\n        <label for=\"file1\" class=\"labelfile\">{{files.proposalText}}</label>\r\n        <input id=\"file1\" class=\"inputfile\" type=\"file\" (change)=\"onFileChangeProposal($event)\" accept=\".pdf,.doc,.docx\" />\r\n      </div>\r\n      <br>\r\n\r\n      <div class=\"question\">\r\n        <label>Favor adjunte un archivo de recurso judicial, demanda o alegatos de conclusión que en los últimos tres años haya\r\n          redactado en su ESPECIALIDAD.</label>\r\n        <label for=\"file2\" class=\"labelfile\">{{files.resourceText}}</label>\r\n        <input id=\"file2\" class=\"inputfile\" type=\"file\" (change)=\"onFileChangeResource($event)\" accept=\".pdf,.doc,.docx\">\r\n      </div>\r\n      <br>\r\n\r\n      <div class=\"question\">\r\n        <label>Favor adjunte un \"CONCEPTO JURIDICO ESCRITO\" que en los últimos tres años haya redactado en su especialidad.</label>\r\n        <label for=\"file3\" class=\"labelfile\">{{files.conceptText}}</label>\r\n        <input id=\"file3\" class=\"inputfile\" type=\"file\" (change)=\"onFileChangeConcept($event)\" accept=\".pdf,.doc,.docx\">\r\n      </div>\r\n      <br>\r\n\r\n      <br>\r\n      <button (click)=\"goTo('info-professional')\">ATRAS</button>\r\n      <button (click)=\"goTo('confirm')\">CONFIRMAR</button>\r\n    </div>\r\n\r\n    <div class=\"view confirm\" *ngIf=\"viewState == 'confirm'\">\r\n\r\n      <br>\r\n      <h1>CONFIRMAR ENVIAR PRUEBA</h1>\r\n      <ul>\r\n        <li>\r\n          <strong>NOMBRES</strong> : {{info.name}}</li>\r\n        <li>\r\n          <strong>CORREO ELECTRONICO </strong>:{{info.email}} </li>\r\n        <li>\r\n          <strong>IDENTIFICACIÓN </strong>: {{info.id.tpye}} {{info.id.number}}</li>\r\n        <li>\r\n          <strong>TELEFONO CELULAR</strong> : {{info.cellphone}}</li>\r\n        <li *ngIf=\"info.phone\">\r\n          <strong>TELEFONO FIJO</strong> : {{info.phone}}</li>\r\n        <li>RESIDE EN LA CIUDAD DE {{info.city}}\r\n          <span *ngIf=\"info.address\">\r\n            <strong>EN LA DIRECCIÓN</strong>\r\n          </span> {{info.address}}</li>\r\n        <li> GRAUADO DE ABOGADO EN LA UNIVERSIDAD\r\n          <strong>{{professional.undegraduated.institution}}</strong> EL AÑO {{professional.undegraduated.year}}</li>\r\n        <li>{{professional.title}} EN\r\n          <strong>{{professional.area.main}}</strong> DE LA UNIVERSIDAD {{professional.graduated.institution}} GRADUADO EL AÑO {{professional.undegraduated.year}}\r\n        </li>\r\n      </ul>\r\n\r\n      <button (click)=\"goTo('exam')\">ATRAS</button>\r\n      <button (click)=\"uploadFormToServer()\">ENVIAR</button>\r\n    </div>\r\n\r\n    <div class=\"view thanks\" *ngIf=\"viewState == 'thanks'\">\r\n      <h1>MUCHAS GRACIAS </h1>\r\n      <h2>Pronto nuestro equipo se comunicara con usted via email al correo {{info.email}}\r\n        <br> o mediante llamada telefonica al numero {{info.cellphone}}</h2>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <div class=\"footer\">\r\n    <h3>\r\n      Si tiene problemas técnicos para presentar la prueba, que por favor nos escriban sus preguntas o inquietudes a\r\n      <a href=\"mailto:INFO@MAYORGA.COM.CO\">info@mayorga.com.co</a>\r\n    </h3>\r\n    <br>\r\n    <br> Todos los derechos reservados Copyright © {{currentYear}}. Desarrollado por Mayorga Abogados.\r\n    <br>\r\n    <br> SEDE 1 (Consultoría Corporativa) Av. El Dorado No. 68C-61 Oficina 204-Torre Central Davivienda\r\n    <br> SEDE 2 (Arbitramento y Litigio): Calle 22 F No. 85 A-40 Piso 2\r\n    <br> Bogotá D.C. - Colombia\r\n    <br>\r\n    <a href=\"http://mayorga.com.co\"> www.mayorga.com.co </a>\r\n  </div>"

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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        // TODO : DATOS PERSONALES, INSTRUCCIONES, 2 ipnput file opcionales
        this.title = "app";
        this.fileToUpload = null;
        this.currentYear = "2018";
        this.viewState = "welcome";
        this.checkError = "";
        this.titles = ["ESPECIALISTA", "MAGISTER", "DOCTOR"];
        this.idTypes = ["c.c.", "c.e."];
        this.areas = [
            "DERECHO ADUANERO",
            "DERECHO CAMBIARIO",
            "DERECHO TRIBUTARIO",
            "DERECHO COMERCIAL",
            "DERECHO LABORAL",
            "DERECHO AMBIENTAL",
            "CONTRATACION ADMINISTRATIVA",
            "DERECHO PENAL",
            "DERECHO DE FAMILIA",
            "DERECHO DE MINAS Y ENERGETICO",
            "DERECHO DE LAS COMUNICACIONES",
            "DERECHO INTERNACIONAL",
            "DERECHO ADMINISTRATIVO",
            "OTRO"
        ];
        this.isAreaOther = false;
        this.info = {
            name: "",
            email: "",
            id: {
                number: "",
                type: ""
            },
            professionalCard: "",
            cellphone: "",
            city: "",
            address: "",
            phone: ""
        };
        this.professional = {
            title: "Titulo Obtenido en el Postgrado",
            undegraduated: {
                institution: "",
                year: ""
            },
            graduated: {
                institution: "",
                year: ""
            },
            area: {
                type: "",
                main: "",
                other: ""
            }
        };
        this.files = {
            proposal: null,
            resource: null,
            concept: null,
            proposalText: "ADJUNTAR PROPUESTA",
            resourceText: "ADJUNTAR RECURSO",
            conceptText: "ADJUNTAR CONCEPTO"
        };
        this.errors = {
            info: {
                name: "",
                email: "",
                id: {
                    number: "",
                    type: ""
                },
                professionalCard: "",
                cellphone: "",
                city: "",
                address: "",
                phone: ""
            },
            professional: {
                title: "",
                undegraduated: {
                    institution: "",
                    year: ""
                },
                graduated: {
                    institution: "",
                    year: ""
                },
                area: {
                    type: "",
                    main: "",
                    other: ""
                }
            }
        };
        this.viewState = "welcome";
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.buildForm = function () {
        var formData = new FormData();
        formData.append("name", this.info.name);
        formData.append("email", this.info.email);
        formData.append("idNumber", this.info.id.number);
        formData.append("idType", this.info.id.type);
        formData.append("professionalCard", this.info.professionalCard);
        formData.append("cellphone", this.info.cellphone);
        formData.append("city", this.info.city);
        formData.append("address", this.info.address);
        formData.append("phone", this.info.phone);
        formData.append("undergraduateInstitution", this.professional.undegraduated.institution);
        formData.append("undergraduateYear", this.professional.undegraduated.year);
        formData.append("graduateInstitution", this.professional.graduated.institution);
        formData.append("graduateYear", this.professional.graduated.year);
        formData.append("area", this.professional.area.main);
        formData.append("FileProposal", this.files.proposal);
        formData.append("FileResource", this.files.resource);
        formData.append("FileConcept", this.files.concept);
        return formData;
        //this.goTo("thanks");
    };
    AppComponent.prototype.goTo = function (view) {
        if (this.viewState == "welcome" || view == "welcome") {
            this.viewState = view;
            this.computedArea();
            window.scrollTo(0, 0);
        }
        else {
            var valid = this.checkView();
            if (valid.isOk) {
                this.viewState = view;
                this.computedArea();
                window.scrollTo(0, 0);
            }
            else {
                window.scrollTo(0, 0);
                window.console.log(valid);
            }
        }
    };
    AppComponent.prototype.checkView = function () {
        var _obj = {
            isOk: true
        };
        if (this.viewState == "info-personal") {
            if (!this.info.name) {
                this.errors.info.name = "Ingresa un nombre valido";
                _obj.isOk = false;
            }
            if (!this.validateEmail(this.info.email)) {
                this.errors.info.email = "Ingresa un email valido";
                _obj.isOk = false;
            }
            if (!this.info.id.number) {
                this.errors.info.id.number =
                    "Ingresa un numero de documento de id valido";
                _obj.isOk = false;
            }
            if (!this.info.id.type) {
                this.errors.info.id.type =
                    "Selecciona un tipo de documento de identidad : C.C O C.E";
                _obj.isOk = false;
            }
            if (!this.info.professionalCard) {
                this.errors.info.professionalCard =
                    "Ingresa una tarjeta profesional valida";
                _obj.isOk = false;
            }
            if (!this.info.cellphone) {
                this.errors.info.cellphone = "Ingresa un numero de telefono valido";
                _obj.isOk = false;
            }
            if (!this.info.city) {
                this.errors.info.city = "Ingresa una ciudad valida";
                _obj.isOk = false;
            }
        }
        if (this.viewState == "info-professional") {
            if (!this.professional.undegraduated.institution) {
                this.errors.professional.undegraduated.institution =
                    "Ingresa una universidad valida";
                _obj.isOk = false;
            }
            if (!this.professional.undegraduated.year) {
                this.errors.professional.undegraduated.year = "Ingresa una año valido";
                _obj.isOk = false;
            }
            if (!this.professional.graduated.institution) {
                this.errors.professional.graduated.institution =
                    "Ingresa una universidad valida";
                _obj.isOk = false;
            }
            if (!this.professional.graduated.year) {
                this.errors.professional.graduated.year = "Ingresa una año valido";
                _obj.isOk = false;
            }
            if (!this.professional.area.main) {
                this.errors.professional.area.main =
                    "Ingresa un area del derecho valido";
                _obj.isOk = false;
            }
            if (!this.professional.title) {
                this.errors.professional.title =
                    "Ingresa un titulo de postgrado valido";
                _obj.isOk = false;
            }
        }
        _obj.isOk = true;
        return _obj;
    };
    AppComponent.prototype.onChange = function () {
        if (this.professional.area.type == "OTRO") {
            this.isAreaOther = true;
        }
        else {
            this.isAreaOther = false;
        }
    };
    AppComponent.prototype.computedArea = function () {
        if (this.professional.area.type == "OTRO") {
            this.professional.area.main = this.professional.area.other;
        }
        else {
            this.professional.area.main = this.professional.area.type;
        }
    };
    AppComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    AppComponent.prototype.onFileChangeProposal = function (event) {
        var file = event.target.files[0];
        this.files.proposal = file;
        this.files.proposalText = file.name;
    };
    AppComponent.prototype.onFileChangeResource = function (event) {
        var file = event.target.files[0];
        this.files.resource = file;
        this.files.resourceText = file.name;
    };
    AppComponent.prototype.onFileChangeConcept = function (event) {
        var file = event.target.files[0];
        this.files.concept = file;
        this.files.conceptText = file.name;
    };
    AppComponent.prototype.uploadFormToServer = function () {
        window.console.log("Submiting Form");
        var data = this.buildForm();
        var url = "http://abogados.mayorga.com.co/uploadForms.php";
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, data)
            .then(function (response) {
            window.console.log(response.data);
            window.console.log(response);
        })
            .catch(function (error) {
            window.console.log("error");
        });
    };
    AppComponent.prototype.handleError = function (error) {
        console.error(error);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _views_vw_welcome_vw_welcome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/vw-welcome/vw-welcome.component */ "./src/app/views/vw-welcome/vw-welcome.component.ts");
/* harmony import */ var _views_vw_personal_info_vw_personal_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/vw-personal-info/vw-personal-info.component */ "./src/app/views/vw-personal-info/vw-personal-info.component.ts");
/* harmony import */ var _views_vw_thanks_vw_thanks_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/vw-thanks/vw-thanks.component */ "./src/app/views/vw-thanks/vw-thanks.component.ts");
/* harmony import */ var _views_vw_exam_vw_exam_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/vw-exam/vw-exam.component */ "./src/app/views/vw-exam/vw-exam.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _views_vw_welcome_vw_welcome_component__WEBPACK_IMPORTED_MODULE_8__["VwWelcomeComponent"],
                _views_vw_personal_info_vw_personal_info_component__WEBPACK_IMPORTED_MODULE_9__["VwPersonalInfoComponent"],
                _views_vw_thanks_vw_thanks_component__WEBPACK_IMPORTED_MODULE_10__["VwThanksComponent"],
                _views_vw_exam_vw_exam_component__WEBPACK_IMPORTED_MODULE_11__["VwExamComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  footer works!\r\n</p>\r\n"

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

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  header works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/vw-exam/vw-exam.component.css":
/*!*****************************************************!*\
  !*** ./src/app/views/vw-exam/vw-exam.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/vw-exam/vw-exam.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/vw-exam/vw-exam.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  vw-exam works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/views/vw-exam/vw-exam.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/vw-exam/vw-exam.component.ts ***!
  \****************************************************/
/*! exports provided: VwExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VwExamComponent", function() { return VwExamComponent; });
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

var VwExamComponent = /** @class */ (function () {
    function VwExamComponent() {
    }
    VwExamComponent.prototype.ngOnInit = function () {
    };
    VwExamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vw-exam',
            template: __webpack_require__(/*! ./vw-exam.component.html */ "./src/app/views/vw-exam/vw-exam.component.html"),
            styles: [__webpack_require__(/*! ./vw-exam.component.css */ "./src/app/views/vw-exam/vw-exam.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VwExamComponent);
    return VwExamComponent;
}());



/***/ }),

/***/ "./src/app/views/vw-personal-info/vw-personal-info.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/vw-personal-info/vw-personal-info.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/vw-personal-info/vw-personal-info.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/vw-personal-info/vw-personal-info.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  vw-personal-info works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/views/vw-personal-info/vw-personal-info.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/vw-personal-info/vw-personal-info.component.ts ***!
  \**********************************************************************/
/*! exports provided: VwPersonalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VwPersonalInfoComponent", function() { return VwPersonalInfoComponent; });
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

var VwPersonalInfoComponent = /** @class */ (function () {
    function VwPersonalInfoComponent() {
    }
    VwPersonalInfoComponent.prototype.ngOnInit = function () {
    };
    VwPersonalInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vw-personal-info',
            template: __webpack_require__(/*! ./vw-personal-info.component.html */ "./src/app/views/vw-personal-info/vw-personal-info.component.html"),
            styles: [__webpack_require__(/*! ./vw-personal-info.component.css */ "./src/app/views/vw-personal-info/vw-personal-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VwPersonalInfoComponent);
    return VwPersonalInfoComponent;
}());



/***/ }),

/***/ "./src/app/views/vw-thanks/vw-thanks.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/vw-thanks/vw-thanks.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/vw-thanks/vw-thanks.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/vw-thanks/vw-thanks.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  vw-thanks works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/views/vw-thanks/vw-thanks.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/vw-thanks/vw-thanks.component.ts ***!
  \********************************************************/
/*! exports provided: VwThanksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VwThanksComponent", function() { return VwThanksComponent; });
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

var VwThanksComponent = /** @class */ (function () {
    function VwThanksComponent() {
    }
    VwThanksComponent.prototype.ngOnInit = function () {
    };
    VwThanksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vw-thanks',
            template: __webpack_require__(/*! ./vw-thanks.component.html */ "./src/app/views/vw-thanks/vw-thanks.component.html"),
            styles: [__webpack_require__(/*! ./vw-thanks.component.css */ "./src/app/views/vw-thanks/vw-thanks.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VwThanksComponent);
    return VwThanksComponent;
}());



/***/ }),

/***/ "./src/app/views/vw-welcome/vw-welcome.component.css":
/*!***********************************************************!*\
  !*** ./src/app/views/vw-welcome/vw-welcome.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/vw-welcome/vw-welcome.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/vw-welcome/vw-welcome.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  vw-welcome works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/views/vw-welcome/vw-welcome.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/vw-welcome/vw-welcome.component.ts ***!
  \**********************************************************/
/*! exports provided: VwWelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VwWelcomeComponent", function() { return VwWelcomeComponent; });
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

var VwWelcomeComponent = /** @class */ (function () {
    function VwWelcomeComponent() {
    }
    VwWelcomeComponent.prototype.ngOnInit = function () {
    };
    VwWelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vw-welcome',
            template: __webpack_require__(/*! ./vw-welcome.component.html */ "./src/app/views/vw-welcome/vw-welcome.component.html"),
            styles: [__webpack_require__(/*! ./vw-welcome.component.css */ "./src/app/views/vw-welcome/vw-welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VwWelcomeComponent);
    return VwWelcomeComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User.THESIGN_MALE\Documents\GitHub\MM_20180707_Tohyo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map