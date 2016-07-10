import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Area } from './area';
import { AreaService } from './area.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  areas: Area[] = [];

  constructor(
    private router: Router,
    private areaService: AreaService) {
  }

  ngOnInit() {
    this.areaService.getAreas()
    .then(areas => this.areas = areas.slice(0,3));
  }
  gotoDetail(area: Area) {
    let link = [ 'AreaDetail', { id: area.id }];
    this.router.navigate(link);
  }
}