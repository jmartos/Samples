import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Area } from './area';
import { AreaService } from './area.service';
import {CHART_DIRECTIVES} from '../../../ng2-charts';


@Component({
  selector: 'areas',
  templateUrl: 'app/areas.component.html',
  styleUrls: ['app/areas.component.css'],
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class AreasComponent implements OnInit {
  areas: Area[];
  selectedArea: Area;

  constructor(
    private router: Router,
    private areaService: AreaService) { }

  getAreas() {
    this.areaService.getAreas().then(areas => this.areas = areas);
  }

  ngOnInit() {
    this.getAreas();
  }

  onSelect(area: Area) { this.selectedArea = area; }

  gotoDetail() {
    this.router.navigate(['AreaDetail', { id: this.selectedArea.id }]);
  }

  // Radar
  public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData:any = [
  {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
  {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];
  public radarChartType:string = 'radar';
}