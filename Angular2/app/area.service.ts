import { Injectable } from '@angular/core';
import { Area } from './area';
import { AREAS } from './mock-areas';

@Injectable()
export class AreaService {
  getAreas() {
    return Promise.resolve(AREAS);
  }
  getAreasSlowly() {
    return new Promise<Area[]>(resolve =>
      setTimeout(()=>resolve(AREAS), 2000)
      );
  }
  getArea(id: number) {
    return this.getAreas()
    .then(areas => areas.filter(area => area.id === id)[0]);
  }
}

