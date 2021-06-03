import {Injectable} from '@angular/core';
import {Performer} from "./performance";
import {Data} from "./performance-manager.service";

@Injectable({
  providedIn: 'root'
})
export class MapFunctionService extends Performer {

  public test = "0";

  constructor() {
    super();
  }


  public map_01_HO = (data: Array<Data>) => {
    return data.map(e => {
      e.randNum *= Math.random()
      return e;
    });
  }

  public map_01_FO = (data: Array<Data>) => {
    for (let i = 0; i < data.length; i++) {
      data[i].randNum *= Math.random();
    }
  }

  run(data: Array<any>, type: string) {
    switch (type) {
      case 'map-standard': {
        return this.perform(
          [...data],
          [...data],
          this.map_01_HO,
          this.map_01_FO)
      }
    }
  }


}
