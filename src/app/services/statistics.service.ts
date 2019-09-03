import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { StatisticsModel } from '../models/statistics.model';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getStatistics() {
    return this.http.get(`${this.url}/statistics`)
      .pipe(
        map(this.createArray)
      );
  }

  // tslint:disable-next-line: no-debugger
  private createArray(statisticsObject: object) {

    if (statisticsObject == null) { return []; }

    let statistics: any[] = [];

    Object.keys(statisticsObject).forEach(key => {
      const statistic = statisticsObject[key];
      statistics.push(statistic);
      console.log(statistics);
    });

    return statistics[1];
  }

}
