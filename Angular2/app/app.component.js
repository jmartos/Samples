"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var dashboard_component_1 = require('./dashboard.component');
var areas_component_1 = require('./areas.component');
var area_detail_component_1 = require('./area-detail.component');
var area_service_1 = require('./area.service');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Geoblink';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'geoblink',
            template: "\n  <h1>{{title}}</h1>\n  <nav>\n  <a [routerLink]=\"['Dashboard']\">Info</a>\n  <a [routerLink]=\"['Areas']\">Graph</a>\n  </nav>\n  <router-outlet></router-outlet>\n  ",
            styleUrls: ['app/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                area_service_1.AreaService
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: dashboard_component_1.DashboardComponent,
                useAsDefault: true
            },
            {
                path: '/detail/:id',
                name: 'AreaDetail',
                component: area_detail_component_1.AreaDetailComponent
            },
            {
                path: '/areas',
                name: 'Areas',
                component: areas_component_1.AreasComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map