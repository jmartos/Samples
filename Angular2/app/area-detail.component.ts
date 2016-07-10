import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Area } from './area';
import { AreaService } from './area.service';

@Component({
  selector: 'area-detail',
  templateUrl: 'app/area-detail.component.html',
  
})
export class AreaDetailComponent implements OnInit {
  area: Area;

  constructor(
    private areaService: AreaService,
    private routeParams: RouteParams) {
  }
  
  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.areaService.getArea(id)
    .then(area => this.area = area);
  }
  goBack() {
    window.history.back();
  }
}