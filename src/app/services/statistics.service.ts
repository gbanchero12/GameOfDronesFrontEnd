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
    });

    return statistics[1];

    /*statistics = statistics[1] as StatisticsModel[];

    const joinedStaditics: StatisticsModel[] = [];
    joinedStaditics.push(statistics[0]);
    for (let i = 0; i <= statistics.length; i++) {
      const actual = statistics[i];

      // tslint:disable-next-line: prefer-for-of
      for (let j = 0 ; j <= joinedStaditics.length; j++) {
        const actualJoined = joinedStaditics[j];
        if (actual.PLAYER === actualJoined.PLAYER) {
          actualJoined.SCORE++;

        } else {
          joinedStaditics.push(actual);
        }
      }
    }

    return joinedStaditics;*/
  }

}
