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
var area_service_1 = require('./area.service');
var AreasComponent = (function () {
    function AreasComponent(router, areaService) {
        this.router = router;
        this.areaService = areaService;
        // Radar
        this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ];
        this.radarChartType = 'radar';
    }
    AreasComponent.prototype.getAreas = function () {
        var _this = this;
        this.areaService.getAreas().then(function (areas) { return _this.areas = areas; });
    };
    AreasComponent.prototype.ngOnInit = function () {
        this.getAreas();
    };
    AreasComponent.prototype.onSelect = function (area) { this.selectedArea = area; };
    AreasComponent.prototype.gotoDetail = function () {
        this.router.navigate(['AreaDetail', { id: this.selectedArea.id }]);
    };
    AreasComponent = __decorate([
        core_1.Component({
            selector: 'areas',
            templateUrl: 'app/areas.component.html',
            styleUrls: ['app/areas.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, area_service_1.AreaService])
    ], AreasComponent);
    return AreasComponent;
}());
exports.AreasComponent = AreasComponent;
//# sourceMappingURL=areas.component.js.map