import {Data, PerformanceResult} from "./performance-manager.service";

export abstract class Performer {
  abstract run(data: Array<any>, type: string)

  public perform = (dFO: Array<Data>, dHO: Array<Data>, fFO: (data: Array<Data>) => any, fHO: (data: Array<Data>) => any): PerformanceResult => {

    let basic = performance.now();
    let result_FO = fFO(dFO);
    let basic_end = performance.now();

    let higher_order = performance.now();
    let result_HO = fHO(dHO);
    let higher_order_end = performance.now();

    return {
      fo_start: basic,
      fo_end: basic_end,
      ho_start: higher_order,
      ho_end: higher_order_end,
      fo_diff: basic_end - basic,
      ho_diff: higher_order_end - higher_order,
      fo_output: result_FO,
      ho_output: result_HO,
    };
  }
}
