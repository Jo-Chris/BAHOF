import {Injectable} from '@angular/core';


export interface PerformanceResult {
  fo_start: number;
  fo_end: number;
  fo_diff: number;
  fo_output: number;

  ho_start: number;
  ho_end: number;
  ho_diff: number
  ho_output: number;
}

export interface Data {
  id: number;
  name: string;
  email: string;
  password: string;
  country: string;
  randNum: number;
}

@Injectable({
  providedIn: 'root'
})
export class PerformanceManagerService {

  constructor() {
  }


}
