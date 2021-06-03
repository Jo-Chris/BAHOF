import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MapFunctionService} from "./performance_tests/map-function.service";
import {FilterFunctionService} from "./performance_tests/filter-function.service";
import {PerformanceResult} from "./performance_tests/performance-manager.service";
import {DomSanitizer} from "@angular/platform-browser";
import {JsonToCsvService} from "./json-to-csv.service";
import {ForEachFunctionService} from "./performance_tests/forEach-function.service";
import {ReduceFunctionService} from "./performance_tests/reduce-function.service";

export interface ResultSet {
  type: string;
  result_FO: number;
  result_HO: number;
  result_FO_kum: number;
  result_HO_kum: number;
  data: number;
  round: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public _data: Array<any> = [];
  public isSystemReady = false;
  public createBigArray = false;
  public testcase = 'filter-standard'
  public currentRun = 0;
  public totalRun = 50;

  public results: Array<ResultSet> = [];

  public result_FO = 0;
  public result_HO = 0;
  public dataSeederAmount: number = 5;

  public baseData;

  constructor(
    private httpClient: HttpClient,
    private mapService: MapFunctionService,
    private forEachService: ForEachFunctionService,
    private filterService: FilterFunctionService,
    private reduceService: ReduceFunctionService,
    private sanitizer: DomSanitizer,
    private jsonToCSVService: JsonToCsvService
  ) {
  }

  public seedData() {
    this._data = [];

    for (let i = 0; i < this.dataSeederAmount; i++) {

      this._data = this._data.concat(this.baseData)
    }

    console.log('seeded!', this._data)
  }

  ngOnInit(): void {
    this.isSystemReady = false;
    this.createBigArray = true;

    this.httpClient.get('http://localhost:3030/api/data/properties').subscribe((data: Array<any>) => {
      this.baseData = data;
      this.createBigArray = false;

      if (data) {
        for (let i = 0; i < this.dataSeederAmount; i++) {
          this._data = [...this._data, ...data]
        }

        this.isSystemReady = true;
      }
    })
  }


  public async startTest() {
    this.result_HO = 0;
    this.result_FO = 0;
    this.results = [];
    this.currentRun = 0;
    let result: Partial<PerformanceResult>;

    for (let i = 0; i < this.totalRun; i++) {
      await this.wait(500);

      result = this.runTest()

      this.result_HO += result.ho_diff
      this.result_FO += result.fo_diff
      this.currentRun = i;

      if (this.currentRun === this.totalRun - 1) {
        console.log('FO', result.fo_output[0])
        console.log('HO', result.ho_output[0])
        console.log('CheckSum = ', result.fo_output[100] === result.ho_output[100])
      }

      this.results.push({
        type: this.testcase,
        result_HO: result.ho_diff,
        result_FO: result.fo_diff,
        result_HO_kum: this.result_HO,
        result_FO_kum: this.result_FO,
        data: this._data.length,
        round: this.totalRun,
      })
    }

    this.result_FO = this.result_FO / this.totalRun;
    this.result_HO = this.result_HO / this.totalRun;
  }

  wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }


  public runTest(): PerformanceResult {
    const data = [...this._data];

    switch (this.testcase) {
      case 'filter-standard': {
        return this.filterService.run(data, this.testcase)
      }

      case 'filter-chaining': {
        return this.filterService.run(data, this.testcase)
      }

      case 'map-standard': {
        return this.mapService.run(data, this.testcase)
      }

      case 'forEach-standard': {
        return this.forEachService.run(data, this.testcase)
      }

      case 'reduce-chain-3': {
        return this.reduceService.run(data, this.testcase)
      }
    }
  }

  define(string: string) {
    this.testcase = string;

    console.log('set to', this.testcase)
  }


  public download() {
    this.jsonToCSVService.exportCSVFile({
      'test': 'testcase',
      'ho': "Result HO",
      'fo': "Result FO",
      'hok': "Result HO Kumulativ",
      'fok': "Result - FO Kumulativ",
      'data': "Data size",
      'rounds': 'Rounds in Total',
    }, this.results, 'title')
  }
}
