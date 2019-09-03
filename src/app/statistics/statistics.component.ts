import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';
import { StatisticsModel } from '../models/statistics.model';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  statistics: StatisticsModel[] = [];

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit() {
    this.statisticsService.getStatistics()
      .subscribe(resp => this.statistics = resp);
  }

}
