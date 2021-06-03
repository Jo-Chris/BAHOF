import {Injectable} from '@angular/core';
import {Data, PerformanceManagerService} from "./performance-manager.service";
import {Performer} from "./performance";


@Injectable({
  providedIn: 'root'
})
export class ForEachFunctionService extends Performer {

  constructor() {
    super();
  }

  public run(data: Array<any>, type: string) {
    switch (type) {
      case 'forEach-standard': {
        return this.perform(
          data.slice(),
          data.slice(),
          this.forEach_01_FO,
          this.forEach_01_HO)
      }
    }
  }

  public forEach_01_FO = (datastructure: Array<Data>) => {
    for (let i = 0; i < datastructure.length; i++) {
    }
  }

  public forEach_01_HO = (datastructure: Array<Data>) => {
    datastructure.forEach(e => e.country);
  }
}
