import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { DashboardComponent } from './dashboard.component';
import { AreasComponent } from './areas.component';
import { AreaDetailComponent } from './area-detail.component';
import { AreaService } from './area.service';

@Component({
  selector: 'geoblink',
  template: `
  <h1>{{title}}</h1>
  <nav>
  <a [routerLink]="['Dashboard']">Info</a>
  <a [routerLink]="['Areas']">Graph</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
  ROUTER_PROVIDERS,
  AreaService
  ]
})

@RouteConfig([
{
  path: '/dashboard',
  name: 'Dashboard',
  component: DashboardComponent,
  useAsDefault: true
},
{
  path: '/detail/:id',
  name: 'AreaDetail',
  component: AreaDetailComponent
},
{
  path: '/areas',
  name: 'Areas',
  component: AreasComponent
}
])

export class AppComponent {
  title = 'Geoblink';
}