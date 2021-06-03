import {Injectable} from '@angular/core';
import {Data, PerformanceManagerService} from "./performance-manager.service";
import {Performer} from "./performance";


@Injectable({
  providedIn: 'root'
})
export class FilterFunctionService extends Performer {

  constructor() {
    super();
  }

  public run(data: Array<any>, type: string) {
    switch (type) {
      case 'filter-standard': {
        return this.perform(data.slice(), data.slice(), this.filter_01_FO, this.filter_01_HO)
      }
      case 'filter-chaining': {
        return this.perform(data.slice(), data.slice(), this.filter_02_FO, this.filter_02_HO)
      }
    }
  }

  public filter_01_HO = (datastructure: Array<Data>) => {
    return datastructure.filter(e => e.country !== 'Austria')
  }

  public filter_01_FO = (data: Array<Data>) => {
    let i = 0;
    let j = 0;

    while (i < data.length) {
      if (data[i].country) {
        if (data[i].country !== 'Austria') {
          data[j++] = data[i];
        }
      }

      i++;
    }

    data.length = j;
    return data;
  }

  public filter_02_HO = (datastructure: Array<any>) => {
    return datastructure
      .filter(e => e.country !== 'Austria')
      .map(e => e.favourite_number)
  }

  public filter_02_FO = (datastructure: Array<any>) => {
    let i = 0;
    let j = 0;

    while (i < datastructure.length) {
      const val = datastructure[i];

      if (val.country) {
        if (val.country !== 'Austria') {
          datastructure[j++] = val.favourite_number;
        }
      }

      i++;
    }

    datastructure.length = j;

    return datastructure;
  }
}
