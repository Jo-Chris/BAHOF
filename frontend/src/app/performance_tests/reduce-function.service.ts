import {Injectable} from '@angular/core';
import {Performer} from "./performance";

@Injectable({
  providedIn: 'root'
})
export class ReduceFunctionService extends Performer {

  constructor() {
    super();
  }

  run(data: Array<any>, type: string) {
    switch (type) {
      case 'reduce-chain-3': {
        return this.perform(data.slice(), data.slice(), this.filter_03_Chaining_3_FO, this.filter_03_Chaining_3_HO)
      }
    }
  }

  public filter_03_Chaining_3_FO = (data: Array<any>) => {
    let i = 0;
    let j = 0;
    let sum = 0;

    while (i < data.length) {
      if (data[i].country) {
        if (data[i].country !== 'Austria') {
          sum += data[i].favourite_number;
        }
      }
      i++;
    }

    data.length = j;

    return sum;
  }

  public filter_03_Chaining_3_HO = (datastructure: Array<any>) => {
    return datastructure
      .filter(e => e.country !== 'Austria')
      .map(e => e.favourite_number)
      .reduce((a, b) => a + b, 0)
  }

}
